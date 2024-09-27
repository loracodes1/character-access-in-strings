//ways of accessing a particilar character in a string
//1.charAt()
"loracodes".charAt(1)
console.log("loracodes".charAt(1))
//it will output o because indexes starts at 0,1,2 and so on

// the above can also be written by first declaring the name
const name ="loracodes";
console.log(`${name.charAt(2)}`)
//it will output r

//2.The other way is to treat the string as an array-like object
'Regina'[2]
console.log('Regina'[2])
//it will output g

const sister="Regina"
console.log(`${sister[4]}`)
//the output will be n
