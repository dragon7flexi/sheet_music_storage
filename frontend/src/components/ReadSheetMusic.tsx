import axios from "axios";
import { useEffect, useState } from "react";

export default function ReadSheetMusic() {
    const [pdfs, setPdfs] = useState<string[]>([]);

    useEffect(() => {
        const fetchPdfs = async () => {
            try {
                const response = await axios.get("http://localhost:3000/sheet_musics");
                setPdfs(response.data);
            } catch (error) {
                console.error("Error fetching PDFs", error);
            }
        };

        fetchPdfs();
    }, []);

    return (
        <div>
            <h2>Sheet Music List</h2>
            <ul>
                {pdfs.map((pdf, index) => (
                    <li key={index}>{pdf}</li>
                ))}
            </ul>
        </div>
    );
}