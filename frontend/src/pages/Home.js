import React from "react";
import { Button, Layout, Typography, Row, Col, Space, Card } from "antd";
import { useNavigate } from "react-router-dom";
import {
  LogoutOutlined,
  FileAddOutlined,
  FileSearchOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

const Home = () => {
  const navigate = useNavigate();

  const handleCreateResume = () => {
    navigate("/createResume");
  };

  const handleListResume = () => {
    navigate("/listResume");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Header
        style={{
          backgroundColor: "black",
          padding: "0 20px",
          position: "relative",
        }}
      >
        <Title style={{ color: "white", textAlign: "center", margin: 15 }} level={3}>
          Resume Builder App
        </Title>
        <Button
          type="primary"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            fontSize: "16px",
          }}
        >
          Logout
        </Button>
      </Header>

      {/* Content */}
      <Content style={{ padding: "50px", display: "flex", justifyContent: "center" }}>
        <Row justify="center" style={{ width: "100%" }}>
          <Col xs={24} sm={20} md={16} lg={12}>
            <Card
              style={{
                padding: "20px",
                backgroundColor: "#fafafa",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Space direction="vertical" style={{ width: "100%" }} size="large">
                <Title level={2} style={{ textAlign: "center", color: "#096dd9" }}>
                  Welcome to the Resume Builder App! <SmileOutlined />
                </Title>
                <Text type="secondary" style={{ textAlign: "center", fontSize: "16px" }}>
                  Create professional resumes quickly and easily. Start by creating a new resume
                  or browse through the existing ones in your collection.
                </Text>
                <Row gutter={[16, 16]} justify="center" style={{ marginTop: "30px" }}>
                  <Col xs={24} sm={12}>
                    <Button
                      type="primary"
                      icon={<FileAddOutlined />}
                      onClick={handleCreateResume}
                      block
                      size="large"
                      style={{ fontSize: "16px" }}
                    >
                      Create Resume
                    </Button>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Button
                      type="default"
                      icon={<FileSearchOutlined />}
                      onClick={handleListResume}
                      block
                      size="large"
                      style={{ fontSize: "16px" }}
                    >
                      List of Resumes
                    </Button>
                  </Col>
                </Row>
              </Space>
            </Card>
          </Col>
        </Row>
      </Content>

      <Footer style={{ textAlign: "center", backgroundColor: "#f0f2f5", padding: "20px" }}>
        <Typography.Text type="secondary">Resume Builder App ©2025</Typography.Text>
      </Footer>
    </Layout>
  );
};

export default Home;
