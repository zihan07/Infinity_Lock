document.addEventListener("DOMContentLoaded", function() {
    // Sample student data
    const studentInfo = {
        name: "Md. Yeasin",
        studentID: "2021882642",
        department: "Computer Science"
    };

    // Sample course data
    const courses = ["Mathematics", "Computer Programming", "Physics", "Data Structures"];

    // Display student information
    const studentInfoDiv = document.getElementById("student-info");
    studentInfoDiv.innerHTML = `<strong>Name:</strong> ${studentInfo.name}<br>
                                <strong>Student ID:</strong> ${studentInfo.studentID}<br>
                                <strong>Department:</strong> ${studentInfo.department}`;

    // Display available courses
    const courseList = document.getElementById("course-list");
    courses.forEach(course => {
        const listItem = document.createElement("li");
        listItem.textContent = course;
        courseList.appendChild(listItem);
    });
});
