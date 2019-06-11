function getBirthDate(){
	var mon = document.getElementById("month");
    var date = document.getElementById("date");
    var year = document.getElementById("year");

    // console.log(mon.options[mon.selectedIndex].value, date.options[date.selectedIndex].value, year.options[year.selectedIndex].value);
    // alert("Month: " + mon.options[mon.selectedIndex].value);
    // alert("Date: " + date.options[date.selectedIndex].value);
    // alert("Year: " + year.options[year.selectedIndex].value);

    var choice = document.getElementById("choice").value;
    // console.log("Your choice is " + choice);

    if(choice == 1) {
        document.getElementsByClassName('a')[0].style.display = 'block';
        hide('a');
    } else if (choice == 2) {
        document.getElementsByClassName('b')[0].style.display = 'block';
        hide('b');
    } else if (choice == 3) {
        document.getElementsByClassName('c')[0].style.display = 'block';
        hide('c');
    } else if (choice == 4) {
        document.getElementsByClassName('d')[0].style.display = 'block';
        hide('d');
    } else if (choice == 5) {
        document.getElementsByClassName('e')[0].style.display = 'block';
        hide('e');
    } else if (choice == 6) {
        document.getElementsByClassName('f')[0].style.display = 'block';
        hide('f');
    } else if (choice == 7) {
        document.getElementsByClassName('g')[0].style.display = 'block';
        hide('g');
    } else if (choice == 8) {
        document.getElementsByClassName('h')[0].style.display = 'block';
        hide('h');
    } else if (choice == 9) {
        document.getElementsByClassName('i')[0].style.display = 'block';
        hide('i');
    } else if (choice == 11) {
        document.getElementsByClassName('j')[0].style.display = 'block';
        hide('j');
    } else if (choice == 22) {
        document.getElementsByClassName('k')[0].style.display = 'block';
        hide('k');
    }
}

function hide(desc) {
    var arr = ['a','b','c','d','e','f','g','h','i','j','k'];
    for(i = 0; i < arr.length; ++i) {
        if(arr[i] != desc)
            document.getElementsByClassName(arr[i])[0].style.display = 'none';
    }
}

