Unsplash Image Search App - Documentation
======================================

Overview
--------
This is a simple React application that simulates an image search tool.
Users can input a search term, and a gallery of placeholder images is displayed
based on the entered search term.

Problem Statement
-----------------
The challenge is to simulate a basic image search functionality within a React application.
The user enters a search query, and based on this query, the app dynamically updates the UI
to show a gallery of related images. Although no real API is used, it demonstrates the basic
data flow and reactivity pattern of React apps.

How the Problem is Solved
--------------------------
1. The app uses a component-based structure with `App`, `SearchBar`, and `ImageGallery`.
2. The `SearchBar` component captures user input and sends it to the parent `App` via props.
3. The `App` component manages the search term as a piece of state.
4. The `ImageGallery` component listens for changes to the search term and updates its image list using `useEffect`.
5. Images are generated using `https://via.placeholder.com/` with the search term embedded in the URL.

Logic Flow
----------
App.jsx
 ├── <SearchBar onSearch={setQuery} />
 │     └── User inputs a term → passes term up on form submit
 └── <ImageGallery searchTerm={query} />
       └── useEffect watches `searchTerm`
           └── Updates image array
               └── Displays image grid

File Structure
--------------
- public/
  - index.html
- src/
  - main.jsx         // Entry point
  - App.jsx          // Main app logic
  - components/
      - SearchBar.jsx       // Handles user input
      - ImageGallery.jsx    // Displays placeholder images
  - index.css, App.css      // Styling
- package.json, vite.config.js // Project config

Instructions to Run
-------------------
1. Install dependencies:
    npm install

2. Start development server:
    npm run dev

Tech Stack
----------
- React
- JavaScript (ES6)
- Vite (for development bundling)

