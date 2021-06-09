
const daysBetweenDates = (date1, date2) => {

    let daysDif = (new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24)
    return Math.ceil(Math.abs(daysDif))

}