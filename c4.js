//a
console.log( "[data1] : " )
let bill  =  275

function calTip(totalBill) {

    return  bill  >=  50  &&  bill <= 300 ? bill * (15/100): bill *(20 / 100)

}
let tip  =  calTip(bill) 
console.log(tip) 

     //b
let totalValue  =  bill  + tip
console.log("The bill was: "  +  bill  +  ", The tip was: "  +  tip  +  "  The totalValue was:  "  + totalValue)

//data2
console.log( "\n[data2]: " )
bill  =  40
tip  =  calTip(bill)
console.log(tip) 
totalValue =bill + tip
console.log("The bill was: "  +  bill  + ", The tip was:  "  +  tip  + ", The totalValue  was:  "  + totalValue)

//data3
console.log( "\n[data3] : " ) 
bill  =  430
tip =   calTip(bill)
console.log(tip) 
totalValue =bill  +  tip
console.log("The bill was: "  +  bill  + ", The tip was:  "  +  tip  + ", The totalValue  was:  "  + totalValue)