import React from "react";

const Schedule = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Hackathon Schedule
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Here's the schedule for CodeSprint Pakistan 2024. Make sure to
              attend the key events and sessions to get the most out of your
              hackathon experience.
            </p>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-left">
                  Day 1
                </h2>
                <ul className="list-disc ml-6 mt-2 text-left">
                  <li>10:00 AM - Opening Ceremony</li>
                  <li>10:30 AM - Keynote Address</li>
                  <li>12:00 PM - Networking Session</li>
                  <li>1:00 PM - Lunch Break</li>
                  <li>2:00 PM - Team Formation & Brainstorming</li>
                  <li>4:00 PM - Coding Begins</li>
                </ul>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-left">
                  Day 2
                </h2>
                <ul className="list-disc ml-6 mt-2 text-left">
                  <li>10:00 AM - Coding Continues</li>
                  <li>11:00 AM - Workshop: Tech Trends</li>
                  <li>1:00 PM - Lunch Break</li>
                  <li>2:00 PM - Midpoint Check-In</li>
                  <li>3:00 PM - Workshop: Pitching Ideas</li>
                  <li>5:00 PM - Team Progress Presentations</li>
                </ul>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-left">
                  Day 3
                </h2>
                <ul className="list-disc ml-6 mt-2 text-left">
                  <li>10:00 AM - Final Coding Sprint</li>
                  <li>12:00 PM - Submission Deadline</li>
                  <li>1:00 PM - Lunch Break</li>
                  <li>2:00 PM - Judging Session</li>
                  <li>4:00 PM - Awards & Closing Ceremony</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
