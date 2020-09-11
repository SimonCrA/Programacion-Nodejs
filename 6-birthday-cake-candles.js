let candles = [3, 2, 1, 3, 1, 3, 2, 3];



function birthdayCakeCandles(candles) {
    
    let tallestCandle = Math.max.apply(Math, candles);
    let tallestCandleCount = 0;
    for(let i=0; i<candles.length; i++) {
        if (tallestCandle === candles[i]) {
            tallestCandleCount +=1;
        };
    };

    console.log(tallestCandleCount);

};

birthdayCakeCandles(candles);