let txt=document.getElementById("txt")
let upper=document.getElementById("Uppercase")
let lower=document.getElementById("Lowercase")
let capitalize=document.getElementById("CapitalizedCase")
let alternating=document.getElementById("alternatingcase")
let inverse=document.getElementById("inversecase")
let download=document.getElementById("downloadtext")
let copy=document.getElementById("CopytoClipboard")
let clear=document.getElementById("Clear")
let count=document.getElementById("counter")

upper.addEventListener("click",function(){
    let areaval=txt.value
    areaval=areaval.toUpperCase()
    txt.value=areaval
}
)

lower.addEventListener("click",function(){
    let areaval=txt.value
    areaval=areaval.toLowerCase()
    txt.value=areaval
})

capitalize.addEventListener("click",function(){
    let areaval=txt.value
      let result=areaval.split(" ")

      let str=""
    result.forEach(function(curVal){
         str += curVal.charAt(0).toUpperCase()+curVal.slice(1) + " "
         
    })
    txt.value=str
})

alternating.addEventListener("click" , function(){
    let areaval=txt.value;
 
    let str=''
    for(let i=0; i<areaval.length; i++ ){
        // console.log(areaval[i])
        if(i%2===0){
         str +=areaval[i].toUpperCase()
         console.log(i)
        }else{
            str +=areaval[i].toLowerCase()

        }
    }

txt.value=str
    
})

inverse.addEventListener("click" , function(){
    let areaval=txt.value;
 
    let str=''
    for(let i=0; i<areaval.length; i++ ){
        // console.log(areaval[i])
        if(i%2!==0){
         str +=areaval[i].toUpperCase()
         console.log(i)
        }else{
            str +=areaval[i].toLowerCase()

        }
    }

    txt.value=str
    
})

function downloaded(filename, textInput) {

    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

download.addEventListener("click",function(){

    areaval=txt.value;

    downloaded("myText.txt",areaval)
    
})


copy.addEventListener("click",function(){

    navigator.clipboard.writeText(txt.value)
    alert("Copied Successfully : " + txt.value)

})



txt.addEventListener("keyup",function(e){

    // console.log(dafdklf.target.value.length)
    count.textContent=e.target.value.length
})

clear.addEventListener("click",()=>{
    txt.value = "";
    count.textContent=0;
})










