function previousDay(...arrgs) {
      let [year, month, day] = arrgs;
      const currentDate = new Date(year, month - 1, day - 1);
      month = currentDate.getMonth();
      year = currentDate.getFullYear();
      day = currentDate.getDate();
      return console.log(`${year}-${month += 1}-${day}`);
}
previousDay(2016, 3, 1);
previousDay(2015, 5, 10);