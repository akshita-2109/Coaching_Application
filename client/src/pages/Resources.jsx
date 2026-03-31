import { useEffect, useState } from "react";
import API from "../api/axios";

const Resources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    API.get("/resources").then((res) => {
      setResources(res.data);
    });
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Free Resources</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {resources.map((r) => (
          <div key={r.id} className="border p-4 rounded">
            <h3 className="font-bold">{r.title}</h3>
            <p>{r.type}</p>

            <a
              href={`http://localhost:5000/uploads/${r.file_path}`}
              target="_blank"
              className="text-blue-600"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;