//The question: user should enter array of numbers and you are giving the number, one of the two numbers
//that equals the sum of the given number.


var arr=[1,2,3,4]
const getNum=(num)=>{
    for (i=0; i<=3; i++){
        for(n=0; n<=3; n++){
            if (arr[i]+arr[n]==num){
                console.log(arr[i]+ "," +arr[n])

            }else{
               continue;
            }
            


        }
    }
}

    getNum(7)
	