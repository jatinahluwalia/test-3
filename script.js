document.querySelector("#submit").addEventListener("click", (e)=>{
    e.preventDefault()
    const phoneNo = document.querySelector("#phone").value
    console.log(phoneNo)
    if(phoneNo % 3 === 0 && phoneNo % 4 !== 0){
        document.querySelector("#output").value = "Fizz"
    }else if(phoneNo % 3 !== 0 && phoneNo % 4 === 0){
        document.querySelector("#output").value = "Buzz"
    }else if(phoneNo % 3 === 0 && phoneNo % 4 === 0){
        document.querySelector("#output").value = "FizzBuzz"
    }else{
        document.querySelector("#output").value = phoneNo
    }
})