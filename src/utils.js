export const makeUcFirst = (str) => {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
};

export const getUrlVars = () => {
  let vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });

  return vars;
}

export const isArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  let result = true;

  array1.forEach(item => {
    if (!array2.includes(item)) {
      result = false;
    }
  })

  return result;
}
