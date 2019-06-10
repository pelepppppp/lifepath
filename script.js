function getBirthDate(){
	var mon = document.getElementById("month");
    var date = document.getElementById("date");
    var year = document.getElementById("year");

    // console.log(mon.options[mon.selectedIndex].value, date.options[date.selectedIndex].value, year.options[year.selectedIndex].value);
    // console.log(date.options[date.selectedIndex].value);
    // console.log(year.options[year.selectedIndex].value);

    var choice = document.getElementById("choice").value;
    console.log(choice);
    if(choice == 1) {
    	document.getElementsByClassName('a')[0].style.display = 'block';
    } else if (choice == 2) {
    	document.getElementsByClassName('b')[0].style.display = 'block';
    } else if (choice == 3) {
    	document.getElementsByClassName('c')[0].style.display = 'block';
    } else if (choice == 4) {
    	document.getElementsByClassName('d')[0].style.display = 'block';
    } else if (choice == 5) {
    	document.getElementsByClassName('e')[0].style.display = 'block';
    } else if (choice == 6) {
    	document.getElementsByClassName('f')[0].style.display = 'block';
    } else if (choice == 7) {
    	document.getElementsByClassName('g')[0].style.display = 'block';
    } else if (choice == 8) {
    	document.getElementsByClassName('h')[0].style.display = 'block';
    } else if (choice == 9) {
    	document.getElementsByClassName('i')[0].style.display = 'block';
    } else if (choice == 11) {
    	document.getElementsByClassName('j')[0].style.display = 'block';
    } else if (choice == 22) {
    	document.getElementsByClassName('k')[0].style.display = 'block';
    }

    // switch(choice) {
    //     case 1:
    //         hide('a');
    //         document.getElementsByClassName('a')[0].style.display = 'block';
    //         break;
    //     case 2:
    //         hide('b');
    //         document.getElementsByClassName('b')[0].style.display = 'block';
    //         break;
    //     case 3:
    //         hide('c');
    //         document.getElementsByClassName('c')[0].style.display = 'block';
    //         break;
    //     case 4:
    //         hide('d');
    //         document.getElementsByClassName('d')[0].style.display = 'block';
    //         break;
    //     case 5:
    //         hide('e');
    //         document.getElementsByClassName('e')[0].style.display = 'block';
    //         break;
    //     case 6:
    //         hide('f');
    //         document.getElementsByClassName('f')[0].style.display = 'block';
    //         break;
    //     case 7:
    //         hide('g');
    //         document.getElementsByClassName('g')[0].style.display = 'block';
    //         break;
    //     case 8:
    //         hide('h');
    //         document.getElementsByClassName('h')[0].style.display = 'block';
    //         break;
    //     case 9:
    //         hide('i');
    //         document.getElementsByClassName('i')[0].style.display = 'block';
    //         break;
    //     default:
    //         hide('x');
    // }    
}

function hide(clnm) {
    var arr = ['a','b','c','d','e','f','g','h','i'];
    for(i = 0; i < arr.length; ++i) {
        if(arr[i] != clnm)
            document.getElementsByClassName(arr[i])[0].style.display = 'none';
    }
}

