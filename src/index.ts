const fruits: string[] = ['apple', 'mango', 'banana']
const corners: Array<string> = ['left', 'top', 'bottom', 'right']

function createObjects<T extends object, R extends object>(firstObj: T, secondObj: R): T & R {
    return { ...firstObj, ...secondObj }
}

const dog = createObjects({ name: 'Fido' }, { weight: 12 });
const notebook = createObjects({ brand: 'Apple' }, { os: 'MacOS' });

const calc = createObjects({ country: 'Japan' }, { population: 12000 });

console.log(dog);
console.log(notebook);
console.log(calc);
