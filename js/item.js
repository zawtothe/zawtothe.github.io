const ItemObj1 = {
    itemName : "Adidas Foam Cleaner",
    Upirce : 45,
}
const ItemObj2 = {
    itemName : "Orange-Lobster",
    Upirce : 20,
}
const ItemObj3 = {
    itemName : "Socks",
    Upirce : 15,
}
const ItemObj4 = {
    itemName : "Keychains",
    Upirce : 9.99,
}
const ItemObj5 = {
    itemName : "NB 550 Vintage Indigo",
    Upirce : 110,
}
const ItemObj6 = {
    itemName : "Sneaker Cases",
    Upirce : 45,
}
const ItemObj7 = {
    itemName : "Pins & Badges",
    Upirce : 9.99,
}
const ItemObj8 = {
    itemName : "Shoe-laces",
    Upirce : 22,
}
const ItemObj9 = {
    itemName : "Stussy X Converse",
    Upirce : 120,
}

const ItemObjarr = [
    ItemObj1, ItemObj2 , ItemObj3 , ItemObj4 , ItemObj5, ItemObj6 , ItemObj7 , ItemObj8 , ItemObj9
]

const orderarr = [];

function Getitem(x){
    let temq = document.getElementById("quantity"+x)
    let temqVal = parseInt(temq.value);

    let temp = (ItemObjarr[x-1].Upirce * temqVal).toFixed(2)
    
    if(temqVal > 0 ){
        const orderobj = {
            orderitem : ItemObjarr[x-1].itemName,
            Upirce : ItemObjarr[x-1].Upirce.toFixed(2),
            qty : temqVal,
            total : temp,
        }
        let notfound = true;
    
        if(orderarr.length > 0){
            orderarr.forEach((element,i) => {
                // find old order
                if(element.orderitem == orderobj.orderitem){
                    // update new order
                    orderarr[i] = orderobj;
                    notfound = false;
                }
            });
    
            if(notfound){
                orderarr.push(orderobj);
            }
        }
        else{
            orderarr.push(orderobj);
        }
    }
    else{
        window.alert("Item unite must be greater than 0")
    }
    
}







function ordershow(){
    const outputitem = document.getElementById("Item-List");
    const outTotal = document.getElementById("totalprice")

    if(orderarr.length > 0 ){
        if(outputitem.childElementCount == 0 ){
            outputinvoice(outputitem,outTotal);
        }
        else{
            outputitem.innerHTML = '';
            outTotal.innerHTML = '';
            outputinvoice(outputitem,outTotal);
        }
    }
    else(
        window.alert("You are no item for invoice")
    )

    console.log(orderarr);
}


// for qty btn


    var quantitiy=0;
function Increment(e){
    let current = document.getElementById("quantity"+e)
    let temval = parseInt(current.value);

    current.value = temval +1;
}


function Decrement(e){
    let current = document.getElementById("quantity"+e)
    let temval = parseInt(current.value);

    if(temval>0){
        current.value = temval -1;
    }
}

function outputinvoice(otitem,ottotal){
    let tempAlltotal = 0;           
    orderarr.forEach((element,i) => {
        otitem.innerHTML += `<tr >
                                    <td style="color: #ff4a17 !important;"  scope="row" class=" fw-bold">${i+1}</td>
                                    <td style="color: #ff4a17 !important;"  class="text-start fw-bold">${element.orderitem}</td>
                                    <td style="color: #ff4a17 !important;" class="text-end fw-bold" >$ ${element.Upirce} </td>
                                    <td style="color: #ff4a17 !important;" class="text-end fw-bold" >${element.qty}</td>
                                    <td style="color: #ff4a17 !important;" class="text-end fw-bold" >$ ${element.total}</td>                        
                                </tr>`
        tempAlltotal +=  parseFloat(element.total);
    });
    // console.log(tempAlltotal);
        ottotal.innerHTML = `
                            <tr>
                                <td style="color: #ff4a17 !important;"  scope="row" colspan="4" class="fw-bold">Total</td>
                                <td style="color: #ff4a17 !important;" class="text-end fw-bold" >$ ${tempAlltotal.toFixed(2)} </td>  
                            </tr>`
}

   