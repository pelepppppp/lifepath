$(document).ready(function () {
	// $("#card-body").hide();
	$("#btn").click(function () {
		$("#card-body").show();
		calculate();
	});
});

function calculate() {
	var month = $("#month").val();
	var date = $("#date").val();
	var year = $("#year").val();

	$("#birthday").html("Birthdate: " + month + "/" + date + "/" + year);

	// MONTH
	var numMonth = month;
	var digitsOfMonth = [];
	while(numMonth > 0){
		digitsOfMonth[digitsOfMonth.length] = numMonth % 10;
		numMonth = parseInt(numMonth / 10);
	}
	digitsOfMonth.reverse();
	var sumOfMonth = digitsOfMonth[0] + digitsOfMonth[1];

	$("#monthForEquation").html(month + " : " + digitsOfMonth[0] + "+" + digitsOfMonth[1] + " = " + sumOfMonth);

	// DAY
	var numDay = date;
	var digitsOfDay = [];
	while(numDay > 0){
		digitsOfDay[digitsOfDay.length] = numDay % 10;
		numDay = parseInt(numDay / 10);
	}
	digitsOfDay.reverse();
	var sumOfDay = digitsOfDay[0] + digitsOfDay[1];

	$("#dayForEquation").html(date + " : " + digitsOfDay[0] + "+" + digitsOfDay[1] + " = " + sumOfDay);

	// YEAR
	var numYear = year;
	var digitsOfYear = [];
	while(numYear > 0){
		digitsOfYear[digitsOfYear.length] = numYear % 10;
		numYear = parseInt(numYear / 10);
	}
	digitsOfYear.reverse();
	var sumOfDay = digitsOfYear[0] + digitsOfYear[1] + digitsOfYear[2] + digitsOfYear[3];

	$("#yearForEquation").html(year + " : " + digitsOfYear[0] + "+" + digitsOfYear[1] + "+" + digitsOfYear[2] + "+" + digitsOfYear[3] + " = " + sumOfDay);


	var x = document.getElementById("birthday").value;
	var sum = parseInt(month) + parseInt(date);
	var yearsum = parseInt(year[0]) + parseInt(year[1]) + parseInt(year[2]) + parseInt(year[3]);
	var total = yearsum + sum;



	var num = total;
	var digits = [];
	while (num > 0) {
		digits[digits.length] = num % 10;
		num = parseInt(num / 10);
	}
	digits.reverse();
	// console.log(digits);

	for (var i = 0, lastNaJud = 0; i < digits.length; lastNaJud += digits[i++]){
		if(lastNaJud == 13){
			var last = (lastNaJud % 10) + 1;
			console.log(last);
		}
	}



	$("#yearsum").html("Sum: " + lastNaJud);


	if (lastNaJud == 1) {
		document.getElementsByClassName('a')[0].style.display = 'block';
		hide('a');
	} else if (lastNaJud == 2) {
		document.getElementsByClassName('b')[0].style.display = 'block';
		hide('b');
	} else if (lastNaJud == 3) {
		document.getElementsByClassName('c')[0].style.display = 'block';
		hide('c');
	} else if (lastNaJud == 4) {
		document.getElementsByClassName('d')[0].style.display = 'block';
		hide('d');
	} else if (lastNaJud == 5) {
		document.getElementsByClassName('e')[0].style.display = 'block';
		hide('e');
	} else if (lastNaJud == 6) {
		document.getElementsByClassName('f')[0].style.display = 'block';
		hide('f');
	} else if (lastNaJud == 7) {
		document.getElementsByClassName('g')[0].style.display = 'block';
		hide('g');
	} else if (lastNaJud == 8) {
		document.getElementsByClassName('h')[0].style.display = 'block';
		hide('h');
	} else if (lastNaJud == 9) {
		document.getElementsByClassName('i')[0].style.display = 'block';
		hide('i');
	} else if (lastNaJud == 11) {
		document.getElementsByClassName('j')[0].style.display = 'block';
		hide('j');
	} else if (lastNaJud == 22) {
		document.getElementsByClassName('k')[0].style.display = 'block';
		hide('k');
	}


}


function getBirthDate() {
	var mon = document.getElementById("month");
	var date = document.getElementById("date");
	var year = document.getElementById("year");


	var x = mon.options[mon.selectedIndex].value + date.options[date.selectedIndex].value + year.options[year.selectedIndex].value;


	var choice = document.getElementById("choice").value;

	if (choice == 1) {
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
	var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
	for (i = 0; i < arr.length; ++i) {
		if (arr[i] != desc)
			document.getElementsByClassName(arr[i])[0].style.display = 'none';
	}
}