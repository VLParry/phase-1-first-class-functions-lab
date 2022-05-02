
// const drivers = ['Antonia', 'Nuru', 'Amari', 'Claudia']

// function returnFirstTwoDrivers(drivers) {
//     return drivers.slice(0, 2)
// }

// function returnLastTwoDrivers(drivers) {
//     return drivers.slice(2, 4)
// }

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)

}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2, 4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(fare) {
    return function () {
        return fare * 5
    }
}

function fareDoubler(fare) {
    return (fare) * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

const selectDifferentDrivers = function (drivers, function1) {
    return function1(drivers)
}
