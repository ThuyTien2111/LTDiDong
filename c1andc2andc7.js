//a
console.log(" [data1] :")
let heightOfMark = 1.69
let massOfMark = 78
let heightOfJohn = 1.95
let massOfJohn = 92
    // b +c/ /
function higherBMI(height1, mass1, height2, mass2) {
    let BMI1 = mass1 / (height1 ** 2)
    let BMI2 = mass2 / (height2 ** 2)
    console.log(BMI1)
    console.log(BMI2)
    console.log(BMI1 > BMI2)
        //c2a
    if (BMI1 > BMI2) console.log("BMI cua Mark cao hon John")
    else console.log("BMI của John cao hơn Mark")
        //c2b
    if (BMI1 > BMI2) console.log("BMI cua Mark(" + BMI1 + ") cao hon John(" + BMI2 + ")")
    else console.log("BMI cua John(" + BMI2 + ") cao hon Mark(" + BMI1 + ")")

}
//data1:
higherBMI(heightOfMark, massOfMark, heightOfJohn, massOfJohn)
    //data2:
console.log("\n[data2] : ")
heightOfMark = 1.88
massOfMark = 95
heightOfJohn = 1.76
massOfJohn = 85
higherBMI(heightOfMark, massOfMark, heightOfJohn, massOfJohn)

//c7
console.log("\n[Cau 7] : ")

function Person(fullName, mass, height) {
    this.fullName = fullName;
    this.mass = mass;
    this.height = height;
    this.calcBMI = function() {
        return this.mass / (this.height ** 2);
    }
    this.toString = function() {
        return this.fullName + ", " + this.height + "m, " + this.mass + "kg";
    }
}

var mark = new Person("Mark Miller", 78, 1.69);
var john = new Person("John Smith", 92, 1.95);

var bmiMark = mark.calcBMI()
var bmiJohn = john.calcBMI()
console.log(mark.toString());
console.log("BMI=" + bmiMark)
console.log(john.toString());
console.log("BMI=" + bmiJohn)
if (bmiMark > bmiJohn) console.log("BMI cua Mark(" + bmiMark + ") cao hon John(" + bmiJohn + ")")
else console.log("BMI cua John(" + bmiJohn + ") cao hon Mark(" + bmiMark + ")")