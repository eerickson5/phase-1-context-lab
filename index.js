/* Your Code Here */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const { all } = require("axios");

// Your code here
function createEmployeeRecord(employeeArray){
    return {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees){
    return employees.map( employee => createEmployeeRecord(employee));
}

function createEventObject(dateStamp, typeOfEvent){
    return {
        type: typeOfEvent,
        hour: parseInt(dateStamp.slice(11, 13) + "00"),
        date: dateStamp.slice(0, 10)
    }
}

function createTimeInEvent(dateStamp) {
    const time =  createEventObject(dateStamp, "TimeIn")
    this.timeInEvents.push(time)
    return this
}

function createTimeOutEvent(dateStamp) {
    const time =  createEventObject(dateStamp, "TimeOut")
    this.timeOutEvents.push(time)
    return this
}

function hoursWorkedOnDate(date){
    //i could write a binary search but i dont feel like it
    const clockIn = this.timeInEvents.find( event => event.date === date)
    const clockOut = this.timeOutEvents.find( event => event.date === date)
    return (clockOut.hour - clockIn.hour)/100
}

function wagesEarnedOnDate(date){
    return (hoursWorkedOnDate.call(this, date) * this.payPerHour);
}

function findEmployeeByFirstName(srcArray, firstName){
   return srcArray.find( employee => employee.firstName === firstName )
}

function calculatePayroll(employees){
    return employees.reduce( (accumulator, employee) => {
        accumulator += allWagesFor.call(employee)
        return accumulator
    }, 0)

    //this.allWagesFor()
}
