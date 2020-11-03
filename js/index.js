// function fordesign(){
//     var design=document.getElementById('calu').style.outline="none";
//     var design=document.getElementById('calu').style.border="none";

// }
var ar = [];

document.addEventListener('keyup', function (event) {
    var kc = event.keyCode;
    var vali = /^[0-9.-]+$/;

    if (vali.test(event.key) || kc == 187 || kc == 56 || kc == 187 || kc == 191 || kc == 53) {

        ar.push(event.key);
        //  console.log(ar);
        let previous = document.getElementById('calu').innerHTML;
        document.getElementById('calu').innerHTML = previous + event.key;
        document.getElementById('res').innerHTML = eval(ar.join(""));
    }
    else if (kc == 8) {
        console.log("backspace ===========> ", event);
        const arrString = document.getElementById("calu").innerText.split("");
        arrString.splice(arrString.length - 1, arrString.length);
        document.getElementById("calu").innerText = arrString.join("");
        if (arrString.length <= 0) {
            ar.splice(0, ar.length);
            document.getElementById('res').innerText = ar.join("");
        }
    }

});

function container(val) {
    se = val.value;
    newval = document.getElementById('calu').innerHTML;
    res = document.getElementById('calu').innerHTML = newval + se;
    document.getElementById('res').innerHTML = eval(res);
}
function allclear() {
    document.getElementById('res').innerHTML = " ";
    document.getElementById('calu').innerHTML = " ";
    ar.splice(0, ar.length);
    document.getElementById('res').innerText = ar.join("");
    //    const arrString1 = document.getElementById("calu").innerText.split("");
    //    arrString1.splice(arrString1.length, arrString1.length);
    //    arrString1.length=" ";
    //    document.getElementById("calu").innerText = arrString1.join("");

    //    const arrString2 = document.getElementById("res").innerText.split("");
    //    arrString2.splice(arrString2.length, arrString2.length);
    //    arrString2.length=" ";
    //    document.getElementById("res").innerText = arrString2.join("");

}
function clear1() {
    const arrString = document.getElementById("calu").innerText.split("");
    arrString.splice(arrString.length - 1, arrString.length);
}