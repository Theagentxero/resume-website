const phoneComponents = /[0-9]/g;

function format(input){
    let x = numbersOnly(input);
    if(!x){ return ''; }
    let res = '';
    if(x[0] == 1){
        x.splice(0,1);
        res = '+1 ';
    }
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if(i == 0){
            res += `(${element}`;
        }else if(i == 2){
            res += `${element}) `;
        }else if(i == 5){
            res += `${element}-`;
        }else if(i == 10){
            res += ` ext ${element}`;
        }else{
            res += `${element}`;
        }
    }
    return res;
}

function isValid(input){
    let x = numbersOnly(input);
    if(!x){ return false; }
    if(x[0] == 1){
        x.splice(0,1);
    }
    if(x.length >= 10){
        return true;
    }else{
        return false;
    }
}

function numbersOnly(raw){
    let x = raw.match(phoneComponents);
    return x
}

export default {
    format: format,
    isValid: isValid,
    numbersOnly: numbersOnly
}