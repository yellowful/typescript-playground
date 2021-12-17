
//private and public

class SeaOtter {
  // scream:string = 'eee~~~~';
  // public scream:string = 'eee~~~~';
  private scream:string = 'eee~~~~';
  constructor(sound:string){
    this.scream = sound;
  }
  laugh(): string {
    return this.scream;
  }
}

const joey:SeaOtter = new SeaOtter('haha');
console.log('laugh',joey.laugh());
// console.log('scream',joey.scream); //　因為是private，所以無法取用


// union type

let size: string | number;
size = 'large';
console.log('string',size);
size = 100;
console.log('number',size);

// 自動給定type

let x = 100;
// x = '100'; //　會報錯，因為x已經自動被給定成number