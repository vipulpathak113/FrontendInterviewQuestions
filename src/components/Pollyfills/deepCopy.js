const deepCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const newObj = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        newObj[key] = deepCopy(obj[key]);
    }

    return newObj;
}