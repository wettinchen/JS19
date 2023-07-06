// JSON === JavaScript Object Notation

const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello!");
    }
};
console.log(myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);