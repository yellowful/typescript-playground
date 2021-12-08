// 雖然numberOne是number而stringOne是string，兩種不同的type仍然可以相加，可見用了typescript之後，javascript仍然是weak type language
// 說明了typescript是讓js變成static type，而不是strong type
var typescriptMagic = function (numberOne, stringOne) {
    console.log('Now, both value,', numberOne, 'and', stringOne, ',are static types.');
    console.log('Now, both value, ' + numberOne + ' and ' + stringOne + ' ,are static types.');
};
typescriptMagic(10, 'ten');
// boolean
var isCool = true;
console.log('BDR is cool rignt? =>', isCool);
// number
var height = 176;
console.log('My height is', height, '.');
// string
var brand = 'Apple';
console.log(brand, 'is one of the bigest tech company in the world.');
// string[]
var faang = ['facebook', 'amazon', 'apple', 'netflix', 'google'];
console.log('FAANG are', faang.reduce(function (acc, item) { return item + ', ' + acc; }, ''));
// Array<string>
var fourSeason = ['spring', 'summer', 'fall', 'winter'];
console.log('four season: ', fourSeason.reduce(function (acc, item) { return item + ', ' + acc; }, ''));
// object
var garfield = {
    name: 'Garfield',
    age: '3',
    weight: '20'
};
console.log('My cat is', garfield);
// null
var renderNull = null;
// undefined
var undefinedValue = undefined;
// Tuple
// 注意和string[]的不同，一個是裡面都是string，一個是裡面可以不同
var snoopy = ['snoopy', 3, 10];
console.log('name:', snoopy[0], 'age:', snoopy[1], 'weight:', snoopy[2]);
// Enum
var Size;
(function (Size) {
    Size[Size["Large"] = 10] = "Large";
    Size[Size["Medium"] = 20] = "Medium";
    Size[Size["Small"] = 30] = "Small";
})(Size || (Size = {}));
;
var sizeName = Size[20];
var sizeNumber = Size.Medium;
console.log(sizeName, ':', sizeNumber);
console.log('Size', Size);
console.log('type of Size:', typeof (Size));
// any
var dontUseAny = function () {
    console.log('要非常小心使用，只用在非常複雜的function，不得已必需用的地方用，否則常用的話，將無法獲得TS的好處，反而遭遇TS需要事先compile的缺點。');
    return ({
        name: 'complex object',
        age: 0,
        weight: 0.5
    });
};
console.log(dontUseAny());
// void
var cPlusPlus = function (word) {
    console.log("I won't return ".concat(word, "!"));
};
cPlusPlus('anything');
var mary = {
    name: 'Mary',
    age: 3,
    weight: 10
};
console.log('mary', mary);
// const fightAnimal = (lion:Jaguar):void => {
var fightAnimal = function (lion) {
    console.log('fight', lion);
};
// const lion = {
var lion = {
    name: 'Leo',
    age: 3,
    weight: 5,
    meow: 'wahhoo'
};
fightAnimal(lion);
var runAnimal = function (largeAnimal) {
    console.log('run', largeAnimal);
};
var john = {
    name: 'John',
    age: 3,
    height: 220,
    male: true
};
runAnimal(john);
