import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courese = () => {
  const courses = useLoaderData();
  return (
    <div className="md:px-14">
      
      <div class="grid  md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courese;
