const baz = () => console.log("baz");
const foo = () => console.log("foo");
const zoo = () => console.log("zoo");
const start = () => {
  console.log("start");
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve("bar");
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};
start();

// start foo bar zoo baz

const hiCall = () => console.log("Hi call");
const hiRole = () => console.log("Hi role");
//
module.exports = {
  hiCall,
  hiRole,
}; // CommonJS

//exports.hiMan = () => console.log("Hi man"); // Either CommonJS, with module.exports in one time it is useless
//exports.hiGirl = () => console.log("Hi girl"); // Either CommonJS, with module.exports in one time it is useless
