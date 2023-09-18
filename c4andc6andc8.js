//a
console.log("[data1] : ")
let bill = 275

function calTip(totalBill) {

    return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100)

}
let tip = calTip(bill)
console.log(tip)

//b
let totalValue = bill + tip
console.log("The bill was: " + bill + ", The tip was: " + tip + "  The totalValue was:  " + totalValue)

//data2
console.log("\n[data2]: ")
bill = 40
tip = calTip(bill)
console.log(tip)
totalValue = bill + tip
console.log("The bill was: " + bill + ", The tip was:  " + tip + ", The totalValue  was:  " + totalValue)

//data3
console.log("\n[data3] : ")
bill = 430
tip = calTip(bill)
console.log(tip)
totalValue = bill + tip
console.log("The bill was: " + bill + ", The tip was:  " + tip + ", The totalValue  was:  " + totalValue)

//c6
//a 
console.log("\n[Cau 3] : ")
console.log(calTip(bill = 100)) //chi de 100 thi no khong nhan gia tri do la bill ma se giu gia tri bill cu
    //b
console.log("\n[Cau 3bc] : ")
let bills = [125, 555, 44]
for (let i = 0; i < 3; i++) {
    console.log(calTip(bill = bills[i]))
}
//c
console.log("\n[Cau 3d] : ")
totalBills = new Array()
for (let i = 0; i < 3; i++) {
    totalBills[i] = bills[i] + calTip(bill = bills[i])
    console.log(totalBills[i])
}

//c8
console.log("\n[Cau 8] : ")
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = new Array()
let total = new Array()

for (let i = 0; i < bills.length; i++) {
    tips[i] = calTip(bill = bills[i])
    total[i] = bills[i] + tips[i]
    console.log(total[i])
}

function caclAverage(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length

}
console.log("[Cacl Average] : " + caclAverage(arr = total))