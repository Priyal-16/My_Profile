import React from "react";

const skills = [
  "Java", "SQL", "Mongo",
  "HTML", "CSS", "JavaScript", "React", "Node",
  "Data Structures", "Algorithms", "Networking",
  "Data Base Management System","OOPS"
];

const programming = [
    {
      name: "Leet Code",
      url: "https://leetcode.com/u/priyal16_gupta/"
    },
    {
      name: "Hacker Rank",
      url: "https://www.hackerrank.com/profile/priyalgupta042"
    },
    {
      name: "Hacker Earth",
      url: "https://www.hackerearth.com/@priyalgupta042/"
    }
  ];

const Details = () => {
  return (
    <div className="w-full min-h-screen bg-[#27496D] text-white p-6 flex flex-col items-center">
      
      {/* Skills Section */}
      <div className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
        <div className="flex flex-wrap w-[70%] ml-32 gap-3 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
            className="bg-blue-200 text-blue-800 px-4 py-2 rounded-md font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Programming Section */}
      <div className="w-full max-w-4xl mt-7">
            <h2 className="text-3xl font-semibold mb-6 text-center">Programming</h2>
                 <div className="flex flex-wrap gap-3 justify-center">
                   {programming.map((platform, index) => (
                      <a
                        key={index}
                  href={platform.url}
             className="bg-blue-200 text-blue-800 px-4 py-2 rounded-md font-medium hover:bg-blue-300 transition"
        >
          {platform.name}
           </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Details;
