import { useState, useEffect } from "react";
import API from "../api/axios";

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  });

  const [file, setFile] = useState(null);
    const [resourceData, setResourceData] = useState({
    title: "",
    type: "",
    });

    useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.role !== "admin") {
      alert("Access denied");
      window.location.href = "/";
    }
  }, []);

    const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    };

    const handleResourceChange = (e) => {
    setResourceData({
        ...resourceData,
        [e.target.name]: e.target.value,
    });
    };

    const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", resourceData.title);
    formData.append("type", resourceData.type);

    API.post("/resources", formData).then(() => {
        alert("File uploaded!");
    });
    };
  

  // fetch courses
  const fetchCourses = () => {
    API.get("/courses").then((res) => setCourses(res.data));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // add course
  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("/courses", form).then(() => {
      fetchCourses();
      setForm({ title: "", description: "", price: "" });
    });
  };

  // delete course
  const handleDelete = (id) => {
    API.delete(`/courses/${id}`).then(() => fetchCourses());
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Course
        </button>
      </form>

<div className="mb-3 bg-color-black-100 p-4 rounded">
    <h3 className="text-xl font-bold mt-10">Upload Resource</h3>

    <form onSubmit={handleUpload} className="space-y-4 mt-4">
    <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleResourceChange}
        className="border p-2 w-full"
    />

    <select
        name="type"
        onChange={handleResourceChange}
        className="border p-2 w-full"
    >
        <option value="">Select Type</option>
        <option value="GS">GS</option>
        <option value="CSAT">CSAT</option>
    </select>

    <input type="file" onChange={handleFileChange} />

    <button className="bg-green-600 text-white px-4 py-2">
        Upload File
    </button>
    </form>
    </div>

      {/* COURSE LIST */}
      <div className="grid md:grid-cols-3 gap-4">
        {courses.map((c) => (
          <div key={c.id} className="border p-4 rounded">
            <h3 className="font-bold">{c.title}</h3>
            <p>{c.description}</p>
            <p>₹{c.price}</p>

            <button
              onClick={() => handleDelete(c.id)}
              className="bg-red-500 text-white px-3 py-1 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;