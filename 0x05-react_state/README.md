📁 0x05-react_state
This project builds on the previous React component structure and introduces React local state management inside a class component.

🧩 Task 0: Manage local UI state
✅ Objectives:
Add a local state displayDrawer to App.

Create two methods in App:

handleDisplayDrawer → sets displayDrawer to true.

handleHideDrawer → sets displayDrawer to false.

Pass displayDrawer, handleDisplayDrawer, and handleHideDrawer as props to the Notifications component.

🧪 Testing
Tests include:

App renders and handles ctrl + h keydown to trigger logout.

Local state updates (displayDrawer) behave as expected.

Notifications receives the correct props.

Run tests using:

bash

npm test
📦 Project Structure (partial)
css

task_0/
├── dashboard/
│   ├── src/
│   │   ├── App/
│   │   │   ├── App.js
│   │   │   └── App.test.js
│   │   ├── Notifications/
│   │   │   ├── Notifications.js
│   │   │   └── Notifications.test.js
│   │   └── ...
│   ├── package.json
│   └── README.md