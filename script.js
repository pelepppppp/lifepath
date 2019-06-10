function getBirthDate(){
	var mon = document.getElementById("month");
    var date = document.getElementById("date");
    var year = document.getElementById("year");

    console.log(mon.options[mon.selectedIndex].value + " /", date.options[date.selectedIndex].value + " /", year.options[year.selectedIndex].value);
    // console.log(date.options[date.selectedIndex].value);
    // console.log(year.options[year.selectedIndex].value);
} 
