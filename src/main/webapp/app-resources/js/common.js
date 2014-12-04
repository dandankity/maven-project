$(document).ready(function(){

$("#btnShow").bind("click", function(event) { $("#divMsg").show(); });
$("#btnHide").bind("click", function(event) { $("#divMsg").hide(); });
$("#btnChange").bind("click", function(event) { $("#divMsg").html("Hello World, too!"); });


});

function CommonFunction(){
    var max=function(numbers){
        return numbers.reduce(function(previousNumber,currentNumber){
            if(previousNumber>currentNumber)  return previousNumber;
            return currentNumber;
        });
    };
    var min=function(numbers){
            return numbers.reduce(function(previousNumber,currentNumber){
                if(previousNumber<currentNumber)  return previousNumber;
                return currentNumber;
            });
        };
    var average=function(numbers){
        var total = 0;
        for(var i=0; i<numbers.length; i++){
            total+=numbers[i];
        }
        return total/numbers.length;

    }
    var sequenceLength=function(numbers){
       return numbers.length;
    }

    return {
        max: max,
        min: min,
        average:average,
        sequenceLength:sequenceLength
    };
}

