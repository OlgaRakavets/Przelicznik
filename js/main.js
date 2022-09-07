
let poPrzecinku=4
function wyliczSztukiPlynu(){
 let towar_1ML=parseFloat(document.getElementsByClassName("plynTowar_1_Ml")[0].value.replace(",", ".")
)
  let towar_1Szt=parseFloat(document.getElementsByClassName("plynTowar_1_Szt")[0].value.replace(",", ".")
)
 let  towar_2Ml=parseFloat(document.getElementsByClassName("plynTowar_2_Ml")[0].value.replace(",", ".")
)
 document.getElementsByClassName("plynTowar_2_Szt")[0].value=((towar_1ML*towar_1Szt)/towar_2Ml).toFixed(poPrzecinku)
}
function wyliczSztukiBlach(){
    let towar_1_dl=parseFloat(document.getElementById("blachaTowar_1_Dl").value.replace(",", ".")
)
    let towar_1_szer=parseFloat(document.getElementById("blachaTowar_1_Szer").value.replace(",", ".")
)
    let towar_1_ilosc=parseFloat(document.getElementById("blachaTowar_1_Ilosc").value)
let towar_2_dl=parseFloat(document.getElementById("blachaTowar_2_Dl").value.replace(",", ".")
)
let towar_2_szer=parseFloat(document.getElementById("blachaTowar_2_Szer").value)
document.getElementById("blachaTowar_2_Ilosc").value=(( towar_1_dl*towar_1_szer*towar_1_ilosc)/(towar_2_dl*towar_2_szer)).toFixed(poPrzecinku)
}

function containerToFixed() {
    poPrzecinku = (parseFloat(document.getElementsByClassName("poPrzecinku")[0].value))
    if (poPrzecinku > 8) {
        poPrzecinku = 8
        document.getElementsByClassName("poPrzecinku")[0].value = 8
    }
    wyliczSztukiBlach()
    wyliczSztukiPlynu()
}