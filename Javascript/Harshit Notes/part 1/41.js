// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { year, famousSong, ...restProps } = band;
console.log(year);
console.log(famousSong)
console.log(restProps);
