const isNotNan = (x: number)=> {
    if (isNaN(x)) 
        throw new Error("should be number");
    return true;
}

export default isNotNan;