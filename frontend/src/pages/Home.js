import React from "react";
// import { Button, Layout, Typography, Row, Col, Space, Card } from "antd";
import { useNavigate } from "react-router-dom";
// import Image from "next/image";
import { Button, Input, Typography, Layout } from "antd";
import { SearchOutlined } from "@ant-design/icons";


// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Search } from "lucide-react"

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
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-[#FF6F00] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-2">
              <span>🌍</span>
              <span>+1 877 260 3952</span>
            </div>
            <div className="relative">
              <Input
                prefix={<SearchOutlined className="text-gray-400" />}
                placeholder="Search site..."
                className="h-8 w-[200px] text-black"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <image
            src="https://sjc.microlink.io/v7fo38cwegtcD_0-QQoDi_UDksZe9cxIwgzfbYykryKpJHdhjfCg1bmZMSJRY3FY0zctVBbVTZ4aZeCACPkJTQ.jpeg"
            alt="BulkSMS Logo"
            width={180}
            height={50}
            className="h-auto w-auto"
          />
          <div className="hidden items-center gap-8 md:flex">
            {[
              "Solutions",
              "Developers",
              "Pricing",
              "Resources",
              "Company",
              "Contact Us",
            ].map((item) => (
              <Button type="link" className="text-gray-600 hover:text-[#FF6F00]" key={item}>
                {item}
              </Button>
            ))}
            <Button type="text">Login</Button>
            <Button type="primary" className="bg-[#0088FF] hover:bg-[#0066CC]">
              Sign Up Today
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
              Get Your
              <br />
              Message Across
            </h1>
            <p className="text-xl text-gray-600">
              A leading provider of business messaging solutions.
            </p>
            <Button type="primary" className="bg-[#0088FF] hover:bg-[#0066CC]">
              Register your account today
            </Button>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <image
              src="/placeholder.svg?height=400&width=600"
              alt="People using mobile phones"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center">
            <span className="block text-3xl font-bold text-gray-800">One Account,</span>
            <span className="block text-2xl font-bold text-[#FF6F00]">Many Ways to Send</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Send SMS from Web",
                description: "Use our responsive web app to access your online messaging account",
              },
              {
                title: "Use our SMS API",
                description: "Send SMSes automatically from your application of choice",
              },
            ].map((feature, index) => (
              <div key={index} className="rounded-lg bg-[#0088FF] p-8 text-white">
                <div className="mb-6 h-48 relative">
                  <image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Feature Illustration"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
