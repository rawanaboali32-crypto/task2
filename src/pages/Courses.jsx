
import CourseCard from "../components/CourseCard";
import { useState } from "react";
import CoursesData from "../data/CoursesData";

export default function Courses() {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  const start = (currentPage - 1) * coursesPerPage;
  const currentCourses = CoursesData.slice(start, start + coursesPerPage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {currentCourses.map(course => (
        <CourseCard key={course.id} course={course}
        className="w-full max-w-lg mx-auto" />
      ))}
    </div>
  );
}
