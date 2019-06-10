function calculate() {
    var x = document.getElementById("dob").value;
    if(x==="")
        alert("Select Your Date of Birth");
    else
    {
        alert("Date: "+x);
        var result = x.split('-');
        var m = result.join('');
        var sum = parseInt(m[0])+parseInt(m[1])+parseInt(m[2])+parseInt(m[3])+
                  parseInt(m[4])+parseInt(m[5])+parseInt(m[6])+parseInt(m[7]);


        alert("Sum: "+sum);
        var num = parseInt(sum);
        var cal=0;
        while(num > 0) {
            var rem = num%10;
            cal += rem;
            num  = Math.floor(num / 10);
            if(cal > 9) {
                num = cal;
                cal = 0;
            }
        }

        
        alert("Cal: "+cal);
    }
    switch(cal) {
        case 1:
            hide('a');
            document.getElementsByClassName('a')[0].style.display = 'block';
            break;
        case 2:
            hide('b');
            document.getElementsByClassName('b')[0].style.display = 'block';
            break;
        case 3:
            hide('c');
            document.getElementsByClassName('c')[0].style.display = 'block';
            break;
        case 4:
            hide('d');
            document.getElementsByClassName('d')[0].style.display = 'block';
            break;
        case 5:
            hide('e');
            document.getElementsByClassName('e')[0].style.display = 'block';
            break;
        case 6:
            hide('f');
            document.getElementsByClassName('f')[0].style.display = 'block';
            break;
        case 7:
            hide('g');
            document.getElementsByClassName('g')[0].style.display = 'block';
            break;
        case 8:
            hide('h');
            document.getElementsByClassName('h')[0].style.display = 'block';
            break;
        case 9:
            hide('i');
            document.getElementsByClassName('i')[0].style.display = 'block';
            break;
        default:
            hide('x');
    }
}
function hide(clnm) {
    var arr = ['a','b','c','d','e','f','g','h','i'];
    for(i=0; i<arr.length; ++i) {
        if(arr[i] != clnm)
            document.getElementsByClassName(arr[i])[0].style.display = 'none';
    }
}