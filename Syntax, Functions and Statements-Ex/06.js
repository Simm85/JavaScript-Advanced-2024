function roadRadar(speed, area) {
      let isSpeedNormal = true;
      let speedLimit = 0;
      let kmOverLimit = 0;
      
      switch (area) {
            case 'city':
                  speedLimit = 50;
                  if (speed > speedLimit) {
                        isSpeedNormal = false;
                        kmOverLimit = speed - speedLimit;
                  }
                  break;
            case 'motorway':
                  speedLimit = 130;
                  if (speed > speedLimit) {
                        isSpeedNormal = false;
                        kmOverLimit = speed - speedLimit;
                  }
                  break;
            case 'interstate':
                  speedLimit = 90;
                  if (speed > speedLimit) {
                        isSpeedNormal = false;
                        kmOverLimit = speed - speedLimit;
                  }
                  break;
            case 'residential':
                  speedLimit = 20;
                  if (speed > speedLimit) {
                        isSpeedNormal = false;
                        kmOverLimit = speed - speedLimit;
                  }
                  break;
      }

      if (isSpeedNormal) {
            return console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      }

      let status = '';
      if (kmOverLimit <= 20) {
            status = 'speeding';
      } else if (kmOverLimit <= 40) {
            status = 'excessive speeding';
      } else {
            status = 'reckless driving';
      }

      return console.log(`The speed is ${kmOverLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}
roadRadar(55, 'city');