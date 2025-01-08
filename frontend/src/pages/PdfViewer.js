import React, { useEffect, useState } from "react";
import { Spin, Typography } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
const { Title } = Typography;
const PdfViewer = () => {
    const { id } = useParams();
    console.log("BLACK 🖤💙 ===========>>>>>>>>> ~ file: PdfViewer.js:10 ~ PdfViewer ~ id:", id)
    const [pdfUrl, setPdfUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPdf = async () => {
            try {
                const response = await axios.post(`/users/getPdffile`, { id }, { responseType: 'blob' });
                const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
                setPdfUrl(url);
            } catch (error) {
                console.error("Error fetching PDF:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPdf();
    }, [id]);

    return (
        <div style={styles.container}>
            <Title level={3} style={styles.title}>
                PDF Viewer
            </Title>
            {loading ? (
                <Spin size="large" style={{ marginTop: "20px" }} />
            ) : pdfUrl ? (
                <iframe src={pdfUrl} style={styles.iframe} title="PDF Viewer" />
            ) : (
                <p style={{ color: "red" }}>Failed to load PDF.</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
    },
    title: {
        color: "#1890ff",
    },
    iframe: {
        width: "100%",
        height: "80vh",
        border: "none",
    },
};

export default PdfViewer;
