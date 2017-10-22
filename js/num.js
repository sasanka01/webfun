function num(arr) {
    var container = [];
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "number" ) {
          container.push(arr[i])
      }
    }
  console.log(container);
  return container;
  }
  num([1, "apple", -3, "orange", 0.5]);
