/**
 * html转义实体
 * @param str 
 * @returns 
 */
export function HTMLEnCode(str: string) {
  let s = "";
  if (str.length === 0) {
    return "";
  }
  s = str.replace(/&/g, "&gt;");
  s = s.replace(/ </g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/    /g, "&nbsp;");
  s = s.replace(/\'/g, "'");
  s = s.replace(/\"/g, "&quot;");
  return s;
}
