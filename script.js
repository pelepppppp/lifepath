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
	if(digitsOfMonth.length === 2){
		var sumOfMonth = digitsOfMonth[0] + digitsOfMonth[1];
		$("#monthForEquation").html(month + " : " + digitsOfMonth[0] + "+" + digitsOfMonth[1] + " = " + sumOfMonth);
	} else {
		var sumOfMonth = digitsOfMonth[0];
		$("#monthForEquation").html(month + " : " + digitsOfMonth[0] + " = " + sumOfMonth);
	}
	
	// DAY
	var numDay = date;
	var digitsOfDay = [];
	while(numDay > 0){
		digitsOfDay[digitsOfDay.length] = numDay % 10;
		numDay = parseInt(numDay / 10);
	}
	digitsOfDay.reverse();
	if(digitsOfDay.length === 2){
		var sumOfDay = digitsOfDay[0] + digitsOfDay[1];
		$("#dayForEquation").html(date + " : " + digitsOfDay[0] + "+" + digitsOfDay[1] + " = " + sumOfDay);
	} else {
		var sumOfDay = digitsOfDay[0];
		$("#dayForEquation").html(date + " : " + digitsOfDay[0] + " = " + sumOfDay);
	}

	// YEAR
	var numYear = year;
	var digitsOfYear = [];
	while(numYear > 0){
		digitsOfYear[digitsOfYear.length] = numYear % 10;
		numYear = parseInt(numYear / 10);
	}
	digitsOfYear.reverse();
	var sumOfYear = digitsOfYear[0] + digitsOfYear[1] + digitsOfYear[2] + digitsOfYear[3];

	var sumOfYearDigits = sumOfYear;
	var digitsSumOfYear = [];
	while(sumOfYearDigits > 0){
		digitsSumOfYear[digitsSumOfYear.length] = sumOfYearDigits % 10;
		sumOfYearDigits = parseInt(sumOfYearDigits / 10);
	}
	digitsSumOfYear.reverse();
	var sumOfDigitsOfYear = digitsSumOfYear[0] + digitsSumOfYear[1];
	

	if(digitsSumOfYear.length === 2){
		$("#yearForEquation").html(year + " : " + digitsOfYear[0] + "+" + digitsOfYear[1] + "+" + digitsOfYear[2] + "+" + digitsOfYear[3] + " = " + sumOfYear + " = " + digitsSumOfYear[0] + "+" + digitsSumOfYear[1] + " = " + sumOfDigitsOfYear);
	} else {
		$("#yearForEquation").html(year + " : " + digitsOfYear[0] + "+" + digitsOfYear[1] + "+" + digitsOfYear[2] + "+" + digitsOfYear[3] + " = " + sumOfYear);
	}

	//SUM OF MONTH, DAY, AND YEAR
	var sumOfMonthDayYear = sumOfMonth + sumOfDay + sumOfYear;
	var num = sumOfMonthDayYear;
	var digits = [];
	while (num > 0) {
		digits[digits.length] = num % 10;
		num = parseInt(num / 10);
	}
	digits.reverse();

	for (var i = 0, sumOfDMY = 0; i < digits.length; sumOfDMY += digits[i++]){
		if(sumOfDMY == 13){
			var last = (sumOfDMY % 10) + 1;
			console.log(last);
		}
	}

	if(digitsSumOfYear.length === 2){
		$("#yearsum").html(sumOfMonth + "+" + sumOfDay + "+" + sumOfDigitsOfYear + " = " + sumOfDMY);
	} else {
		$("#yearsum").html(sumOfMonth + "+" + sumOfDay + "+" + sumOfYear + " = " + sumOfDMY);
	}


	var numSumOfDMY = sumOfDMY;
	var digitsOfSumOfDMY = [];
	while(numSumOfDMY > 0){
		digitsOfSumOfDMY[digitsOfSumOfDMY.length] = numSumOfDMY % 10;
		numSumOfDMY = parseInt(numSumOfDMY / 10);
	}
	digitsOfSumOfDMY.reverse();
	console.log(digitsOfSumOfDMY)

	// LAST EDIT DIREEEEEEEEEEEEEEEEEEEEEEEE
	$("#lifepath").html("Life Path Number: " + sumOfDMY);


	if (sumOfDMY == 1) {
		document.getElementsByClassName('a')[0].style.display = 'block';
		hide('a');
	} else if (sumOfDMY == 2) {
		document.getElementsByClassName('b')[0].style.display = 'block';
		hide('b');
	} else if (sumOfDMY == 3) {
		document.getElementsByClassName('c')[0].style.display = 'block';
		hide('c');
	} else if (sumOfDMY == 4) {
		document.getElementsByClassName('d')[0].style.display = 'block';
		hide('d');
	} else if (sumOfDMY == 5) {
		document.getElementsByClassName('e')[0].style.display = 'block';
		hide('e');
	} else if (sumOfDMY == 6) {
		document.getElementsByClassName('f')[0].style.display = 'block';
		hide('f');
	} else if (sumOfDMY == 7) {
		document.getElementsByClassName('g')[0].style.display = 'block';
		hide('g');
	} else if (sumOfDMY == 8) {
		document.getElementsByClassName('h')[0].style.display = 'block';
		hide('h');
	} else if (sumOfDMY == 9) {
		document.getElementsByClassName('i')[0].style.display = 'block';
		hide('i');
	} else if (sumOfDMY == 11) {
		document.getElementsByClassName('j')[0].style.display = 'block';
		hide('j');
	} else if (sumOfDMY == 22) {
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