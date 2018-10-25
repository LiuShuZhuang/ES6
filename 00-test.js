
function functionFunction(...str) {
    let f = () => {
        return str.join(', ');
    }
    return f;
}       
console.log(functionFunction(1,2,3,4,5)());