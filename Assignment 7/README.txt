Student Feedback Review System

This project is a simple web application designed for students to provide reviews and feedback on their courses. It features a clean user interface and a functional backend to store data permanently in a NoSQL database.

Features

Simple Feedback Form: Users can enter their name, course, rating, and detailed comments.

Dynamic Submission: Data is sent to a Node.js server using the POST method.

Database Integration: Uses MongoDB to store all student reviews securely.

Responsive Design: The UI is styled with clean CSS for a professional look.

Tech Stack

Frontend: HTML5, CSS3 (Custom Styling)

Backend: Node.js, Express.js

Database: MongoDB (Local Server)

Tools: VS Code, MongoDB Compass

Project Structure
Assignment 7/
├── models/
│   └── Feedback.js     (Mongoose Schema for reviews)
├── public/
│   └── index.html      (Main Frontend Webpage)
├── server.js           (Express Server and Database Connection)
├── package.json        (Dependencies list)
└── README.md           (Documentation)

How to Run Locally

Setup Environment

Ensure Node.js and MongoDB are installed on your computer.

Open the terminal in the Assignment 7 directory.

Install Dependencies

Run the following command to install required modules:
npm install express mongoose

Start the Application

Run the server using the command:
node server.js

You should see a message saying MongoDB Connected and Server Running.

Access the Website

Open your web browser and go to: http://localhost:5000

Fill out the feedback form and click Submit.

Verify Data

Open MongoDB Compass.

Connect to your local database.

Look for studentFeedbackDB to see the submitted reviews in the feedbacks collection.

Author

Pratiksha Talole

Computer Engineering Student