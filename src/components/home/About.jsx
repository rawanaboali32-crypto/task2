
import React from 'react';
import { FaClock, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">About Our Platform</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <FaLaptopCode className="text-blue-600 text-4xl mb-4 mx-auto"/>
            <h3 className="text-2xl font-semibold mb-2">Advanced Courses</h3>
            <p>A selection of modern courses in technology and programming to enhance your skills.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <FaUserGraduate className="text-blue-600 text-4xl mb-4 mx-auto"/>
            <h3 className="text-2xl font-semibold mb-2">For All Levels</h3>
            <p>Courses suitable for beginners and professionals alike, allowing you to learn step by step.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <FaClock className="text-blue-600 text-4xl mb-4 mx-auto"/>
            <h3 className="text-2xl font-semibold mb-2">Flexible Learning</h3>
            <p>You can learn anytime, anywhere, at your own pace and according to your schedule.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


