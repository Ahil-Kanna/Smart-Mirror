function displayCalendar() {


    var htmlContent = "";
    var FebNumberOfDays = "";
    var counter = 1;


    var dateNow = new Date();
    var month = dateNow.getMonth();

    var nextMonth = month + 1; //+1; //Used to match up the current month with the correct start date.
    var prevMonth = month - 1;
    var day = dateNow.getDate();
    var year = dateNow.getFullYear();


    //Determing if February (28,or 29)  
    if (month == 1) {
        if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
            FebNumberOfDays = 29;
        } else {
            FebNumberOfDays = 28;
        }
    }


    // names of months and week days.
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    var dayPerMonth = ["31", "" + FebNumberOfDays + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"]


    // days in previous month and next one , and day of week.
    var nextDate = new Date(nextMonth + ' 1 ,' + year);
    var weekdays = nextDate.getDay();
    var weekdays2 = weekdays
    var numOfDays = dayPerMonth[month];
    var numofDaysOfPrev = dayPerMonth[month - 1];




    // this leave a white space for days of pervious month.
    while (weekdays > 0) {
        htmlContent = "<td class='prev-month'>" + numofDaysOfPrev + "</td>" + htmlContent;
        numofDaysOfPrev--;

        // used in next loop.
        weekdays--;
    }

    // loop to build the calander body.
    while (counter <= numOfDays) {

        // When to start new line.
        if (weekdays2 > 6) {
            weekdays2 = 0;
            htmlContent += "</tr><tr>";
        }



        // if counter is current day.
        // highlight current day using the CSS defined in header.
        if (counter == day) {
            htmlContent += "<td class='current-day' >" + counter + "</td>";
        } else {
            htmlContent += "<td class='day' >" + counter + "</td>";

        }

        weekdays2++;
        counter++;
    }
    counter = 1;
    while (weekdays2 <= 6) {
        htmlContent += "<td class='next-month' >" + counter++ + "</td>";
        weekdays2++;
    }



    // building the calendar html body.
    var calendarBody = "<tbody class='calendar-table'> ";
    calendarBody += "<tr>";
    calendarBody += htmlContent;
    calendarBody += "</tr></tbody>";
    document.getElementById("month").innerHTML = monthNames[month];
    // set the content of div .
    document.getElementById("calendar-table").innerHTML = document.getElementById("calendar-table").innerHTML + calendarBody;

}