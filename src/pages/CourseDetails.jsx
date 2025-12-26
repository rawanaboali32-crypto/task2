import { useParams } from "react-router-dom";
import CoursesData from "../data/CoursesData";


export default function CourseDetails() {
  const { id } = useParams();
  const course = CoursesData.find(c => c.id === Number(id));

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  return (
   <div className="max-w-md mx-auto mt-10 mb-10 p-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-2xl shadow-lg flex flex-col items-center space-y-3 text-center">
  <h1 className="text-2xl font-bold">{course.title}</h1>
  <p className="text-sm">{course.fullDescription}</p>
  <p className="font-semibold">Lessons: {course.lessonsCount}</p>
  <p className="font-semibold">Level: {course.level}</p>
  <p className="font-bold text-lg">Price: ${course.price}</p>
    <p className="font-bold text-lg">language: {course.language}</p>
    <p className="font-bold text-lg">instructor: {course.instructor}</p> 
   <p className="font-bold text-lg">time: {course.time}</p>   
    <p className="font-bold text-lg">category: {course.category}</p> 
     <p className="font-bold text-lg"> duration: {course. duration}</p> 
         <p className="font-bold text-lg"> days: {course. days}</p>       
            
                 <p></p>
  <button className="bg-white text-blue-500 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
    Enroll Now
  </button>
</div>

  );
}
