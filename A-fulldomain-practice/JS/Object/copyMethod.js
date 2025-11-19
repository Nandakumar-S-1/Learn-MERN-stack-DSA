const source = {
  greet() {
    console.log("Hello!");
  },
};

const copy = {};
copy.greet = source.greet;
copy.greet();
