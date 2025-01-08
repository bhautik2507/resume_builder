import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Typography, message, Card } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:5000";

const { Title, Text } = Typography;

const CreateResume = () => {
  const [form] = Form.useForm();
  const [previewData, setPreviewData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await axios.post("/users/add", values);
      message.success("Resume submitted successfully!");
      form.resetFields();
      setPreviewData({});
      navigate("/listResume");
    } catch (error) {
      console.error(error);
      message.error("Failed to submit the resume. Please try again.");
    }
  };

  const handleFormChange = (_, allFields) => {
    setPreviewData(allFields);
  };

  return (
    <div style={{ background: "#f4f6f9", minHeight: "100vh", padding: "50px 0" }}>
      <Row justify="center" gutter={[24, 24]}>
        {/* Form Section */}
        <Col xs={22} sm={20} md={12} lg={10}>
          <Card
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "30px",
              backgroundColor: "#ffffff",
            }}
          >
            <Title level={3} style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}>
              Submit Your Resume
            </Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              onValuesChange={handleFormChange}
              autoComplete="off"
            >
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: "First name is required" }]}
              >
                <Input placeholder="Enter your first name" />
              </Form.Item>

              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: "Last name is required" }]}
              >
                <Input placeholder="Enter your last name" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                name="address"
                label="Address"
                rules={[{ required: true, message: "Address is required" }]}
              >
                <Input placeholder="Enter your address" />
              </Form.Item>

              <Form.Item
                name="mobileNumber"
                label="Mobile Number"
                rules={[
                  { required: true, message: "Mobile number is required" },
                  { pattern: /^\d{10}$/, message: "Enter a valid 10-digit number" },
                ]}
              >
                <Input placeholder="Enter your mobile number" />
              </Form.Item>

              <Form.Item
                name="experiences"
                label="Experiences"
                rules={[{ required: true, message: "Experiences are required" }]}
              >
                <Input.TextArea placeholder="Describe your experiences" rows={4} />
              </Form.Item>

              <Form.Item
                name="projects"
                label="Projects"
                rules={[{ required: true, message: "Projects are required" }]}
              >
                <Input.TextArea placeholder="List your projects" rows={4} />
              </Form.Item>

              <Form.Item
                name="hobbies"
                label="Hobbies"
                rules={[{ required: true, message: "Hobbies are required" }]}
              >
                <Input.TextArea placeholder="List your hobbies" rows={3} />
              </Form.Item>

              <Form.Item
                name="socialMedia"
                label="Social Media Links"
                rules={[{ required: true, message: "Social media links are required" }]}
              >
                <Input.TextArea placeholder="Provide your social media links" rows={3} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        {/* Preview Section */}
        <Col xs={22} sm={20} md={12} lg={10}>
          <Card
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f9f9f9",
              padding: "30px",
            }}
          >
            <Title level={4} style={{ textAlign: "center", color: "#2c3e50" }}>
              Resume Preview
            </Title>
            <div style={{ lineHeight: "1.8", fontSize: "16px" }}>
              {[
                { label: "Name", value: `${previewData.firstName || ""} ${previewData.lastName || ""}` },
                { label: "Email", value: previewData?.email},
                { label: "Address", value: previewData?.address},
                { label: "Mobile", value: previewData?.mobileNumber},
                { label: "Experiences", value: previewData?.experiences},
                { label: "Projects", value: previewData?.projects},
                { label: "Hobbies", value: previewData?.hobbies},
                { label: "Social Media", value: previewData?.socialMedia},
              ].map((item, index) => (
                <div key={index} style={{ marginBottom: "15px" }}>
                  <Text strong style={{ fontSize: "16px", color: "#34495e" }}>
                    {item.label}:{" "}
                  </Text>
                  <span style={{ fontSize: "16px", color: "#7f8c8d" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CreateResume;
