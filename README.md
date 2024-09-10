# BookShelf: A Book Tracking App

Welcome to the MyReads project! This project is a bookshelf app that allows users to categorize books into different shelves: "Currently Reading," "Want to Read," and "Read." Users can also search for new books and add them to any of the shelves. The project is developed using React and is part of the Udacity React Nanodegree program [Udacity’s React Fundamentals course](https://www.udacity.com/course/react-nanodegree--nd019).

# Installation

To get started with the project, follow these steps:

##### 1. Clone the repository:

git clone https://github.com/Butanska/reactnd-my-reads.git
cd reactnd-my-reads

##### 2. Install dependencies:

Ensure you have Node.js and npm installed. Since the project was set up with lockfileVersion@3, it is recommended to use Node.js 16.x (which comes with npm 7 or later) for better stability and support for the latest features.

Steps to Switch Node.js version:
If you're using nvm (Node Version Manager), you can switch to a compatible version by running:

`nvm install 16.20.2` to install Node.js 16
`nvm use 16.20.2` to use Node.js 16

To install the dependencies run:

`npm install`: This will install all necessary dependencies required to run the project.

# Usage

To start the project locally:

##### 1. Launch the development server:

`npm start`:  This will start the development server at http://localhost:3000/

##### 2. Open the app in your browser:

The app will automatically open in your default web browser, or you can manually navigate to http://localhost:3000/.

##### 3. Use the application:

Main Page: Displays books categorized into "Currently Reading," "Want to Read," and "Read" shelves.
Search Page: Accessible via the "Search" button, allowing you to find and add books to your shelves.

##### The main page also has a link to **_/search_** , a search page that allows you to find books to add to your library.

##### If you typed another link the app will redirect you to **error 404 page**

##### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.