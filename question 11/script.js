const getPalindromicString=(S)=>{

    for (let i = 0 ; i < S.length/2 ; i++)
    {
        if(S[i]!== S[S.length - 1 - i]){
            console.log("Its not a palindromic string")
        }
    }
    console.log("Its palindromic string")
}

 

getPalindromicString('aabbaa')