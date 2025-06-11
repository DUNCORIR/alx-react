# 0x07. React Redux Action Creator + Normalizr

## 📚 Resources

- [Normalizr GitHub Docs](https://github.com/paularmstrong/normalizr)
- [Redux: Normalizing State Shape](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)
- [Redux Essentials Tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
- [Redux Actions](https://redux.js.org/tutorials/fundamentals/part-4-store#dispatching-actions)
- [Redux Thunk (Async Logic)](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)
- [Testing Redux](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#writing-tests)

---

## 🎯 Learning Objectives

By the end of this project, you should be able to:

### ✅ Normalizr
- Explain the purpose of Normalizr.
- Normalize deeply nested JSON data using `schema.Entity`, `schema.Array`, and `normalize`.
- Use normalized data in Redux state for easier updates and lookups.

### ✅ Redux Core Concepts
- Describe Redux architecture: store, actions, reducers, middleware.
- Understand the unidirectional data flow in Redux applications.

### ✅ Redux Actions & Action Creators
- Define Redux actions using constants and payloads.
- Write action creators as functions returning actions.

### ✅ Async Actions with Thunk
- Use redux-thunk middleware for async operations (e.g., API requests).
- Handle loading, success, and failure states via dispatched actions.
- Understand how async action creators enable side effects in Redux.

### ✅ Normalizing State Shape
- Convert nested API responses into flat, normalized state.
- Store entities in `{ byId, allIds }` format for scalable and maintainable Redux state.

### ✅ Testing Redux Logic
- Write unit tests for reducers (pure functions).
- Use `redux-mock-store` to test action creators and dispatched action sequences.
- Test selectors and derived data.

---

## 🛠 Technologies

- React 17+
- Redux & React-Redux
- Redux Thunk
- Normalizr
- Jest + Testing Library

---

## ✅ Project Setup

```bash
npm install redux react-redux redux-thunk normalizr
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom

Ensure .babelrc or babel.config.js is configured with:

js
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};