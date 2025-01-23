import React, { useRef, useState } from 'react'
import '../../styles/Upload.css'

export default function Upload() {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('');

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name); 
        }
    }

    return (
        <div id="demo" className="demo-container">
            <div className="demo-inner">
                <div className="text-center">
                    <p className="demo-subtitle">
                        See it in Action
                    </p>
                </div>

                <div className="demo-box">
                    <div className="demo-space">
                        <div className="upload-box">
                            <div className="upload-content">
                                <span className="upload-icon">Upload</span>
                                <p className="upload-text">
                                    Drag and drop an image or video, or click to upload
                                </p>
                                <button className="upload-button" onClick={handleButtonClick}>
                                    Upload File
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                                {fileName && <p className="file-name">Selected file: {fileName}</p>}
                            </div>
                        </div>

                        <div className="grid-container">
                            <div className="grid-item">
                                <div className="grid-content">
                                    <span className="grid-label">Detection Status</span>
                                    <span className="status-icon"><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-activity h-5 w-5 text-green-500"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3 6 12H2" />
                                    </svg>
                                    </span>
                                </div>
                                <p className="grid-value">Active</p>
                            </div>

                            <div className="grid-item">
                                <div className="grid-content">
                                    <span className="grid-label">Confidence Score</span>
                                    <span className="status-icon">📊</span>
                                </div>
                                <p className="grid-value">98%</p>
                            </div>

                            <div className="grid-item">
                                <div className="grid-content">
                                    <span className="grid-label">Processing Time</span>
                                    <span className="status-icon">⏱</span>
                                </div>
                                <p className="grid-value">0.5s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}