// map()
// map returns a new array after performing operation on each array element
const a = [6, 7, 1, 4, 5, 0]
var ans = a.map((value, index, array)=>{
    console.log(value, index, array)
    return index+10;
})
console.log("final array of using map => ");
console.log(ans)


// filter()
// filter returns a new array after filtering or test_case_pass elements of old array
const a1 = [6, 7, 1, 4, 5, 0]
var ans1 = a1.filter((value, index, array)=>{
    return value < 5;
})
console.log("final array of using filter => ");
console.log(ans1)


// reduce ()
// reduce have two arguments on inner function of it, i) accumulatot(acc) ii) current value. in starting acc is 0, if we set it then after each element of array=> current value it makes an operation between acc and current value and result store in acc again, so techically it is reducing 1 element of array one bey one with the new result that store in acc 

const a2 = [6, 7, 1, 4, 5, 0]
var ans2 = a2.reduce((acc, curr)=>{       // <--same as-->      var ans2 = a2.reduce((acc, curr)=> acc + curr)
    acc = acc + curr 
    return acc                           
}, 0)
console.log("final array of using reduce => ");
console.log(ans2)

// example 2

const a3 = [
    {name : "Ruturaj", surname : "Gaikwad", age : 27},
    {name : "Chubmann", surname : "Gill", age : 24},
    {name : "Sky", surname : "yadav", age : 31},
    {name : "Yashivi", surname : "Jaiswal", age : 24}
]
var ans3 = a3.reduce((acc, curr)=>{
    if(acc[curr.age]) // if it is not present
        acc[curr.age] += acc[curr.age];
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {})
console.log(ans3);
