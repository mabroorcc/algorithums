import * as algo from "./arrays";

const myarr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function blockSwapArray(arr: any[], times: number): any[] {
  if (arr.length === 0) return [];

  let A = [];
  let B = [];

  for (let i = 0; i <= times - 1; i++) {
    A.push(arr[i]);
  }

  for (let i = times; i <= arr.length - 1; i++) {
    B.push(arr[i]);
  }

  return [A,B];
}

console.log(blockSwapArray(myarr, 2));
