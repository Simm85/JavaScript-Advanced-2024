function daysInMonth(month, year) {
      month -= 1;
      let date = 1;
      let monthDays = 0;
      let currentMonth = new Date(year, month, date).getMonth();

      while (month === currentMonth) {
            date++;
            monthDays++;
            currentMonth = new Date(year, month, date).getMonth();
      }

      console.log(monthDays);
}
daysInMonth(2, 2021);