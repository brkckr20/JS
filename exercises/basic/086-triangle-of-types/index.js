var typeOfTriange = function (num) {
    if (num > 0 && num <= 90) {
        return "".concat(num, " a\u00E7\u0131s\u0131 dar a\u00E7\u0131d\u0131r");
    }
    if (num === 90) {
        return "".concat(num, " a\u00E7\u0131s\u0131 dik a\u00E7\u0131d\u0131r");
    }
    if (num > 90 && num < 180) {
        return "".concat(num, " a\u00E7\u0131s\u0131 geni\u015F a\u00E7\u0131d\u0131r");
    }
    if (num > 90 && num < 180) {
        return "".concat(num, " a\u00E7\u0131s\u0131 d\u00FCz a\u00E7\u0131d\u0131r");
    }
};
console.log(typeOfTriange(152));
console.log(typeOfTriange(1));
