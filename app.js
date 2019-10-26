function myfunction1 (elem) {
    console.log("alert")
    alert ("this is an alert")
}

function myfunction2 (elem) {
    console.log("alert")
    alert("this is a double alert")
}

    function myfunction3 (elem) {
        console.log("alert")
        alert("this is a mouse alert")
    }
    
    function sayHi (elem,e) {
        //debugger
        console.log(event.target.value)
        document.getElementById("changed").innerText=event.target.value
    } 


    function sayHi1() {
        console.log(event.target.value)
       document.getElementById("changed").innerText=event.target.value
    }
// function newfun(elem)
// {
//     console.log(elem)
//     elem.innerHTML="changed"
// }
