export default function memoize(fn) {
    const prevCall = {
        args: []
    };
    return function (...args) {
        let equal = true;
        args.forEach((el, index) => {
            equal = equal && prevCall.args[index] === el
        });
        if (!equal) {
            prevCall.args = args;
            prevCall.result = fn(...args)
        }
        return prevCall.result;
    }

};
