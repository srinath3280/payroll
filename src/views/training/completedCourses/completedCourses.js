import React from 'react';
import './completedCourses.css';

const completedCourses = [
    { name: 'JavaScript Essentials', completionDate: '2024-07-15', certificate: true },
    { name: 'HTML & CSS', completionDate: '2024-06-30', certificate: true },
];

const CompletedCourses = () => {
    return (
        <div>
            <h2>Completed Courses</h2>
            <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Completion Date</th>
                        <th>Certificate</th>
                    </tr>
                </thead>
                <tbody>
                    {completedCourses.map((course, index) => (
                        <tr key={index}>
                            <td>{course.name}</td>
                            <td>{course.completionDate}</td>
                            <td>{course.certificate ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompletedCourses;