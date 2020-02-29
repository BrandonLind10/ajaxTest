
let httpRequest= new XMLHttpRequest();
console.log(httpRequest);
httpRequest.onreadystatechange= requestHandler;

httpRequest.open("GET", "https://blockchain.info/ticker");
httpRequest.send();
console.log(httpRequest.responseText)
let requestHandler= function(){
                if(httpRequest.readyState === 4){
                    if(httpRequest.status === 200){
                        console.log(httpRequest.status)
                        console.log(httpRequest.responseText);
                    }
                }
        }

