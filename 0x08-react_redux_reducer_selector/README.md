# 📦 0x08. React Redux Reducer + Selector

## 📖 Project Overview

This project is part of the ALX Front-end curriculum. It focuses on using **Redux** to manage application state in a React environment. Key concepts include **reducers**, **selectors**, **Immutable.js**, and **Normalizr**. You’ll implement clean, testable Redux patterns while preserving immutability and normalized state.

---

## 🎯 Learning Objectives

By the end of this project, you should be able to explain:

- The purpose of a **reducer** and its role in a Redux application.
- Why a reducer must be a **pure function**.
- Why **mutations** within reducers are discouraged.
- The use of **Immutable.js** to maintain immutability in state updates.
- The benefits of **Normalizr** for handling nested API data.
- What **selectors** are and when to use them.
- How to **test** reducers and selectors effectively.

---

## 📚 Key Resources

- [Redux: Reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)
- [Redux: Selectors](https://redux.js.org/usage/deriving-data-selectors)
- [Immutable.js Documentation](https://immutable-js.github.io/immutable-js/)
- [Normalizr GitHub](https://github.com/paularmstrong/normalizr)
- [Testing Redux with Jest](https://redux.js.org/usage/writing-tests)

---

## ⚙️ Technologies & Tools

- **React 17+**
- **Redux**
- **Immutable.js**
- **Normalizr**
- **Jest** (for unit testing)
- **Node.js 14.x**
- **NPM 6.x**
- **Babel**
- **VS Code / Vim / Emacs**

---

## 📁 Project Structure

```plaintext
src/
│
├── actions/             # Redux action creators and types
├── reducers/            # Reducers with Immutable.js
├── schema/              # Normalizr schemas
├── selectors/           # Selector functions
├── tests/               # Unit tests for reducers and selectors
├── App.js               # Main React component
├── index.js             # Entry point
└── store.js             # Redux store configuration

🛠️ Setup Instructions
Clone the repository:

bash

git clone <your-repo-url>
cd your-project-directory
Install dependencies:

bash

npm install
Start the development server:

bash

npm start
Run tests:

bash

npm test
📝 Requirements
All files end with a newline.

All functions must be exported.

Must include .babelrc, package.json, and this README.md.

Project must run on Ubuntu 18.04 with:

Node.js 14.x

NPM 6.x

✅ Author
Duncan Korir
Github: @duncorir

🔐 License
This project is for educational purposes under the ALX Front-End curriculum.

yaml
Copy code
