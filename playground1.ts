
// 雖然numberOne是number而stringOne是string，兩種不同的type仍然可以相加，可見用了typescript之後，javascript仍然是weak type language
// 說明了typescript是讓js變成static type，而不是strong type
const typescriptMagic = (numberOne: number, stringOne: string):void => {
  console.log('Now, both value,', numberOne, 'and', stringOne, ',are static types.')
  console.log('Now, both value, ' + numberOne + ' and ' + stringOne + ' ,are static types.')
}
typescriptMagic(10,'ten')

// boolean
let isCool: boolean = true;
console.log('BDR is cool rignt? =>', isCool );

// number
const height: number = 176;
console.log('My height is',height,'.');

// string
const brand: string = 'Apple'
console.log(brand,'is one of the bigest tech company in the world.')

// string[]
const faang: string[] = ['facebook','amazon','apple', 'netflix', 'google'];
console.log('FAANG are',faang.reduce((acc,item)=>item+', '+acc,''));

// Array<string>
const fourSeason: Array<string> = ['spring', 'summer', 'fall', 'winter'];
console.log('four season: ', fourSeason.reduce((acc,item)=>item+', '+acc,''));

// object
const garfield: object = {
  name:'Garfield',
  age:'3',
  weight:'20'
}
console.log('My cat is',garfield);

// null
const renderNull: null = null;

// undefined
const undefinedValue: undefined = undefined;

// Tuple
// 注意和string[]的不同，一個是裡面都是string，一個是裡面可以不同
const snoopy: [string, number, number] = ['snoopy', 3, 10];
console.log('name:',snoopy[0],'age:',snoopy[1],'weight:',snoopy[2]);

// Enum
enum Size {Large = 10, Medium = 20, Small = 30};
const sizeName: string = Size[20];
const sizeNumber: number = Size.Medium;
console.log(sizeName,':',sizeNumber);
console.log('Size',Size);
console.log('type of Size:', typeof(Size));

// any
const dontUseAny = ():any => {
  console.log('要非常小心使用，只用在非常複雜的function，不得已必需用的地方用，否則常用的話，將無法獲得TS的好處，反而遭遇TS需要事先compile的缺點。')
  return ({
    name:'complex object',
    age:0,
    weight:0.5
  })
}
console.log(dontUseAny());

// void
const cPlusPlus = (word:string):void => {
  console.log(`I won't return ${word}!`)
}
cPlusPlus('anything');

// never
// const neverFinished = ():never => {
//   throw Error("I won't finish.")
// }
// neverFinished();

// function裡throw Error的話，也符合這幾種type喔
// const returnString = ():string => {
//   throw Error("return string")
// }
// returnString();

// const returnNothing = ():void => {
//   throw Error("return nothing")
// }
// returnNothing();

// interface
interface Jaguar {
  name:string,
  age:number,
  weight:number,
  meow?:string,
}

const mary:Jaguar = {
  name:'Mary',
  age:3,
  weight:10,
}

console.log('mary',mary);
// const fightAnimal = (lion:Jaguar):void => {
const fightAnimal = (lion:{name:string, age:number, weight:number, meow?:string}):void => {
  console.log('fight',lion);
}
// const lion = {
const lion:Jaguar = {
  name:'Leo',
  age:3,
  weight:5,
  meow:'wahhoo',
}
fightAnimal(lion);

// type
type Elephant = {
  name:string,
  age:number,
  height:number,
  male:boolean,
}
const runAnimal = (largeAnimal:Elephant):void => {
  console.log('run', largeAnimal);
}
const john:Elephant = {
  name:'John',
  age:3,
  height:220,
  male:true
}
runAnimal(john);