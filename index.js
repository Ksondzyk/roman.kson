1;
function getMin(arr) {
  const res = Math.min(...arr);
  return res;
}
console.log(getMin([2, 4, 5, 7, 9, 4, 1, 16]));
//2
// const res1 = arr1.filter(item => item % 2 === 0);

// console.log(res1);
let arr1 = [2, 4, 5, 7, 9, 4, 1, 16];
function getEven(arr) {
  let filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    // console.log(item);
    if (arr[i] % 2 === 0) {
      filterArr.push(item);
      // console.log(filterArr);
    }
  }
  return filterArr;
}

console.log(getEven(arr1));

//3
const arr3 = [
  { name: "Jonny Walker", birthDate: "1995-12-17" },
  { name: "Andrew", birthDate: "2001-10-29" },
  { name: "Andrew", birthDate: "1998-11-09" }
];

function searchByName(name) {
  const newArr = [];
  for (item of arr3) {
    let value = item;
    if (item.name === name) {
      newArr.push(item);
    }
  }
  return newArr;
}
console.log(searchByName("Andrew"));
