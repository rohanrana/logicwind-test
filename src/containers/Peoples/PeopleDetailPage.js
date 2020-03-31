import React, { Component } from "react";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";
import UtilService from "../../service/ApiService";
export class DetailPage extends Component {
  state = {
    detail: null,
    loading:false
  };

  componentDidMount() {
    this.GetDetail();
  }

  GetDetail = () => {
    let id = this.props.match.params.id;
    let obj = {
      url: `https://swapi.co/api/people/${id}/`,
      method: "get"
    };

    this.setState({loading:true},()=>{
        UtilService.callApi(obj, (err, data) => {
            this.setState({
              detail: data,
              loading:false
            });
          });
    })
   
  };
  render() {
    let { detail ,loading} = this.state;
    return (
      !loading?<div className="site-card-border-less-wrapper">
        <div style={{ textAlign: "center" }}>{detail && detail.name}</div>
        <div className="meta-detail-wrapper">
          <div className="detail-inner">
            <label>Height : </label>
            {detail && <label> {detail.height}</label>}
          </div>
          <div className="detail-inner">
            <label>Mass : </label>
            {detail && <label> {detail.mass}</label>}
          </div>
          <div className="detail-inner">
            <label>Hair Color : </label>
            {detail && <label> {detail.hair_color}</label>}
          </div>
          <div className="detail-inner">
            <label>Skin Color : </label>
            {detail && <label> {detail.skin_color}</label>}
          </div>
          <div className="detail-inner">
            <label>Gender : </label>
            {detail && <label> {detail.gender}</label>}
          </div>
          <div className="detail-inner">
            <label> Birth Year : </label>
            {detail && <label> {detail.birth_year}</label>}
          </div>
        </div>
      </div>:<h2>Fetching Detail.....</h2>
    );
  }
}

export default withRouter(DetailPage);
