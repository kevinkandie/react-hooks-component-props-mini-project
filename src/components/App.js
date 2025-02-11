import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";  

import Article from "./Article";  
import ArticleList from "./ArticleList";


const posts = [
  { id: 1, title: "React Basics", date: "February 10, 2025", preview: "Learn the basics of React..." },
  { id: 2, title: "Advanced Hooks", preview: "Explore useReducer, useContext, and more..." }, // No date provided
];

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header />
      <About />
      
      <h1>Blog</h1>
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
