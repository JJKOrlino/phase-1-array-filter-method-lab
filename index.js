function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase() == str.toLowerCase(0))
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => driver.startsWith(str))
}

function matchName(drivers, str) {
    return drivers.filter(driver => driver.name === str)
}