var symbols = ["!","@","#","$","%","^","&","*","(",")","/",",",".",":",";","{","[","]","}"];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var sl = symbols.length;
var ll = letters.length;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function strong(btn, len) {
    var generated = "";
    for (let i = 0; i < len; i++) {
        var symbol = symbols[getRandom(0, sl)];
        var letter = letters[getRandom(0, ll)];
        var sorl = getRandom(1, 2);
        if (sorl === 1) {
            generated += symbol;
        }
        if (sorl === 2) {
            generated += letter;
        }
    }
    return generated;
}
function reallystrong(btn,len){
    var generated = "";
    for (let i = 0; i < len; i++) {
        var symbol = symbols[getRandom(0, sl)];
        var letter = letters[getRandom(0, ll)];
        var sorl = getRandom(1, 3);
        if (sorl === 1) {
            generated += symbol;
        }
        if (sorl === 2) {
            generated += letter.toUpperCase();
        }
        if(sorl === 3){
            generated += letter;
        }
    }
    return generated;
}
var generate = {
    run: function(type, len, btn) {
        if (type === "strong" && type !== "") {
            if (len === "" || len === 0) {
                return 1;
            } else {
                return reallystrong(btn, len);
            }
        }
        if (type === "reallystrong" && type !== "") {
            if (len === "" || len === 0) {
                return 1;
            } else {
                return strong(btn, len);
            }
        }
    }
};