/* 
  You are given an array with a list of names.

  You should log only the peoples first names.

  For example, if the name is "John Smith" you should return "John"
*/

let names = [
  "Tamzin Lindsay",
  "Jessica Tate",
  "Tony Holcomb",
  "Shae Patton",
  "Arron Graham",
];

names.forEach((name) => {
  console.log(name.substring(0, name.indexOf(" ")));
});

/* EXPECTED OUTPUT 

  "Tamzin"
  "Jessica"
  "Tony"
  "Shae"
  "Arron"
  
*/
