//js function
export default function DoSomething() {}

//react function
export const DoSomething = () => {};

//react component
const MyComponent = () => {
  return <div> </div>;
};

<button
  onClick={() => {
    console.log("hello world!");
  }}
></button>;

//ternary use case

let age = 16;
let named = age > 10 ? "Pratik" : "Harsh";

const Component = () => {
  return age > 10 ? <div> Pratik </div> : <div> Harsh</div>;
};

// //Objects
const person = {
  name: "Pratik",
  age: 23,
  isMarried: false,
};

// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;

// const {name, age, isMarried}  = person

// const person2 = {...person, name: "Harsh"};

// const names = ["pratik", "sagar", "sujal"];
// const names2 = [...names, "sahil"];
// console.log(names2);


// maps & filters
let names = ["Pratik", "Sagar", "Sujal"];

names.map((name) => {
  console.log(name);
});

names.filter((name) => {
  return name !== "Pratik";
});
