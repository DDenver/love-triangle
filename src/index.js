/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  arr = preferences;
  arrLove = [];
  
  //Оставляет уникальные элементы массива
  function unique(arr) {
      var result = [];
    
      nextInput:
        for (var i = 0; i < arr.length; i++) {
          var str = arr[i]; // для каждого элемента
          for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
            if (result[j] == str) continue nextInput; // если да, то следующий
          }
          result.push(str);
        }
    
      return result;
    }
  
  for (i = 0; i < (arr.length); i++){
    firstLover = arr[i];
    secondLover = arr[firstLover-1];
    thidLover = arr[secondLover-1];
    if (thidLover == i+1){
      arrLove.push(firstLover);
      arrLove.push(secondLover);
      arrLove.push(thidLover);
      console.log(arrLove);
    };
  };
  
  arrLove = unique(arrLove);
  
  o = Math.floor(arrLove.length / 3);
  return o;
  
};
