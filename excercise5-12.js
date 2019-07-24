function URLify(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result += '%20'
    } else {
      result += str[i]
    }
  }
  return result;
}

function filter(arr, flt) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (flt(arr[i])) {
      result.push(arr[i])
    }
  }
  return result;
}

function maxArray(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j]
      if (max < sum) {
        max = sum
      }
    }
  }
  return max;
}

// console.log(URLify('www.thinkful.com /tauh ida parv een'))
// console.log(filter([1, 2, 3, 6, 7], x => x < 5))

console.log(maxArray([4, 6, -3, 5, -2, 1, -3, 5]))