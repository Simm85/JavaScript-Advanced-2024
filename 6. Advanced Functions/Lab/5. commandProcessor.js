function commandProcessor() {
      return {
            string: null,
            append(inputString) {
                  if (!this.string) {
                        return this.string = inputString;
                  }
                  return this.string += inputString;
            },
            removeStart(n) {
                  return this.string = this.string.substr(n, this.string.length);
            },
            removeEnd(n) {
                  return this.string = this.string.substr(0, this.string.length - n);
            },
            print() {
                  return console.log(this.string);
            }
      }
}

let firstZeroTest = commandProcessor();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = commandProcessor();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

