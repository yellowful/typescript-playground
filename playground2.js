//private and public
var SeaOtter = /** @class */ (function () {
    function SeaOtter(sound) {
        // scream:string = 'eee~~~~';
        // public scream:string = 'eee~~~~';
        this.scream = 'eee~~~~';
        this.scream = sound;
    }
    SeaOtter.prototype.laugh = function () {
        return this.scream;
    };
    return SeaOtter;
}());
var joey = new SeaOtter('haha');
console.log('laugh', joey.laugh());
// console.log('scream',joey.scream); //　因為是private，所以無法取用
// union type
var size;
size = 'large';
console.log('string', size);
size = 100;
console.log('number', size);
// 自動給定type
var x = 100;
// x = '100'; //　會報錯，因為x已經自動被給定成number
