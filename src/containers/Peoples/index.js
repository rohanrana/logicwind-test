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
        console.log("DATA", data);

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
        console.log("DATA", data);

        this.setState({
          peoples: [...this.state.peoples, ...data.results],
          next: data.next,
          total: data.count,
          loadmoreloading: false
        });
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
              return (
                <CardComponent  metaData={people.films} {...this.props} id={index + 1} detailLBL="people" {...people} />
              );
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

        {/* <div className={"pagination-wrapper"}>
              <Pagination
                defaultCurrent={1}
                // current={this.state.current}
                // onChange={this.handlePagination}
                pageSize={5}
                // total={this.state.paginationArray.length}
              />
            </div> */}
      </div>
    );
  }
}

export default withRouter(Peoples);
