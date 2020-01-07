
var prices = [100,180,260,310,40,535,695];
var prices2 = [10,9,8,7,6,5,4];
var prices3 = [1,2,3,4,5,6,7,8]



var diff = (x,y) => y - x;

//find where to sell in the middle
function Pivot(x,y,prices){
    var value = Number.NEGATIVE_INFINITY;
    var last = y;
    var pivot;
    var bestPivot;
    var profit;
    if(x > y){
        console.log("Something's Wrong");
        return 404;
    }

    while (y > x){
        if(last - y > 1){
            profit = diff(prices[x],prices[y]) + diff(prices[y+1], prices[last]) ; 
        }
        else{
            profit = diff(prices[x],prices[y]);
        }
        //console.log(profit);
        if( profit > value){
            
            pivot = y;
            value = profit;
        }
        y--;
    }
    return pivot;

}

function skipFirst(prices){
    var head = 0;
    while(head < prices.length - 1){ 
        if(prices[head+1] > prices[head]){
            return head;
        }
        head++;
    }
    

    return head;
}

function skipLast(prices){
    var tail = prices.length - 1;
    while (tail > 0){
        if(prices[tail] > prices[tail-1]){
            return tail;
        }
        tail--;
    }

    return tail;

}




console.log(Pivot(skipFirst(prices2),skipLast(prices2),prices2));