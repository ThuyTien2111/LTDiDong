//a
console.log(" [data1] : ")
let scoreDolphins1 = 96
let scoreDolphins2 = 108
let scoreDolphins3 = 89
let scoreKoalas1 = 88
let scoreKoalas2 = 91
let scoreKoalas3 = 110

function calAverageScore (score1, score2, score3)   { 
let avg = (score1 + score2 + score3) / 3
return avg

}

let AvgDolphins = calAverageScore (scoreDolphins1, scoreDolphins2, scoreDolphins3)
let AvgKoalas =  calAverageScore  (scoreKoalas1, scoreKoalas2, scoreKoalas3)
console.log("AVG Score Of Dolphins: " + AvgDolphins)
console.log("AVG Score Of KoaIas: " + AvgKoalas)

//b
if (AvgDolphins > AvgKoalas) console.log("Dolphins won") 
else if (AvgKoalas > AvgDolphins) console.log("Koalas won") 
else console.log("Draw! ")

//dataBonus1
console.log( " \n[dataBonus1] : " )
coreDolphins1  =  97
coreDolphins2  =  112
scoreDolphins3  =  101
scoreKoalas1  =  109
scoreKoalas2  =  95
scoreKoalas3  =  123
AvgDolphins  = calAverageScore(scoreDolphins1, scoreDolphins2, scoreDolphins3)
console.log("AVG Score Of Dolphins:  "  + AvgDolphins)
AvgKoalas  = calAverageScore(scoreKoalas1, scoreKoalas2, scoreKoalas3) 
console.log("AVG  Score Of  Koalas:  "  + AvgKoalas)
    //c
console.log( "\nWith Bonus 1: " )
if ((AvgDolphins > AvgKoalas) && (AvgDolphins >= 100)) console.log("Dolphins won")
else if ((AvgKoalas > AvgDolphins) && (AvgKoalas >= 100)) console.log( "Koalas won" ) 
else console.log( "Draw !" )
    //dataBonus2
console.log("\n[dataBonus2] : " )
coreDolphins1  =  97
coreDolphins2  =  112
scoreDolphins3  =  101
scoreKoaIas1  =  109
scoreKoalas2  =  95
scoreKoalas3  =  106
AvgDolphins  = calAverageScore(scoreDolphins1, scoreDolphins2, scoreDolphins3)
console.log("AVG Score Of Dolphins:  "  + AvgDolphins)
AvgKoalas  = calAverageScore(scoreKoalas1, scoreKoalas2, scoreKoalas3) 
console.log("AVG  Score Of  Koalas:  "  + AvgKoalas)
      //d
console.log( "\nWith new Rule 2 : " ) 
if ((AvgDolphins  >  AvgKoalas) && (AvgDolphins  >=  100)) console.log("Dolphins won") 
else if ((AvgKoalas  >  AvgDolphins) && (AvgKoalas  >=  100)) console.log( "Koalas won" ) 
else if ((AvgDolphins  == AvgKoalas) && (AvgDolphins  >=  100)) console.log( "Draw!" )
else console.log("No one get trophy!")

//c5
console.log("\n[Cau 5] : " )
console.log(" [data1] : ")
scoreDolphins1  =  44
scoreDolphins2  =  23
scoreDolphins3  =  71
scoreKoalas1  =  65
scoreKoalas2  =  54
scoreKoalas3  =  49
function checkWinner(dolphinsScore, koalasScore){
    if(dolphinsScore>=(koalasScore*2)) 
    console.log("Dolphins win " + dolphinsScore + " Vs " + koalasScore)
    else if (koalasScore>=(dolphinsScore*2))
    console.log("Koalas win " + koalasScore + " Vs " + dolphinsScore)
    else console.log("No one wins")
}
AvgDolphins  = calAverageScore(scoreDolphins1, scoreDolphins2, scoreDolphins3)
console.log("AVG Score Of Dolphins:  "  + AvgDolphins)
AvgKoalas  = calAverageScore(scoreKoalas1, scoreKoalas2, scoreKoalas3) 
console.log("AVG  Score Of  Koalas:  "  + AvgKoalas)
checkWinner(AvgDolphins, AvgKoalas)

console.log(" \n[data2] : ")
scoreDolphins1  =  85
scoreDolphins2  =  54
scoreDolphins3  = 41
scoreKoalas1  =  23
scoreKoalas2  =  34
scoreKoalas3  =  27

AvgDolphins  = calAverageScore(scoreDolphins1, scoreDolphins2, scoreDolphins3)
console.log("AVG Score Of Dolphins:  "  + AvgDolphins)
AvgKoalas  = calAverageScore(scoreKoalas1, scoreKoalas2, scoreKoalas3) 
console.log("AVG  Score Of  Koalas:  "  + AvgKoalas)
checkWinner(AvgDolphins, AvgKoalas)
