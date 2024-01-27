function rectangle(width, height, color) {
      const rect = {
            width,
            height,
            color,
            calcArea() {
                  return this.width * this.height;
            },
            charToUpperCase() {
                  const charToUpperCase = this.color.charAt(0).toUpperCase();
                  return this.color = this.color.replace(this.color.charAt(0), charToUpperCase);
            }
      }
      rect.charToUpperCase();
      return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
