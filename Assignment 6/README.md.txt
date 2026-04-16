Here is the updated README.md file for your Assignment 6. This is written in plain text as requested, with all hashtags and stars removed.

VOGUE Minimal Marketplace and Used Items Portal

This is a Full-Stack E-commerce application built for selling used items like fashion, cars, and bikes. It uses a Node.js and Express backend with a MongoDB database to store product listings and contact inquiries.

Features

Minimalist UI: A clean, fashion-store style interface for a premium user experience.

Sell Item Portal: A dedicated form for users to list their used vehicles or clothing for sale.

Contact System: A functional contact form for customer support and inquiries.

NoSQL Database: Integration with MongoDB to store product and contact data.

Backend Logic: Express.js routes to handle data submission and storage.

Tech Stack

Frontend: HTML5, CSS3 (Custom Minimalist Styling)

Backend: Node.js, Express.js

Database: MongoDB (NoSQL)

Libraries: Mongoose, Cors, Dotenv

Project Structure
Assignment 6/
├── models/
│   ├── Contact.js      (Inquiry Schema)
│   └── Product.js      (Used Items Schema)
├── public/
│   └── index.html      (Main Storefront)
├── server.js           (Backend Server Logic)
├── package.json        (Project Dependencies)
└── README.md           (Documentation)

How to Run the Application

Prerequisites

Install Node.js on your system.

Install MongoDB Community Server.

Install MongoDB Compass to view the data.

Installation

Open the project folder in your terminal.

Initialize the project: npm init -y

Install required modules: npm install express mongoose cors dotenv

Running the Server

Start your local MongoDB service.

Run the command: node server.js

The server will start at http://localhost:5000

Testing the Portal

Open http://localhost:5000 in your browser.

Scroll to the Sell Item section and fill out the vehicle or product details.

Click Post Item Now.

Open MongoDB Compass and connect to localhost.

Look for the ecommerceDB database and check the products collection for your entry.

Author

Pratiksha Talole

Assignment 6: Full-Stack E-commerce Development