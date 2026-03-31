import { useEffect, useState } from "react";
import API from "../api/axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get("/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">All Courses</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p>{course.description}</p>
            <p className="text-blue-600 font-bold mt-2">
              ₹{course.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;