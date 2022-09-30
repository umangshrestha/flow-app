const isNotNull = (x: string) => {
    if (!x) 
        throw new Error("should not be null");
    return true;
}

export default isNotNull;