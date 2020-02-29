
let httpRequest= new XMLHttpRequest();
console.log(httpRequest);
httpRequest.onreadystatechange= function(){
                if(httpRequest.readyState === 4){
                    if(httpRequest.status === 200){
                        console.log(httpRequest.status)
                        console.log(httpRequest.responseText);
                    }
                }
        }
httpRequest.open("GET", "https://blockchain.info/ticker");

let requestHandler= function(){
                if(httpRequest.readyState === 4){
                    if(httpRequest.status === 200){
                        console.log(httpRequest.status)
                        console.log(httpRequest.responseText);
                    }
                }
        }

