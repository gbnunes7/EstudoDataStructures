const union = (set1,set2) => {
    const unionAb = new Set()
    set1.forEach(value => unionAb.add(value))
    set2.forEach(value => unionAb.add(value))
    return unionAb
}

const intersection = (set1,set2) => {
    const intersectionSet = new Set()
    set1.forEach(value => {
        if(set2.has(value)) {
            intersectionSet.add(value)
        }
    })
    return intersectionSet
}

const difference = (set1,set2) => {
    const differenceSet = new Set() 
    set1.forEach(value => {
        if(!set2.has(value)) {
            differenceSet.add(value)
        }
    })
    return differenceSet
}

const setA = new Set()
setA.add(16)
setA.add(22)
setA.add(31)
setA.add(25)



const setB = new Set()
setB.add(31)
setB.add(25)
setB.add(32)
setB.add(25)

console.log(intersection(setA,setB))
console.log(union(setA,setB))

console.log(difference(setA,setB))


