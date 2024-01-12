function timeToWalk(...arrgs) {
      let [totalSteps, footPrintLength, kmPerHour] = arrgs;
      let hours = 0;
      let minutes = 0;
      let seconds = 0;
      let speedInMeters = kmPerHour * 1000;
      let totalDistanceInKms = totalSteps * footPrintLength;
      let time = totalDistanceInKms / speedInMeters * 3600;
      let rest = Math.floor(totalDistanceInKms / 500);

      minutes = Math.floor(time / 60) + rest;
      seconds = Math.round(time % 60);

      if (hours < 10) {
            hours = `0${hours}`;
      }

      if (minutes < 10) {
            minutes = `0${minutes}`;
      }

      if (seconds < 10) {
            seconds = `0${seconds}`;
      }

      return console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);