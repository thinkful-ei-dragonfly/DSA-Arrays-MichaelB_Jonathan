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

// console.log(maxArray([4, 6, -3, 5, -2, 1]))

function mergeArrays(arr1, arr2) {
  let result = []
  let i = 0
  let j = 0
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i]) {
      if (arr2[j]) {
        if (arr1[i] < arr2[j]) {
          result.push(arr1[i])
          i++
        }
        else {
          result.push(arr2[j])
          j++
        }
      }
      else {
        result.push(arr1[i])
        i++
      }
    }
    else if (arr2[j]) {
      result.push(arr2[j])
      j++
    }
  }
  return result
}

arr1 = [1, 3, 6, 8, 11]
arr2 = [2, 3, 5, 8, 9, 10]


// console.log(mergeArrays(arr1, arr2))

function removeChars(string, chars) {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    let found = false
    for (let j = 0; j < chars.length; j++) {
      if (string[i] === chars[j]) {
        found = true
      }
    }
    
    if (!found) {
      result += string[i]
      found = false
    }
  }
  return result
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))
