let totalComplaints = 20;
console.log(totalComplaints);

const title = document.getElementById("dashboard-title");

console.log(title);

title.textContent = "Smart Complaint Manager";

const complaints = [
    {
        id: 1,
        title: "WiFi not working",
        category: "WiFi",
        location: "Hostel A",
        status: "Pending"
    },

    {
        id: 2,
        title: "Broken fan",
        category: "Maintenance",
        location: "Hostel B",
        status: "In Progress"
    },

    {
        id: 3,
        title: "Bad food quality",
        category: "Mess",
        location: "Main Mess",
        status: "Resolved"
    }
];

for (let i = 0; i < complaints.length; i++) {
    console.log(complaints[i].title);
}

const pendingComplaints = complaints.filter(
    complaint => complaint.status === "Pending"
);
console.log(pendingComplaints);

const titles = complaints.map(
    complaint => complaint.title
);

let gay = 99;