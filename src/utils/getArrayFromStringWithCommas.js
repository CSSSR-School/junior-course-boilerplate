const getArrayFromStringWithCommas = (string) => {
    if (typeof string === 'string') {
        return string ? string.split(',') : []
    } else {
        return []
    }
};

export default getArrayFromStringWithCommas;
