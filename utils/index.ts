export function doThisManyTimes(times: number, whatToDo: (no: number) => void) {
  if (times < 0) {
    for (let i = times; i < 0; i++) {
      whatToDo(i);
    }
  } else if (times > 0) {
    for (let i = 0; i < times; i++) {
      whatToDo(i);
    }
  }
}
