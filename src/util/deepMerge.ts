/**
 * 对象深度合并
 * @param obj1
 * @param obj2
 * @returns
 */
export function deepMerge(obj1, obj2) {
  let key;
  // tslint:disable-next-line: forin
  for (key in obj2) {
    obj1[key] =
      obj1[key] &&
      obj1[key].toString() === "[object Object]" &&
      obj2[key] &&
      obj2[key].toString() === "[object Object]"
        ? deepMerge(obj1[key], obj2[key])
        : (obj1[key] = obj2[key]);
  }
  return obj1;
}
