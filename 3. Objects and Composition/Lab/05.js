function createAssemblyLine() {
      const car = {
            hasClima(object) {
                  object.temp = 21;
                  object.tempSettings = 21;
                  object.adjustTemp = () => {
                        if (object.temp === object.tempSettings) {
                              return;
                        }

                        if (object.temp < object.tempSettings) {
                              object.temp++;
                        } else {
                              object.temp--;
                        }
                  }
            },
            hasAudio(object) {
                  object.currentTrack = {
                        name: null,
                        artist: null
                  }
                  object.nowPlaying = () => {
                        if (object.currentTrack !== null) {
                              console.log(`Now playing '${object.currentTrack.name}' by ${object.currentTrack.artist}`);
                        }
                  }
            },
            hasParktronic(object) {
                  object.checkDistance = (number) => {
                        if (number < 0.1) {
                              console.log("Beep! Beep! Beep!");
                        } else if (number >= 0.1 && number < 0.25) {
                              console.log("Beep! Beep!");
                        } else if (number >= 0.25 && number < 0.5) {
                              console.log("Beep!");
                        } else {
                              console.log('');
                        }
                  }
            }
      }
      return car;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};


assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);


assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);
