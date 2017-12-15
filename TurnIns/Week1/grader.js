function average(scores){
    var total = 0;
    scores.forEach(function(score){
        total += score;
    });
    var avg = total/scores.length;
    return Math.round(avg);
}

var scores1 = [10, 10, 9, 4];
console.log(average(scores1));

var scores1 = [3, 11, 98, 100];
console.log(average(scores1));
