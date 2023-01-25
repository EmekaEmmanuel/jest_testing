const revCap = {
    reverseString: (string) => string.split('').reverse().join(''),
     capitalize: (string) => {
      const temp = string.charAt(0).toUpperCase() + string.slice(1);
      return temp;
    }
  };
  
  module.exports = revCap;