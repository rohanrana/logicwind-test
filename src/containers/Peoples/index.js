import React, { Component } from "react";
import { Row, Col, Button, Table, Pagination, Modal } from "antd";

import UtilService from "../../service/ApiService";
import { withRouter } from "react-router-dom";
import CardComponent from "../../components/CardComponent/CardComponent";

class Peoples extends Component {
  state = {
    offset: 5,
    current: 1,
    peoples: [],
    loading: false
  };
  componentDidMount() {
    this.GetPeoplesData();
  }

  GetPeoplesData = e => {
    let obj = {
      url: "https://swapi.co/api/people",
      method: "get"
    };

    this.setState({ loading: true }, () => {
      UtilService.callApi(obj, (err, data) => {
        this.setState({
          peoples: data.results,
          next: data.next,
          total: data.count,
          loading: false
        });
      });
    });
  };

  loadMoreData = () => {
    let obj = {
      url: this.state.next,
      method: "get"
    };
    this.setState({ loadmoreloading: true }, () => {
      UtilService.callApi(obj, (err, data) => {
        this.setState(prevState => ({
          peoples: prevState.peoples.concat(data.results),
          next: data.next,
          total: data.count,
          loadmoreloading: false
        }));
      });
    });
  };

  render() {
    let { peoples, loading, loadmoreloading } = this.state;
    return (
      <div className="site-card-border-less-wrapper">
        <Row gutter={16}>
          {!loading &&
            peoples.map((people, index) => {
              let data = people.films;

              return (
                <div
                  key={index}
                  onClick={() =>
                    this.props.history.push(`/${"people"}/${index + 1}/`)
                  }
                  style={{ cursor: "pointer" }}
                  className="card-wrapper"
                >
                  <h1>{people.name}</h1>
                  <hr />
                  <ul className="card-list-wrapper">
                    {data.slice(0, 5).map((d, index) => {
                       let id = d.split("/")[5]

                      return (
                        <span
                  key={index}

                          style={{ cursor: "pointer" }}
                          onClick={event => {
                            event.stopPropagation();
                            this.props.history.push(
                              `/${"films"}/${id}/`
                            );
                          }}
                        >{`film${index + 1}`}</span>
                      );
                    })}
                  </ul>
                </div>
              );

              // return (
              //   <CardComponent
              //      key={index}
              //      metaData={data}
              //     {...this.props}
              //     id={index + 1}
              //     detailLBL="people"
              //     {...people}
              //   />
              // );
            })}
        </Row>
        {loading && <h1>Fetching Peoples...</h1>}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          {this.state.next && (
            <Button disabled={loadmoreloading} onClick={this.loadMoreData}>
              {loadmoreloading ? "Loading More..." : "Load More"}
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Peoples);
