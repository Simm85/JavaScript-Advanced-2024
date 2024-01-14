function sumFirstLast(array) {
      array = array.map(el => el = Number(el));
      return array.shift() + array.pop();
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);