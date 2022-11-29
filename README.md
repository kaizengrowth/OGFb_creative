# (Re)Creating OG Facebook 

Welcome to your first React code-along lecture. Over the next three days, we are going to be building out an old school Facebook page, using Docker, Node, functional React components, React hooks, React Router, and Bootstrap for styling.

But don't feel constrained by history or the limits of current web conventions. Be creative, and make this page your own.

The goal of this exploration is to get you comfortable with some of the fundamental concepts of React, so that you have the tools you need to build out your Conference Go app and your Module 2 projects.

<img src="https://www.shareaholic.com/blog/wp-content/uploads/2012/05/Facebook-2004.jpg" width="500">


### INSTRUCTIONS
```

In order to help you keep up with live-coding during the lecture, 
there are various checkpoints implemented throughout the lecture. 
If you fall behind during the live lecture, wait until the next 
checkpoint, and then run `git checkout` on the next branch. 

In the assets folder of this main branch, you will find an image 
of what the completed app should look like up to that point.

While you're studying on your own, clone a clean copy of this 
repository, and see if you can go through each of the steps and 
reproduce the entire app on the Main branch.
```
------------------------------------

## Day 1.  Intro to React with Docker

### Morning Lecture

==== **TOPICS** ====
1. Node in a Docker container
2. React project structure
3. Functional components & Component hierarchy
4. Props & State
5. Array Destructuring 
6. **useState** (React Hooks)
7. Styling your component with vanilla CSS

------- **BRANCHES** -------
* **01_Dockerfile** -- Spinning up a Node container with React and displaying "Hello World!"
* **02_NavBar** -- Creating a NavBar and passing props from parent to child component
* **03_NavBar_VanillaStyling** -- Add vanilla CSS to your Navbar, using Flexbox and Grid, and add a story Feed.js to your Main container
* **04_Stories** -- Add Story.js components to your Feed.js container, and destructure the data object to display the properties of each story.
* **05_LikeButton** -- Implement a "Like" button using the React hook: useState(), and add conditional rendering so that you can only click "like" once.


---

### Afternoon Lecture
==== **TOPICS** ====
1. Fetch and **useEffect()** -- Making API calls
2. Adding Bootstrap to React
3. Formatting Dates

------- **BRANCHES** -------
* **06_Bootstrap** -- Install the **React-Bootstrap** library to restyle your button and navbar using Bootstrap components.
* **07_DateTime** -- Handle Datetime objects, and format your dates in different ways using the **date-fns** library.
* **08_Fetch** -- Make a Fetch request using the React hook: **useEffect()**
