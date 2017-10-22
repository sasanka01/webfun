function num(arr) {
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "number" ) {
          arr1.push(arr1[i])

      }
    }
  console.log(arr1);
  return arr1;
  }
  num([1, "apple", -3, "orange", 0.5]);
