const getArrayFromQueryString = (string) => {

    if (typeof string === 'string') {
        return string ? decodeURI(string).split('%2C') : []
    } else {
        return []
    }
};

export default getArrayFromQueryString;
