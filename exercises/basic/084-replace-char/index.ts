const replace = (str: string) => {
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i].charCodeAt(0) - 'a'.charCodeAt(0);
        n = (n + 1) % 26; 
        arr[i] = String.fromCharCode(n + 'a'.charCodeAt(0));
    }
    console.log(arr.join(""));
}

replace("deneme")