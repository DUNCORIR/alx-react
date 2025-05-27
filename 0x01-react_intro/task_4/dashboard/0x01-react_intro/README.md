# 0x01. React Intro

Welcome to the React Intro project! This project introduces the fundamentals of building web applications using React, including JSX, React Developer Tools, Enzyme testing, and integrating with Webpack and Babel.

---

## 📚 Project Overview

This project demonstrates how to create a basic JavaScript application using React. It includes setting up the app using `create-react-app`, writing components with JSX, debugging with React Developer Tools, and testing using Enzyme with shallow rendering.

You will also learn how to manually configure a React project with Webpack and Babel.

---

## 🚀 Getting Started

### Prerequisites

- Ubuntu 18.04 LTS
- Node.js `v12.x.x`
- npm `v6.x.x`

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-intro-project.git
cd react-intro-project

Install dependencies:

npm install
Start the development server:

npm start
The app will be available at http://localhost:3000.

🧠 Learning Objectives
By the end of this project, you will be able to:

✅ Create a basic JavaScript application using React

✅ Use create-react-app to quickly bootstrap a React project

✅ Write JSX syntax and understand how it works under the hood

✅ Use React Developer Tools for debugging

✅ Test components using Enzyme's shallow rendering

✅ Manually configure React with Webpack and Babel

🛠 Project Structure

alx-react/0x01-react_intro/
├── README.md
├── task_0/
├── task_1/
├── task_2/
├── task_3/
├── task_4/
└── task_5/

🔧 Tools and Technologies
Tool	Purpose
React	UI library for building components
JSX	Syntax extension for writing HTML in JavaScript
Create React App	Tool to bootstrap React projects with no config
React DevTools	Browser extension for debugging React components
Enzyme	JavaScript testing utility for React
Webpack	Module bundler
Babel	JavaScript compiler for using modern syntax

Testing with Enzyme
To run tests using Enzyme and Jest:

npm test
Example shallow rendering test:

import { shallow } from 'enzyme';
import App from './App';

test('renders welcome message', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.text()).toContain('Welcome');
});
🧰 Manual Setup with Webpack and Babel
For advanced configuration (optional), this project includes:

A custom webpack.config.js to bundle modules

A .babelrc file to compile JSX and ES6+ with presets

Scripts in package.json to run builds manually

👨‍💻 Author
Duncan Korir