"use client";

import axios from "axios";
import { useState } from "react";

export default function CreateSheetMusic() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        if (file) {
            const formData = new FormData();
            formData.append("sheet_music[pdf]", file);

            try {
                await axios.post("http://localhost:3000/sheet_music", formData);
                alert("File uploaded successfully!");
            } catch (error) {
                console.error("Error uploading file", error);
            }
        }
    };

    return (
        <div>
            <h2>Upload New Sheet Music</h2>
            <input 
                type="text" 
                onChange={handleFileChange}
            />
            <button onClick={handleSubmit}>Upload</button>
        </div>
    );
};