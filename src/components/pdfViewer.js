import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pdfViewer.css';
import { Viewer, Worker } from "@react-pdf-viewer/core";    
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'


function PdfViewer() {
    let params = useParams();  // Get parameters object
    const {path} = useParams();  // Get the path parameter
    const newPlugin = defaultLayoutPlugin();

    useEffect(() => {
        console.log('File Path at PDF Viewer:', decodeURIComponent(params.path));
    },[path]);

    return (
        <div className="pdfContainer">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                {path ? (
                    <Viewer fileUrl={decodeURIComponent(params.path)} plugins={[newPlugin]} defaultScale={1}/>
                ) : (
                    <p>No PDF file found</p>
                )}
            </Worker>
        </div>
    )
}

export default PdfViewer;
