import React from "react";
import { Card, Col } from "antd";
import { Link } from "react-router-dom";
export default function CardComponent(props) {
  return (
    <Col style={{ marginTop: 10, cursor: "pointer" }} span={8}>
      <Card
        onClick={() => props.history.push(`/${props.detailLBL}/${props.id}`)}
        title={props.name}
        bordered={false}
        style={{ width: 300 }}
      >
        {props.metaData && (
          <ul className="card-detail-wrapper" >
            {props.metaData.splice(0, 5).map((d, index) => {
              let id = d.split("/")[5];
              let goto = props.detailLBL === "people" ? "films" : "people";
              return (
                <li
                  key={index}
                  className="card-list"
                  onClick={event => {
                    event.stopPropagation();
                    props.history.push(`/${goto}/${id}/`);
                  }}
                > 
                  {/* <Link to={`/${goto}/${id}/`}> */}{" "}
                  {props.detailLBL === "people"
                    ? `Film${index + 1}`
                    : `Charcter${index + 1}`}
                  {/* </Link> */}
                </li>
              );
            })}
            {props.metaData && props.metaData.length > 5 && (
              <li
              className="card-list invert"

                onClick={event => {
              let goto = props.detailLBL === "people" ? "films" : "people";

                  event.stopPropagation();
                  props.history.push(`/${goto}`);
                }}
              >
                View More
              </li>
            )}
          </ul>
        )}
      </Card>
    </Col>
  );
}
