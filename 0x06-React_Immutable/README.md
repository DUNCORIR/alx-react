# 0x06. React Immutable

## 📋 Table of Contents
- [Description](#description)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Setup](#setup)
- [Installation](#installation)
- [Immutable.js Overview](#immutablejs-overview)
- [Key Concepts](#key-concepts)
- [Usage Examples](#usage-examples)
- [Resources](#resources)
- [Author](#author)

---

## 📌 Description
This project focuses on mastering **immutability** in JavaScript and React using the `Immutable.js` library. Immutability helps in maintaining **predictable state changes**, improving **performance**, and avoiding **side-effects** in React applications.

---

## 🎯 Learning Objectives
By the end of this project, you should be able to:

✅ Explain:
- What immutable objects are and why they matter in JavaScript and React
- The use of the `Immutable.js` library
- The differences between `List` and `Map`
- The purpose and function of `merge`, `concat`, and deep merging in `Immutable.js`
- What a lazy `Seq` is and how it benefits performance

✅ Use:
- `Immutable.List` and `Immutable.Map` for managing collections
- `.merge()`, `.concat()`, and `.setIn()` to safely update immutable data
- `Seq()` to build performant lazy computations

---

## 📋 Requirements

### Software
- Node.js `v12.11.x`
- npm `v6.11.x`
- Ubuntu 18.04 LTS

### Project
- All files must end with a new line
- All functions must be exported using `module.exports`
- Use `Immutable.js` to implement immutability in all data structures
- A `README.md` file at the root of the project is mandatory

---

## 🛠️ Setup

Install Node.js 12.11.x and npm 6.11.x:

```bash
$ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs
$ node -v    # v12.11.x
$ npm -v     # 6.11.x

📦 Installation
Install project dependencies including immutable:

bash

$ npm install immutable
📚 Immutable.js Overview
Immutable.js provides persistent immutable data structures for JavaScript that help eliminate bugs and improve application performance.

Key data structures:

List: like arrays

Map: like JS objects

Set, OrderedMap, Stack, Seq (lazy evaluation)

🧠 Key Concepts
Concept	Description
Immutable Object	An object whose state cannot be modified after creation
List	Ordered collection similar to arrays
Map	Key-value pair structure like plain JS objects
Merge	Combines properties of multiple Maps
Concat	Joins Lists or Maps without modifying originals
Deep Merge	Recursively merges nested Maps
Seq	Lazy evaluation of chained transformations, improves performance

💡 Usage Examples
🔹 Create a List
js

import { List } from 'immutable';

const list = List([1, 2, 3]);
const newList = list.push(4); // [1, 2, 3, 4]

console.log(list);     // [1, 2, 3]
console.log(newList);  // [1, 2, 3, 4]
🔹 Create a Map
js

import { Map } from 'immutable';

const map1 = Map({ name: 'John', age: 30 });
const map2 = map1.set('age', 31);

console.log(map1.get('age')); // 30
console.log(map2.get('age')); // 31
🔹 Merge Maps
js

const merged = map1.merge({ city: 'Kampala' });
🔹 Lazy Seq
js
import { Seq } from 'immutable';

const numbers = Seq([1, 2, 3, 4])
  .map(x => x * 2)
  .filter(x => x > 4);

console.log(numbers.toArray()); // [6, 8]
📚 Resources
Immutable.js Documentation

Immutable.js GitHub Repository

Understanding Immutability in JavaScript

React Docs: State and Lifecycle

👤 Author
Your Duncan Korir
ALX Software Engineering Student
GitHub: duncorir