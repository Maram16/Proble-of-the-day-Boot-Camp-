const arr = [1, 4, 5, 2, 7, 8, 3];

const getnum = (a, b) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            console.log("yes");
            return; 
        }
    }
    console.log("no"); 
}

getnum(2, 5); 

