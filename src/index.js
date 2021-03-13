module.exports = function check(str, bracketsConfig) {
  
  if (str.length & 2 != 0) {
    return false;
  }

  let stack = [];
  stack.push(str[0])

  for (let i = 1; i < str.length; i++) {
    for (let k = 0; k < bracketsConfig.length; k++) {
      if (str[i] === bracketsConfig[k][0] && str[i] === bracketsConfig[k][1]) {
        if (str[i] === stack[stack.length - 1]) {
          stack.pop();
        } else {
          stack.push(str[i]);
        }
      } else { 
        if (str[i] === bracketsConfig[k][0]) {
          stack.push(str[i]);
        } else if (str[i] === bracketsConfig[k][1]) {
            if (stack[stack.length - 1] === bracketsConfig[k][0]) {
              stack.pop();
            } else {
            return false;
            }
        }
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else return false;

}
