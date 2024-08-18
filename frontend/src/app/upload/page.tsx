import axios from "axios";
import { useState } from "react"

const Upload = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files ? e.target.files[0] : null);
    };

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append('pdf', file);

        try {
            await axios.post('https://localhost:3000/sheet_music', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Upload successful!');
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Upload failed!');
        }
    }

    return (
        <div>
            <h1>Upload Sheet Music</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="file" 
                    accept=".pdf"
                    onChange={handleFileChange}
                />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default Upload;