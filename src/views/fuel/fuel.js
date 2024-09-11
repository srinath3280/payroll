import React, { useState } from 'react';
import './fuel.css';

const Fuel = () => {
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedWeek, setSelectedWeek] = useState('');

    // Sample data for fuel expenses
    const fuelData = {
        January: [
            { week: 'Week 1', fuelCost: 120 },
            { week: 'Week 2', fuelCost: 150 },
            { week: 'Week 3', fuelCost: 110 },
            { week: 'Week 4', fuelCost: 180 },
        ],
        February: [
            { week: 'Week 1', fuelCost: 130 },
            { week: 'Week 2', fuelCost: 140 },
            { week: 'Week 3', fuelCost: 160 },
            { week: 'Week 4', fuelCost: 170 },
        ],
        March: [
            { week: 'Week 1', fuelCost: 140 },
            { week: 'Week 2', fuelCost: 150 },
            { week: 'Week 3', fuelCost: 160 },
            { week: 'Week 4', fuelCost: 160 },
        ],
        April: [
            { week: 'Week 1', fuelCost: 110 },
            { week: 'Week 2', fuelCost: 140 },
            { week: 'Week 3', fuelCost: 120 },
            { week: 'Week 4', fuelCost: 170 },
        ],
        May: [
            { week: 'Week 1', fuelCost: 190 },
            { week: 'Week 2', fuelCost: 150 },
            { week: 'Week 3', fuelCost: 160 },
            { week: 'Week 4', fuelCost: 110 },
        ],
        June: [
            { week: 'Week 1', fuelCost: 100 },
            { week: 'Week 2', fuelCost: 140 },
            { week: 'Week 3', fuelCost: 120 },
            { week: 'Week 4', fuelCost: 150 },
        ],
    };

    const months = Object.keys(fuelData);

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
        setSelectedWeek(''); // Reset week selection on month change
    };

    const handleWeekChange = (e) => {
        setSelectedWeek(e.target.value);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Fuel Expenses Tracker</h2>

            <div style={{ marginBottom: '20px' }}>
                <label>
                    Select Month:
                    <select value={selectedMonth} onChange={handleMonthChange} style={{ marginLeft: '10px' }}>
                        <option value="">--Select Month--</option>
                        {months.map((month) => (
                            <option key={month} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            {selectedMonth && (
                <div style={{ marginBottom: '20px' }}>
                    <label>
                        Select Week:
                        <select value={selectedWeek} onChange={handleWeekChange} style={{ marginLeft: '10px' }}>
                            <option value="">--Select Week--</option>
                            {fuelData[selectedMonth].map((weekData, index) => (
                                <option key={index} value={weekData.week}>
                                    {weekData.week}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            )}

            {selectedMonth && selectedWeek && (
                <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Week</th>
                            <th>Fuel Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fuelData[selectedMonth]
                            .filter((weekData) => weekData.week === selectedWeek)
                            .map((weekData, index) => (
                                <tr key={index}>
                                    <td>{selectedMonth}</td>
                                    <td>{weekData.week}</td>
                                    <td>${weekData.fuelCost}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Fuel
