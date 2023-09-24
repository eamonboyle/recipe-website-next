function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
    const formattedDate = date.toLocaleDateString(undefined, options);
    return formattedDate;
}

function formatMinutesToHours(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
        return `${remainingMinutes} minutes`;
    }

    const formattedTime = `${hours} hours ${remainingMinutes} minutes`;
    return formattedTime;
}

export { formatDate, formatMinutesToHours };