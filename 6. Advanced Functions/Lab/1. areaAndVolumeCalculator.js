function areaAndVolumeCalculator(areaFn, volFn, string) {
      return JSON.parse(string).map(obj => {
            return {
                  area: areaFn.call(obj),
                  volume: volFn.call(obj)
            };
      });
}
areaAndVolumeCalculator(area, vol, `[
      {"x":"1","y":"2","z":"10"},
      {"x":"7","y":"7","z":"10"},
      {"x":"5","y":"2","z":"10"}
      ]`
);

function area() {
      return Math.abs(this.x * this.y);
}

function vol() {
      return Math.abs(this.x * this.y * this.z);
}



