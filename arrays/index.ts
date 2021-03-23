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
