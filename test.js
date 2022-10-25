const add = require("./index.js");

if (add(3, 4) != 7) {
    throw Error("Add result 3 + 4 incorrect.");
}