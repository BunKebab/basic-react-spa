import React from "react";
import { Link } from "react-router-dom";
import dev from "../images/dev.png";

const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="CodeSprint 2024"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={dev}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Welcome to CodeSprint 2024
              </h1>
              <p className="leading-relaxed">
                Join us from July 15-17, 2024, for an exciting virtual hackathon
                focused on building innovative solutions for a sustainable
                future in Pakistan.
              </p>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                <Link to="/Register">Register</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
