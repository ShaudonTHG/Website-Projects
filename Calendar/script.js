const date = new Date();

    const renderCalendar = () => {
      date.setDate(1);

      const monthDays = document.querySelector(".days");
      monthDays.innerHTML = "";

      const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate();
      
      const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
      ).getDate();
      
      const firstDayIndex = date.getDay();
      
      const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDay();
      
      const nextDays = 7 - lastDayIndex - 1;
      
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      
      const monthYear = months[date.getMonth()] + ' ' + date.getFullYear();
      
      document.querySelector(".date").textContent = monthYear;

      let days = "";

      for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
      }

      for (let i = 1; i <= lastDay; i++) {
        if (
          i === new Date().getDate() &&
          date.getMonth() === new Date().getMonth()
        ) {
          days += `<div class="today">${i}</div>`;
        } else {
          days += `<div>${i}</div>`;
        }
      }

      for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
      }

      monthDays.innerHTML = days;
    };

    document.querySelector(".fa-chevron-circle-left").addEventListener("click", () => {
      date.setMonth(date.getMonth() - 1);
      renderCalendar();
    });

    document.querySelector(".fa-chevron-circle-right").addEventListener("click", () => {
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
    });

    function updateClock() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      var ampm = hours >= 12 ? 'PM' : 'AM';
  
      hours = hours % 12;
      hours = hours ? hours : 12; //
  
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
  
      var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
      document.getElementById('clock').textContent = timeString;
  
      setTimeout(updateClock, 1000); 
  }
  
  updateClock();

    renderCalendar();