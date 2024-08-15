import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';  // Import the hook
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pdfViewer.css';
import { Viewer, Worker } from "@react-pdf-viewer/core";    
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

function PdfViewer() {
    const location = useLocation();  // Get location object
    const { path } = location.state || {};  // Extract path from location state

    const newPlugin = defaultLayoutPlugin();

    useEffect(() => {
        console.log('File Path:', path);
        console.log('newPlugin', newPlugin);
    }, [path]);

    return (
        <div className="pdfContainer">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                {path ? (
                    <Viewer fileUrl={path} plugins={[newPlugin]} />
                ) : (
                    <p>No PDF file found</p>
                )}
            </Worker>
        </div>
    )
}

export default PdfViewer;
