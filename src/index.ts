const fruits: string[] = ['apple', 'mango', 'banana']
const corners: Array<string> = ['left', 'top', 'bottom', 'right']

interface Country {
    country: string
}

function createObjects<T extends Country, R extends object>(firstObj: T, secondObj: R): T & R {
    return { ...firstObj, ...secondObj }
}

const dog = createObjects({ country: 'New Zealand' }, { weight: 12 });
const notebook = createObjects({ country: 'Chili' }, { os: 'MacOS' });

const calc = createObjects({ country: 'Japan', area: 3000 }, { population: 12000 });

console.log(dog);
console.log(notebook);
console.log(calc);
