function clone(obj) {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (obj === null || typeof obj !== "object" ) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (let attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

//Handle the 3 simple types, and null or undefined :
// null, undefined, number, string, boolean
const objNull = null;
const objUndef = undefined;
const objNum = 8;
const objStr = 'string';
const objBool = true;

console.log(clone(objNull)); // null
console.log(clone(objUndef)); //undefined
console.log(clone(objNum)); // 8
console.log(clone(objStr)); // string
console.log(clone(objBool)); // true

// Handle Date
