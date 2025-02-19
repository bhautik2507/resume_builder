import React, { useEffect, useState } from "react";
import { Table, Tag, Card, Typography, Space, Divider, Button, Spin } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '@mdi/font/css/materialdesignicons.min.css';

const { Title, Text } = Typography;
axios.defaults.baseURL = "http://localhost:5000";

const ListResume = () => {
  const [resumeData, setResumeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResumes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/users/getResume`);
        setResumeData(response.data);
        console.log("BLACK 🖤💙 ===========>>>>>>>>> ~ file: ListResume.js:22 ~ fetchResumes ~ response:", response)
      } catch (error) {
        console.error("Error fetching resumes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const handleView = async (data) => {
    console.log("Viewing PDF for:", data);
    navigate(`/view-pdf/${data._id}`);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "name",
      render: (text, record) => (
        <Text strong style={{ color: "#096dd9" }}>
          {text} {record.lastName}
        </Text>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <Text copyable>{text}</Text>,
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
      render: (text) => <Text style={{ color: "#389e0d" }}>{text}</Text>,
    },
    {
      title: "Skills & Hobbies",
      dataIndex: "hobbies",
      key: "hobbies",
      render: (_, record) => (
        <Space size="small" direction="vertical">
          <Space wrap>
            {record.hobbies.map((hobby, index) => (
              <Tag color="magenta" key={index}>
                {hobby}
              </Tag>
            ))}
          </Space>
          <Space wrap>
            {record.experiences.map((exp, index) => (
              <Tag color="blue" key={index}>
                {exp}
              </Tag>
            ))}
          </Space>
        </Space>
      ),
    },
    {
      title: "Projects",
      dataIndex: "projects",
      key: "projects",
      render: (projects) => (
        <Space wrap>
          {projects.map((proj, index) => (
            <Tag color="purple" key={index}>
              {proj}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) =>
        new Date(createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Button
          type="primary"
          icon={<EyeOutlined />}
          onClick={() => handleView(record)}
          size="small"
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title level={2} style={styles.title}>
            Resumes List
          </Title>
          {loading ? (
            <Spin tip="Loading resumes..." size="large" />
          ) : (
            <Table
              dataSource={resumeData}
              columns={columns}
              rowKey="_id"
              pagination={{ pageSize: 5 }}
              bordered
              style={styles.table}
            />
          )}
        </Space>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
  },
  card: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0px",
    borderRadius: "50px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    color: "#1890ff",
  },
  divider: {
    margin: "16px 0",
    borderColor: "#d9d9d9",
  },
  table: {
    borderRadius: "8px",
  },
};

export default ListResume;
