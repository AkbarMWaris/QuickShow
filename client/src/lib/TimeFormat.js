const TimeFormat = (minutes) => {
    const hour = Math.floor(minutes / 60);
    const minuteRemain = (minutes % 60);
    return `${hour}h  ${minuteRemain}m`
}

export default TimeFormat;