import React from 'react';
import './dashboard.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// PieChart, Pie, Cell

// Sample data for one employee - salary breakdown
const salaryData = [
    { name: 'Gross Salary', amount: 150000 },
    { name: 'Basic Salary', amount: 80000 },
    { name: 'Bonus', amount: 10000 },
    { name: 'Variable Pay', amount: 12000 },
    { name: 'Insurance', amount: 5000 },
    { name: 'Provident Fund (PF)', amount: 6000 },
    { name: 'Allowances (HRA, DA, LTA, MA)', amount: 30000 },
    { name: 'Employee Benefits', amount: 7000 },
];

// Monthly Salary Data
const monthlySalaryData = [
    { month: 'January', salary: 12500 },
    { month: 'February', salary: 12500 },
    { month: 'March', salary: 12500 },
    { month: 'April', salary: 12500 },
    { month: 'May', salary: 12500 },
    { month: 'June', salary: 12500 },
    { month: 'July', salary: 12500 },
    { month: 'August', salary: 12500 },
    { month: 'September', salary: 12500 },
    { month: 'October', salary: 12500 },
    { month: 'November', salary: 12500 },
    { month: 'December', salary: 12500 },
];

// Yearly Salary Data (for multiple years)
const yearlySalaryData = [
    { year: '2022', salary: 150000 },
    { year: '2023', salary: 160000 },
    { year: '2024', salary: 170000 },
];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#7D3C98', '#E59866', '#2874A6'];

const Dashboard = () => {

    return (
        <div>
            <section className='dashboard'>
                    <div className='dashboard-content1'>
                        <h2>Employee Salary Breakdown Dashboard</h2>

                        <h3>Salary Components</h3>
                        <BarChart
                            width={800}
                            height={300}
                            data={salaryData}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amount" fill="#8884d8" />
                        </BarChart>
                    </div>

                    {/* <div>
                        <h3>Salary Components Distribution</h3>
                        <PieChart width={400} height={400}>
                            <Pie
                                data={salaryData}
                                dataKey="amount"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                fill="#8884d8"
                                label
                            >
                                {salaryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div> */}

                    <div className='dashboard-content2'>
                        <h3>Monthly Salary</h3>
                        <BarChart
                            width={475}
                            height={300}
                            data={monthlySalaryData}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="salary" fill="#82ca9d" />
                        </BarChart>
                    </div>

                    <div className='dashboard-content3'>
                        <h3>Yearly Salary</h3>
                        <BarChart
                            width={475}
                            height={300}
                            data={yearlySalaryData}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="salary" fill="#FFBB28" />
                        </BarChart>
                    </div>
            </section>
        </div>
    )
}

export default Dashboard
