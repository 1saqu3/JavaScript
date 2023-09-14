function adi(){
    let n1 = Number(window.prompt ("Digite o primeiro número:"))
    let n2 = Number(window.prompt ("Digite o segundo número:"))

    let res = document.getElementById("resultado")
     n3 = n1+n2
    res.innerHTML = `<p> O resultado  da soma é ${n3}`


}
