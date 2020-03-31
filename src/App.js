import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationFilled,
  NotificationOutlined
} from "@ant-design/icons";
import "./App.css";
import { withRouter } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">
            <span>SWAPI</span>
          </div>

          <Menu
            defaultSelectedKeys={["people"]}
            defaultOpenKeys={["sub1"]}
            onClick={e => {
              //  console.log("KEY",key)
              this.props.history.push(`/${e.key}`);
            }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          >
            <Menu.Item key="people">
              {" "}
              <span>
                <UserOutlined />
                Peoples
              </span>
            </Menu.Item>
            <Menu.Item key="films">
              {" "}
              <span>
                <UserOutlined />
                Films
              </span>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["people"]}
              defaultOpenKeys={["sub1"]}
              onClick={e => {
                //  console.log("KEY",key)
                this.props.history.push(`/${e.key}`);
              }}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="people">
                {" "}
                <span>
                  <UserOutlined />
                  Peoples
                </span>
              </Menu.Item>
              <Menu.Item key="films">
                {" "}
                <span>
                  <UserOutlined />
                  Films
                </span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(App);
