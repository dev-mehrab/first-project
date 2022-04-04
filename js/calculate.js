document.querySelector("#cal").addEventListener("click", (e)=>{
e.preventDefault();

const a = document.querySelector("#product_pirce").value;
const product_pirce = parseFloat(a);

const b = document.querySelector("#dicount_type").value;

const c = document.querySelector("#diacount_amount").value;
const diacount_amount = parseFloat(c);


//const total_amount = parseFloat(d);

if (b == "parsentage"){
    finlPay= product_pirce - (product_pirce * diacount_amount /100);
    diacount_payment= product_pirce * diacount_amount /100;
     document.querySelector("#total_amount").value = finlPay.toFixed(2);
     document.querySelector("#parsentage_amount").value= diacount_payment.toFixed(2);

}
else if(b == "flat"){
    finlPay2 = product_pirce - diacount_amount;
    document.querySelector("#total_amount").value = finlPay2.toFixed(2);

}






})

document.querySelector("#dicount_type").addEventListener("change", function () {
    const dicount_type = document.querySelector("#dicount_type").value;
    if(dicount_type =="parsentage"){
        const parsentage_amount_row =document.querySelector("#parsentage_amount_row");
        parsentage_amount_row.classList.remove("d-none");

        

        
    }
    else{
        parsentage_amount_row.classList.add("d-none");
    }
})

document.querySelector("#reset").addEventListener("click", (reset)=>{
    reset.preventDefault();
    // alert("wello");

    document.querySelector("#product_pirce").value = " ";
    document.querySelector("#dicount_type option:fiest" ).reset();
    document.querySelector("#diacount_amount").value =" ";
    document.querySelector("#total_amount  ").value = " ";





})