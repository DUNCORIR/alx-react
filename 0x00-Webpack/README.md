# 0x00. Webpack Project

This project demonstrates how to configure Webpack from scratch for a basic front-end JavaScript application. It showcases how to set up entry and output points, use loaders and plugins, split code into chunks, and run a development server with hot reloading.
---

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/DUNCORIR/alx-react.git
cd webpack_project

Install dependencies:

npm install
🚀 Usage
To build the project for production:

npm run build
To start the development server with hot reloading:

npm start
Visit http://localhost:8080 in your browser after the server starts.

📁 Project Structure

webpack_project/
├── dist/                  # Auto-generated output by Webpack
├── src/                   # Source code
│   └── index.js           # Main JavaScript entry point
├── package.json           # Project dependencies and scripts
├── webpack.config.js      # Webpack configuration
├── .babelrc               # Babel configuration
└── README.md              # Project documentation
⚙️ Webpack Features Used
Entry and Output: Defines source and target for bundling.

Loaders:

babel-loader for transpiling ES6+

css-loader and style-loader for importing CSS

Plugins:

HtmlWebpackPlugin for dynamic HTML generation

CleanWebpackPlugin to clean output before each build

Code Splitting: Lazy loading modules using import()

Dev Server: webpack-dev-server for fast development

📝 Scripts
Command	Description
npm run build	Builds the app using Webpack
npm start	Starts webpack-dev-server

👤 Author
Duncan Korir- [GitHub](DUNCORIR)
License
This project is licensed for educational use under the Holberton School curriculum.