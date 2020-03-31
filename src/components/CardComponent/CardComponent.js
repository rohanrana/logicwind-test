import React from 'react';
import { Card ,Col} from "antd";

export default function CardComponent(props) {
  return (
      <Col onClick={()=>props.history.push(`/${props.detailLBL}/${props.id}`)} style={{marginTop:10,cursor:"pointer"}} span={8}>
      
      <Card title={props.name} bordered={false} style={{ width: 300 }}>
       {/* {props.metaData.map((d,index)=>{
            return <p>{props.detailLBL === "people"?`Film${index+1}`:`Charcter${index+1}`}</p>
       })} */}
  
    </Card>
      </Col>
  
  );
      }