const PI = 3.14;

const yaricap = process.argv.slice(2)*1;

console.log(yaricap);


const areaCircle = (yaricap) => {
    return yaricap*yaricap*PI;
    
}
console.log(areaCircle(yaricap));



