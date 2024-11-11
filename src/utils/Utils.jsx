// timeUtils.js

// Function to format time as 12-hour format with AM/PM
export const formatTime = (date) => {
    let hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const period = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12 // Hour '0' should be '12'
    return `${hours}:${minutes} ${period}` // Format to '12:30 PM'
}

// Function to round time to the nearest 30 minutes
export const roundToNearest30Min = (date) => {
    let minutes = date.getMinutes()
    const remainder = minutes % 30
    if (remainder !== 0) {
        date.setMinutes(minutes + (30 - remainder)) // Round up to the nearest 30 minutes
    }
    return date
}

// Function to validate if the time is between 9 AM and 5 PM
export const isValidTime = (time) => {
    const hours = time.getHours()
    return hours >= 9 && hours <= 17 // Ensure time is between 9 AM and 5 PM
}
