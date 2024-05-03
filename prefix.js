function prefix(arr) {
    let a=[],s;
    for (let i = 0; i < arr.length; i++) {
        // s=i.match([/'ca'/gi])
        
        if (arr[i]==arr[i].match([/'ca'/gi])){
           a.push(i);
        }
    }
    console.log(a);

}
prefix(['cat','car','fear','center']);