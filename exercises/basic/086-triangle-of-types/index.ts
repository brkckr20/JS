const typeOfTriange = (num:number) : string | undefined => {
    if (num > 0 && num<=90) {
        return `${num} açısı dar açıdır`
    }
    if (num===90) {
        return `${num} açısı dik açıdır`;
    }
    if (num>90 && num <180) {
        return `${num} açısı geniş açıdır`;
    }
    if (num>90 && num <180) {
        return `${num} açısı düz açıdır`;
    }
}

console.log(typeOfTriange(152));
console.log(typeOfTriange(1));