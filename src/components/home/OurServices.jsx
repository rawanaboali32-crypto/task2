import React from 'react';
import { FaBookOpen, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';

const OurServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded hover:shadow-lg transition">
            <FaBookOpen className="text-blue-600 text-4xl mb-4 mx-auto"/>
            <h3 className="text-2xl font-semibold mb-2">Extensive Course Library</h3>
            <p>Over 100 courses in various fields to cover all your learning needs.</p>
          </div>
          <div className="p-6 border rounded hover:shadow-lg transition">
            <FaChalkboardTeacher className="text-blue-600 text-4xl mb-4 mx-auto"/>
            <h3 className="text-2xl font-semibold mb-2">Expert Instructors</h3>
            <p>Courses delivered by top experts to ensure quality learning and deep understanding.</p>
          </div>
          <div className="p-6 border rounded hover:shadow-lg transition">
            <FaCertificate className="text-blue-600 text-4xl mb-4 mx-auto"/>
            <h3 className="text-2xl font-semibold mb-2">Certified Certificates</h3>
            <p>Receive certificates upon course completion to enhance your resume.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
