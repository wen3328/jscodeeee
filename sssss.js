/*var massMark,massJohn,hiMark,hiJohn;
massMark=70;
massJohn=68;

himark=180/100;
hiJohn=177/100;

var BMImark=massMark/(himark*himark);
var BMIjohn=massJohn/(hiJohn*hiJohn);
console.log(BMImark,BMIjohn);


var isboo=BMImark>BMIjohn;
console.log('is Mark\'s Bmi greater than Jhon? '+isboo);*/


/*
var avrj=(89+102+103)/3;
var avrm=(116+94+123)/3;
var avry=(97+134+105)/3;

if(avrj>avrm && avrj>avry){
    console.log('Jhon is winner'+avrj);
}
else if (avrj<avrm && avry<avrm){
    console.log('Mike is winner'+avrm);
}
else if(avry>avrj &&avry>avrm){
    console.log('Mary winner'+avry);
}
else{
    console.log('No winner');
}
*/



var bill;
var tip=function(bill){
if(bill<50){
    return bill*0.2;
}
else if(bill>=50&&bill<200){
    return bill*0.15;
}
else{
    return bill*0.1;
}
}