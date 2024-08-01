const marval_heros = ["thor", "spiderman", "ironman"]
const dc_heros = ["batman", "superman", "flash"]

//trying to concatinate both array

// marval_heros.push(dc_heros)

console.log(marval_heros);//now here push fn will take dc_heros as an 1 object

const all_heros = marval_heros.concat(dc_heros)
console.log(all_heros);  //successfully concatenate

//concat using sprade method[...arr1, ...arr2]

const all_new_heros = [...marval_heros, ...dc_heros]
console.log(all_new_heros);

//case 1
const another_arr = [1, 3, 4, [4, 5], 6, [7, 8, [8, 9, 10],11]]
const real_arr = another_arr.flat(Infinity) // array ki depth tk k data ko concat kr k dega
console.log(real_arr);

//convert to array

const arr = "Hitesh"
console.log(Array.isArray(arr))  //false bcz arr is string
console.log(Array.from(arr))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
