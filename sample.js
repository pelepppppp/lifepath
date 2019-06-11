$(function () {
	$(".go").click(function () {
		$("#card1").toggle();
		calculate();
	});
});

function calculate() {
	var month = $("#month").val();
	var day = $("#day").val();
	var year = $("#year").val();

	$("#birthmonth").html(month + " = " + month);
	$("#birthday").html(day + " = " + day);
	$("#birthyear").html(year + " = " + year);

	$("#bday").html(month + " / " + day + " / " + year);

	var x = document.getElementById("bday").value;
	var sum = parseInt(month) + parseInt(day);
	var yearsum = parseInt(year[0]) + parseInt(year[1]) + parseInt(year[2]) + parseInt(year[3]);
	$("#sum").html(sum);
	$("#yearsum").html(yearsum);
	console.log(sum);
	console.log(yearsum);


	var num = parseInt(sum);
	var cal = 0;
	while (num > 0) {
		var rem = num % 10;
		cal += rem;
		num = Math.floor(num / 10);
		if (cal > 9) {
			num = cal;
			cal = 0;
		}
	}
}