function sumDigits(num) {
     var i, sum = 0;  

     for (i = 1; i <= num; i++) {
             sum += i;
     }

     alert("The sum of the digits from 1 to "+ num + " is:\n\n\t " + sum);
}
