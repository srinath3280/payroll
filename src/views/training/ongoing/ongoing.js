import React from 'react';
import './ongoing.css';

const ongoingCourses = [
  { name: 'React Basics', startDate: '2024-08-01', progress: 75 },
  { name: 'Node.js Fundamentals', startDate: '2024-07-20', progress: 40 },
];

const OngoingCourses = () => {
  return (
    <div>
      <h2>Ongoing Courses</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Start Date</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {ongoingCourses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.startDate}</td>
              <td>{course.progress}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OngoingCourses;