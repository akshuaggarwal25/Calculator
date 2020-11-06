var ar = [];
document.addEventListener('keyup', function (event) {
    var kc = event.keyCode;
    var vali = /^[0-9/%*+.-]$/;
    
    if(ar.length==0){
        var opera =/^[/*+]$/;
        if(opera.test(event.key)){
            alert("Please firstly don't use operator");
        }
            
        else{
            if (vali.test(event.key)) {
                ar.push(event.key);
                
                let previous = document.getElementById('calu').innerHTML;
                document.getElementById('calu').innerHTML = previous + event.key;
                document.getElementById('res').innerHTML = eval(ar.join(""));
            }
            
            else if (kc == 8) {
                
                const arrString = document.getElementById("calu").innerText.split("");
                alert(arrString);
                arrString.splice(arrString.length - 1, arrString.length);
                
                document.getElementById("calu").innerText = arrString.join("");
                
                if (arrString.length <= 0) {
                    
                    ar.splice(0, ar.length);
                    document.getElementById('res').innerText = ar.join("");
                }
            }
            else if(kc==13){
                let res1 = document.getElementById('res').innerHTML;
                let calu1 = document.getElementById('calu').innerHTML=" ";
                let forcss = document.getElementById('calu').style;
                forcss.fontSize = "40px";
               
                document.getElementById('res').innerHTML = calu1;
                document.getElementById('calu').innerHTML = res1;
            
            }      
            
            
        }
    }else{
        if (vali.test(event.key)) {
            ar.push(event.key);
            
            let previous = document.getElementById('calu').innerHTML;
            document.getElementById('calu').innerHTML = previous + event.key;
            document.getElementById('res').innerHTML = eval(ar.join(""));
        }
        else if (kc == 8) {//for backspace key
            
            const arrString = document.getElementById("calu").innerText.split("");
            //alert(arrString);
            arrString.splice(arrString.length - 1, arrString.length);
            
            document.getElementById("calu").innerText = arrString.join("");
           

            if (arrString.length <= 0) {
                
                ar.splice(0, ar.length);
                document.getElementById('res').innerText = ar.join("");
            }
        }
        else if( kc==13){//for enter key
            let res1 = document.getElementById('res').innerHTML;
            let calu1 = document.getElementById('calu').innerHTML=" ";
            let forcss = document.getElementById('calu').style;
            forcss.fontSize = "40px";
           
          document.getElementById('res').innerHTML = calu1;
            document.getElementById('calu').innerHTML = res1;
        
        }   
    }
});
function container(val) {
    if (val.value == "=") {
        
        let res2 = document.getElementById('res').innerHTML;
        let calu2 = document.getElementById('calu').innerHTML=" ";
        let forcss1 = document.getElementById('calu').style;
        forcss1.fontSize = "40px";
       
        document.getElementById('res').innerHTML = calu2;
        document.getElementById('calu').innerHTML = res2;
    } else {

        se = val.value;
        let newval = document.getElementById('calu').innerHTML;
        res2 = document.getElementById('calu').innerHTML = newval + se;
        // document.getElementById('res').innerHTML = eval(res2);
        
        //var opera1 =/^[0-9]$/;
        var opera1 =/^[/*+]$/;
       console.log("abc -==========> ",opera1.test(res2.slice(-1)));
        // if(opera1.test(res2.slice(-1))){
        //     alert('Numbers');
        // }
        // else{
        //     alert('operend');
        // }

    }
}
function allclear() {
    document.getElementById('res').innerHTML = " ";
    document.getElementById('calu').innerHTML = " ";
    ar.splice(0, ar.length);
    document.getElementById('res').innerText = ar.join("");
}
function clear1() {
    const arrString = document.getElementById("calu").innerText.split("");
        arrString.splice(arrString.length - 1, arrString.length);
        document.getElementById("calu").innerText = arrString.join("");
        if (arrString.length <= 0) {
            ar.splice(0, ar.length);
            document.getElementById('res').innerText = ar.join("");
        }
}