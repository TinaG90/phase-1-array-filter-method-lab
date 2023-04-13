// Code your solution here
function findMatching (array,string){
    return array.filter((driver) =>
        driver.toUpperCase()=== string.toUpperCase());
};

function fuzzyMatch (array, string){
    return array.filter((driver) =>
        driver.slice(0,string.length) === string);
} 
function matchName (obj, string) {
    return obj.filter(driver => driver.name === string)
}
console.log(findMatching())