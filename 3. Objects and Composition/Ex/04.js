function heroicInventory(arr) {
      const heroReg = [];
      for (const el of arr) {
            const currentHero = {};
            let [name, level, items] = el.split(' / ');
            level = Number(level);
            items = items ? items.split(', ') : [];
            currentHero.name = name;
            currentHero.level = level;
            currentHero.items = items;
            heroReg.push(currentHero);
      }
      return JSON.stringify(heroReg);
}
heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);