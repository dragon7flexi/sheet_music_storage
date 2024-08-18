'use client';

import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [pdfs, setPdfs] = useState<string[]>([]);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/sheet_music');
        setPdfs(response.data);
      } catch(error) {
        console.error("Error fetching PDFs", error);
      }
    };

    fetchPdfs();
  }, []);

  return (
    <div>
      <h1>Sheet Music List</h1>
      <ul>
        {pdfs.map((pdf, index) => (
          <li key={index}>{pdf}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;