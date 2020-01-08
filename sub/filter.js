
var list = [1,2,3,4,5,6,7];

var moreThanFive = function(num){
    return num > 5;
}

var definitelyMoreThanFive = list.filter(moreThanFive);

//console.log(definitelyMoreThanFive);




let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ]

function isNumber(obj){
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj)
}

function largerThanTen(item){
    if(isNumber(item.id)){
        return true;
    }
    return false;
}

let newArr = arr.filter(largerThanTen);
console.log(newArr);