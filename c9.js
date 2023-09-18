console.log("[Data 1] : ")

function printForecast(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + "oC in " + (i + 1) + " days")
    }
}
printForecast(arr = [17, 21, 23])
console.log("\n[Data 2] : ")
printForecast(arr = [12, 5, -5, 0, 4])