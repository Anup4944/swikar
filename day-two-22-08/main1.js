const user = {
  name: "Anup",
  age: 25,
  getLocation: function () {
    // console.log("I am located is SYD");
    // console.log(this);
    // return this;
  },
};

user.getLocation(); // yesko output { name: 'Anup', age: 25, getLocation: [Function: getLocation] }
// location bhitra this. garera aru proterty access garne
