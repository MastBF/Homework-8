function ShiritoriChecker(arr) {
    let array = []
    if(arr.length === 1) return true    
 
    for (let i = 0;i < arr.length - 1;i++) {
     if(arr[i][arr[i].length - 1] === arr[i + 1][0] 
        && arr.slice(0,i).includes(arr[i + 1]) === false)  
     array.push(arr[i])
    }
    if(array.length === arr.length - 1) return true
    return false
 }
 
 let arr = ["word", "dowry", "yodel", "leader", "righteous", "serpent"];
 
 
 console.log(ShiritoriChecker(arr))