export function doThisManyTimes(times: number, whatToDo: (no: number) => void) {
  for (let i = 0; i < times; i++) {
    whatToDo(i);
  }
}
