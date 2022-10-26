const PI = 3.14;



const writeRadius = (yaricap) => {
    const radius = yaricap;
    console.log(`Yarıçap: ${radius}`);
};


const areaCircle = (yaricap) => {
    const area = PI * yaricap * yaricap;
    console.log(`Dairenin alanı: ${area}`);
};



const circleCircumference = (yaricap) => {
    const circum = 2 * PI * yaricap;
    console.log(`Dairenin çevresi: ${circum} ` );
};


module.exports = {
    writeRadius : writeRadius,
    areaCircle : areaCircle,
    circleCircumference : circleCircumference
};