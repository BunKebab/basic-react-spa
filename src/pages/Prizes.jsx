import React from "react";

const Prizes = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Prizes & Judges
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              We have exciting prizes for the winners and a panel of experienced
              judges to evaluate the projects.
            </p>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-left">
                  Prizes
                </h2>
                <ul className="list-disc ml-6 mt-2 text-left">
                  <li>1st Prize: Rs 50,000</li>
                  <li>2nd Prize: Rs 25,000</li>
                  <li>3rd Prize: Rs 15,000</li>
                </ul>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-left">
                  Judges
                </h2>
                <ul className="list-disc ml-6 mt-2 text-left">
                  <li>Judge 1: Tech Industry Expert</li>
                  <li>Judge 2: Startup Mentor</li>
                  <li>Judge 3: University Professor</li>
                </ul>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-left">
                  Sponsors
                </h2>
                <ul className="list-disc ml-6 mt-2 text-left">
                  <li>Sponsor 1: Tech Company</li>
                  <li>Sponsor 2: Startup Incubator</li>
                  <li>Sponsor 3: University</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prizes;
