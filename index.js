function divide(a, b) {
    if (b == 0) {
      throw new Error('Cannot divide by 0');
    }
    return a / b;
  }

  //Accepts array of numbers, rearranging them such that the array is sorted
  //in ascending order
  function sort(list) {
    for(let i = 2; i < list.length; i++){
      let j = i;
      //console.log("Item to look at: " + list[j])
      while(j > 0 && list[j - 1] > list[j]){
        let temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;
        j--;
      }
    }
    return list;
  }

  module.exports = divide;