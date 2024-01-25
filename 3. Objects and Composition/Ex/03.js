function carFactory(object) {
      const myStorage = {
            engine: {
                  small: {
                        power: 90,
                        volume: 1800
                  },
                  normal: {
                        power: 120,
                        volume: 2400
                  },
                  monster: {
                        power: 200,
                        volume: 3500
                  },
            },
            carriage: {
                  Hatchback: {
                        type: 'hatchback',
                        color: null
                  },
                  Coupe: {
                        type: 'coupe',
                        color: null
                  },
            },
            defineCarriagePaint(str1, str2) {
                  if (str1 === 'hatchback') {
                        this.carriage.Hatchback.color = str2;
                        return this.carriage.Hatchback;
                  } else {
                        this.carriage.Coupe.color = str2;
                        return this.carriage.Coupe;
                  }

            },
            defineEnginePower(n) {
                  if (n <= 90) {
                        return this.engine.small;
                  } else if (n <= 120) {
                        return this.engine.normal;
                  } else {
                        return this.engine.monster;
                  }
            },
            defineWheelsSize(n) {
                  if (n % 2 === 0) {
                        n--;
                  }
                  const result = [];
                  while (result.length < 4) {
                        result.push(n);
                  }
                  return result;
            }
      }

      const car = {
            model: object.model,
            engine: myStorage.defineEnginePower(object.power),
            carriage: myStorage.defineCarriagePaint(object.carriage, object.color),
            wheels: myStorage.defineWheelsSize(object.wheelsize)
      }
      return car;
}

carFactory({
      model: 'VW Golf II',
      power: 90,
      color: 'blue',
      carriage: 'hatchback',
      wheelsize: 14
});

carFactory({
      model: 'Opel Vectra',
      power: 110,
      color: 'grey',
      carriage: 'coupe',
      wheelsize: 17
});