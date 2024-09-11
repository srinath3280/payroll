import React from "react";
import './rejected.css';

const RejectedTable = () => {
  const requests = [
    {
      id: 1,
      name: "Srinath",
      department: "Development",
      leaveType: "Sick Leave",
      fromDate: "2024-07-07",
      toDate: "2024-07-08",
      status: "Rejected",
    },
    {
        id: 2,
        name: "Srinath",
        department: "Development",
        leaveType: "Annual Leave",
        fromDate: "2024-08-27",
        toDate: "2024-08-29",
        status: "Rejected",
      },
      {
        id: 3,
        name: "Srinath",
        department: "Development",
        leaveType: "Annual Leave",
        fromDate: "2024-09-15",
        toDate: "2024-09-17",
        status: "Rejected",
      }
  ];

//   const handleApproval = (id, status) => {
//     const updatedRequests = requests.map((request) =>
//       request.id === id ? { ...request, status } : request
//     );
//     setRequests(updatedRequests);
//   };

  return (
    <div style={{ margin: "50px auto", width: "100%" }}>
      <h2>Employee Leave Approval Table</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Leave Type</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Status</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.name}</td>
              <td>{request.department}</td>
              <td>{request.leaveType}</td>
              <td>{request.fromDate}</td>
              <td>{request.toDate}</td>
              <td>{request.status}</td>
              {/* <td>
                {request.status === "Pending" && (
                  <>
                    <button
                      onClick={() => handleApproval(request.id, "Approved")}
                      style={{ marginRight: "10px", color: "green" }}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleApproval(request.id, "Rejected")}
                      style={{ color: "red" }}
                    >
                      Reject
                    </button>
                  </>
                )}
                {request.status !== "Pending" && <span>{request.status}</span>}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RejectedTable;
