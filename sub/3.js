function fibo (n){
    var x = 0;
    var y = 1;
    var temp;
    if(n==1){
        console.log(x);
        return;
    }
    else if(n == 2){
        console.log(y);
        return;
    }
    while(--n > 1){
        temp = y;
        y = add(x,y);
        x = temp;
        
    }
    console.log(y);


}

var add = (x,y) => x+y;

///0 1 1 2 3 5 8 13

fibo(1); fibo(2); fibo(5);