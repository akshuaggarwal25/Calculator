var ar = [];
document.addEventListener('keyup', function(event){
    var kc = event.keyCode;
    
    var vali = /^[0-9/%*+.-]$/;
    
    //var lastvalue=ar[ar.length -1];
    //var slastvalue=ar[ar.length -2];
    if(ar.length==0){
        var opera =/^[/*+]$/;
        if(opera.test(event.key)){
            alert("Please firstly don't use an operator");
        }
        else{
            if (vali.test(event.key)) {
                ar.push(event.key);
                let previous = document.getElementById('calu').innerHTML;
                document.getElementById('calu').innerHTML = previous + event.key;
                document.getElementById('res').innerHTML = eval(ar.join(""));
            }
            
            else if (kc == 8) {//for backspace 
                
                const arrString = document.getElementById("calu").innerText.split("");
                alert(arrString);
                arrString.splice(arrString.length - 1, arrString.length);
                
                document.getElementById("calu").innerText = arrString.join("");
                
                if (arrString.length <= 0) {
                    
                    ar.splice(0, ar.length);
                    document.getElementById('res').innerText = ar.join("");
                }
            }
            else if(kc==13){ //for enter
                let res1 = document.getElementById('res').innerHTML;
                let calu1 = document.getElementById('calu').innerHTML=" ";
                let forcss = document.getElementById('calu').style;
                forcss.fontSize = "40px";
               
                document.getElementById('res').innerHTML = calu1;
                document.getElementById('calu').innerHTML = res1;
               
            }
            else if(kc=='Shift'){
                // let previous = document.getElementById('calu').innerHTML;
                // document.getElementById('calu').innerHTML = previous + event.key;
                // document.getElementById('res').innerHTML = eval(ar.join(""));
                alert("esffgdgfgdg");
            }
        }
    }else{
        // if(event.key=='Shift' && event.key==187){
        // console.log("erwferteiurhewruiwerhuewirhweirw") 
        // }
        // else{
        // }
        var opera1 =/^[/*+%-.]$/;
        if(opera1.test(ar[ar.length-1])){

            if(!(opera1.test(event.key))){
                
                ar.push(event.key.replace("Shift",""));
                //console.log("wreewrwrwwrwerwerwr",event.key)
                let previous = document.getElementById('calu').innerHTML;
                console.log("ffffffffffffffffffffffffffff",previous)
                document.getElementById('calu').innerHTML = previous + event.key.replace("Shift","");
                document.getElementById('res').innerHTML = eval(ar.join(""));
               
            }else{
                ar[ar.length-1] = event.key;
                let previous = document.getElementById('calu').innerHTML;
                previous = previous.replace(previous[previous.length-1], event.key);
                document.getElementById('calu').innerHTML = previous;
            }
        }else{
      //  let valucal=document.getElementById('calu').innerHTML;
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
        else if(kc==13){//for enter key
            let res1 = document.getElementById('res').innerHTML;
            let calu1 = document.getElementById('calu').innerHTML=" ";
            let forcss = document.getElementById('calu').style;
            forcss.fontSize = "40px";
           
          document.getElementById('res').innerHTML = calu1;
            document.getElementById('calu').innerHTML = res1;
           
        }
    
        else if(kc==187){
            // let previous = document.getElementById('calu').innerHTML;
            // document.getElementById('calu').innerHTML = previous + event.key;
            // document.getElementById('res').innerHTML = eval(ar.join(""));
            alert();
        }
    }
        
    }
});
var res2 = "";
function container(val) {
    if (val.value == "=") {
        
        let res2 = document.getElementById('res').innerHTML;
        let calu2 = document.getElementById('calu').innerHTML=" ";
        let forcss1 = document.getElementById('calu').style;
        forcss1.fontSize = "40px";
       
        document.getElementById('res').innerHTML = calu2;
        document.getElementById('calu').innerHTML = res2;
    } else {
        var opera1 =/^[/*+%-.]$/;
        if(opera1.test(res2.slice(-1))){
            if(!(opera1.test(val.value))){
				//console.log("operand")
                se = val.value;
                let newval = document.getElementById('calu').innerHTML;
                res2 = document.getElementById('calu').innerHTML = newval + se;
			   // console.log("==============>"+eval(res2));
			    document.getElementById('res').innerHTML = eval(res2);
			}else{
				  //console.log(res2[res2.length-1])
				  res2 = res2.replace(res2[res2.length-1], val.value);
				  document.getElementById('calu').innerHTML = res2;
				  //console.log("Last operator is======>>>"+res2[res2.length-1]+"index=>"+res2.length+"  should be replace with ======>"+val.value);
				  //res2[res2.length] = val.value;
			}
         } else{
			// console.log("operand")
             se = val.value;
             let newval = document.getElementById('calu').innerHTML;
             res2 = document.getElementById('calu').innerHTML = newval + se;
			// console.log("==============>"+eval(res2));
			 document.getElementById('res').innerHTML = eval(res2);
         }
        
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

//console.log('operator');
            //alert(typeof(res2));
            //var new1 = res2.fill(replacevalue, -1);
            //document.getElementById('res').innerHTML =new1;
		/*	 else{
			 console.log("operand")
             se = val.value;
             let newval = document.getElementById('calu').innerHTML;
             res2 = document.getElementById('calu').innerHTML = newval + se;
			 console.log("==============>"+eval(res2));
			 document.getElementById('res').innerHTML = eval(res2);
         }//ek min */