// JSON === JavaScript Object Notation

const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello!");
    }
};

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON); // string
console.log(sendJSON.name); // undefined