let timeOptions: Intl.DateTimeFormatOptions = {
    hour12: false
}

export const formattedDateTime = () => new Date().toLocaleString([], timeOptions); 
