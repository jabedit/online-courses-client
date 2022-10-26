import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Courses/Course";

const Category = () => {
  const CourseCategory = useLoaderData();
  return (
    <div>
      <h2>This category has course : {CourseCategory.length}</h2>
      <div class="grid grid-cols-3 gap-4">
        {CourseCategory.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Category;
