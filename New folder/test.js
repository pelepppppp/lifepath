
jQuery(document).ready(function() {
    if ( jQuery("#weeklyDay") ) {
        var myWeeklyDay = jQuery("#weeklyDay");

        for (var t = 1; t < 32; t++) {
            myWeeklyDay.append("<option value='" + t + "'>" + t + "</option>");
        }
    }
})


var lifePathCalculator = "<div data-id='meta-UICalc-life' class='UICalc-life' id='{thisId}'>" +
    "<div id='meta-UICalc-back' class='UICalc-back'>" +
        "<form method='GET' action='/numerology/my_life_path/' data-id='lifePathForm' id='{formId}'>" +
        "<div id='meta-UICalc-top' class='UICalc-top'>" +
            "<div>" +
                "<select name='myMonth' data-id='myMonth' id='{thisId}-myMonth' class='UICalc-select'>" +
                "<option value='0'>MONTH<\/option>" +
                "<\/select>" +
            "<\/div>" +

            "<div class='pt11'>" +
                "<select name='myDay' data-id='myDay' id='{thisId}-myDay' class='UICalc-select'>" +
                    "<option value='0'>DAY<\/option>" +
                "<\/select>" +
            "<\/div>" +

            "<div class='pt11'>" +
                "<select name='myYear' data-id='myYear' id='{thisId}-myYear' class='UICalc-select'>" +
                    "<option value='0'>YEAR<\/option>" +
                "<\/select>" +
            "<\/div>" +
        "<\/div>" +

        "<div id='meta-UICalc-bot' class='UICalc-bot'>" +
            "<div>" +
                "<select name='num' data-id='myNum' id='{thisId}-myNum' style='z-index: 200'>" +
                    "<option value='0'>#<\/option>" +
                    "<option value='1'>1<\/option><option value='2'>2<\/option><option value='3'>3<\/option>" +
                    "<option value='4'>4<\/option><option value='5'>5<\/option><option value='6'>6<\/option>" +
                   "<option value='7'>7<\/option><option value='8'>8<\/option><option value='9'>9<\/option><option value='11'>11<\/option><option value='22'>22<\/option>" +
                "<\/select>" +
            "<\/div>" +


            "<div id='meta-UICalc-but' class='UICalc-but'>" +
                "<input type='button' class='go_but hand' value='Calculate' onclick='checkLifePath(\"{thisId}\");return false' />" +
            "<\/div>" +

        "<\/div>" +
        "<\/form>" +
    "<\/div>" +
"<\/div>";

function addLifePathCalculator(thisMonth, thisDay, thisYear, thisId = 'UICalc-life') {

    thisDay = (typeof thisDay != "undefined") ? thisDay : 0;
    thisMonth = (typeof thisMonth != "undefined") ? thisMonth : 0;
    thisYear = (typeof thisYear != "undefined") ? thisYear : 0;

    lifePathCalculator = lifePathCalculator.replace(/{thisId}/g, thisId);
    lifePathCalculator = lifePathCalculator.replace(/{formId}/g, thisId + "-form");
    document.write( lifePathCalculator );

    var monthArr = Array();
    monthArr[1] = "Jan";
    monthArr[2] = "Feb";
    monthArr[3] = "Mar";
    monthArr[4] = "Apr";
    monthArr[5] = "May";
    monthArr[6] = "Jun";
    monthArr[7] = "Jul";
    monthArr[8] = "Aug";
    monthArr[9] = "Sep";
    monthArr[10] = "Oct";
    monthArr[11] = "Nov";
    monthArr[12] = "Dec";


    for (var t = 1; t < 13; t++) {
        var finalMonth = '<option value="' + t + '" ';
        if (t == thisMonth) {
            finalMonth += ' selected="selected" ';
        }
        finalMonth += ' >' + monthArr[t] + '</option>';

        jQuery("#" + thisId + "-myMonth").append(finalMonth);

    }


    for (var t = 1; t < 32; t++) {
        var finalDay = '<option value="' + t + '" ';
        if (t == thisDay) {
            finalDay += ' selected="selected" ';
        }

        finalDay += ' >' + t + '</option>';

        jQuery("#" + thisId + "-myDay").append(finalDay);
    }

    for (var t = 2016; t > 1900 ; t--) {
        var finalYear = '<option value="' + t + '" ';
        if ( t == thisYear ) {
            finalYear += ' selected="selected" ';
        }
        finalYear += ' >' + t + '</option>';

        jQuery("#" + thisId + "-myYear").append(finalYear);
    }


}

// Numerology Specific Stuff
function checkLifePath(thisId = 'UICalc-life') {

    if ((jQuery("#" + thisId + "-myMonth").val() == "0") && (jQuery("#" + thisId + "-myDay").val() == "0") && (jQuery("#" + thisId + "-myYear").val() == "0") && (jQuery("#" + thisId + "-myNum").val() == "0"))  {
        alert("Please select your full birth date or select a number.");
    } else {
        if (jQuery("#" + thisId + "-myNum").val() != "0") {
            location.href = "/numerology/life-path-" + jQuery("#" + thisId + "-myNum").val() + ".html";
        } else {
            jQuery("#" + thisId + "-form").submit();
        }
    }

}


var expressionCalculator = "<div id='UICalc-exp'>" +
    "<div id='popup_nameB'><img src='\/numerology\/images\/popup_full_name.gif' alt='' \/><\/div>" +
   "<div id='UICalc-space'><img src='\/images\/spacer.gif' height='10' width='80' \/><\/div>" +

    "<form method='GET' action='/numerology/my_expression/' id='expForm' >" +
        "<div id='UICalc-name'>" +
            "<div>" +
                "<input type='text' name='myName' id='myName' \/>" +
            "<\/div>" +
        "<\/div>" +

        "<div id='UICalc-expnum'>" +
            "<div>" +
                "<select name='num' id='myExprNumber'>" +
                    "<option value='0'>#<\/option>" +
                    "<option value='1'>1<\/option><option value='2'>2<\/option><option value='3'>3<\/option><option value='4'>4<\/option><option value='5'>5<\/option>" +
                    "<option value='6'>6<\/option><option value='7'>7<\/option><option value='8'>8<\/option><option value='9'>9<\/option><option value='11'>11<\/option>" +
                    "<option value='22'>22<\/option>" +
                "<\/select>" +
            "<\/div>" +

            "<div id='UICalc-expbut'>" +
                "<input type='button' class='go_but hand' value='' onclick='checkExpression();' \/>" +
            "<\/div>" +

        "<\/div>" +
    "<\/form>" +
"<\/div>";

function addExpressionCalculator() {
    document.write( expressionCalculator );
}

function testVar() {

  var myVal = jQuery("#myName").val();
    var newVal = "";
    for (var t = 0; t < myVal.length; t++) {
      var _exp1 = new RegExp(/^[a-z]/i);
      var _test=_exp1.test(myVal[t]);
      if (!_test && myVal[t] != " ") {
        } else {
            newVal += myVal[t];
        }

    }
    jQuery("#myName").val(newVal);
}

function checkExpression() {
    if (( jQuery("#myName").val() == "") && ( jQuery("#myExprNumber").val() == "0"))  {
        alert("Please fill in your name or select a number before continuing.");
        jQuery("#myName").css("borderColor", "red");
    } else {
        jQuery("#expForm").submit();
    }
}




function getWeekly() {
    jQuery.ajax({
      url: "\/numerology\/weekly_numerology_ajax.php?weeklyDay=" + jQuery("#weeklyDay").val() + "&weeklyMonth=" + jQuery("#weeklyMonth").val(),
      success: function( data ){
        jQuery("#weeklyOutput").html(data);
      }
    });

}

