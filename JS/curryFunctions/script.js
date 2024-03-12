function sum(a){
    if(!a) return 0;
    let ans = a;
    function smallerSum(b){
        if(!b) return ans;
        ans += b;
        return smallerSum;
    }
    return smallerSum;
}

console.log(sum(10)(20)());