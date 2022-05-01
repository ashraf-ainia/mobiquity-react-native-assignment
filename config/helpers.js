export const getTimeFromDate = (date = new Date()) => {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};