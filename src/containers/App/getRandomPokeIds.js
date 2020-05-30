export const getRandomIds = (number) => {
    var numArray = [];
    for (var i=0; i<number; i++) {
      var num = Math.floor(Math.random() * 807) + 1;
      numArray.push(num);
    }
    return numArray;
  }