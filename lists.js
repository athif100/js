let snack=["oreo","soda","banana"]
console.log(snack)
//getting single
console.log(snack[0])
//getting the length
console.log(snack.length)
// adding an item
snack.push("Burger")
console.log(snack)
// deleting an item from a list
snack.splice(0,1)
console.log(snack)
// going through items in a list
for(let num=0;num<3;num+=1){
    console.log(snack[num])
}
