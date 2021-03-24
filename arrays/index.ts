// Shift the elements of array by one
export function leftRotateArrayByOne(arr: any[]): any[] {
  if (arr.length <= 0) return [];

  const firstElement = arr[0];
  const lastIndex = arr.length - 1;

  for (let i = 0; i <= lastIndex; i++) {
    if (i === lastIndex) {
      arr[lastIndex] = firstElement;
    } else {
      arr[i] = arr[i + 1];
    }
  }

  return arr;
}

// Shift the elements of array by n
export function leftRotateArrayBy(arr: any[], times: number): any[] {
  for (let i = 0; i < times; i++) {
    arr = leftRotateArrayByOne(arr);
  }

  return arr;
}

// Reverses the elements of array
export function reverseArray(arr: any[]): any[] {
  let reversedArray = [];
  for (let i in arr) {
    reversedArray.push(arr[arr.length - Number(i) - 1]);
  }
  return reversedArray;
}

export function rightRotateByReversalAlgorithum(
  arr: any[],
  times: number
): any[] {
  if (arr.length === 0) return [];
  let combinedReversedArray = [];
  // split the array n - times
  let splitIndex = arr.length - times;

  // Loop left to right until splitindex and insert element at begining
  for (let i = 0; i < splitIndex; i++) {
    combinedReversedArray.unshift(arr[i]);
  }

  // Loop right to left til splitindex and insert element at end
  for (let i = arr.length - 1; i >= splitIndex; i--) {
    combinedReversedArray.push(arr[i]);
  }

  return reverseArray(combinedReversedArray);
}
