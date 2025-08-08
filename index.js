// const event = new Promise((resolve, reject) => {
//   var name = "Pratik";
//   if (name == "Pratik") {
//     resolve(name);
//   } else {
//     reject("Name was not pratik, name was: " + name);
//   }
// });

// event
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Promise finised");
//   });

const axios = require("axios");

const fetchData = async () => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Hello!")
  }
};

fetchData();

// const data = axios.get("https://jsonplaceholder.typicode.com/users");
// console.log(data);

// data
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Promise resolved");
//   });
