let isPromoCodeApplied = false;

function priceUpdateFunc(myID, price) {
    const finalAmount = document.getElementById(myID);
    finalAmount.innerText = price;
    totalPrice();
}
function totalPrice() {
    const constPrice = parseInt(document.getElementById('constPriceEl').innerText);
    const memoryPrice = parseInt(document.getElementById('extraMemorycostEl').innerText);
    const storagePrice = parseInt(document.getElementById('extraStoragecostEl').innerText);
    const deliveryPrice = parseInt(document.getElementById('deliverychargeEl').innerText);
    let totalPrice = constPrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('totalPriceEl').innerText = totalPrice;
    document.getElementById('lastTotalEl').innerText = totalPrice;
}
document.getElementById('memory8gbBtn').addEventListener('click', function () {
    priceUpdateFunc('extraMemorycostEl', 0);
})
document.getElementById('memory16gbBtn').addEventListener('click', function () {
    priceUpdateFunc('extraMemorycostEl', 180);
})
document.getElementById('storage256gbBtn').addEventListener('click', function () {
    priceUpdateFunc('extraStoragecostEl', 0);
})
document.getElementById('storage512gbBtn').addEventListener('click', function () {
    priceUpdateFunc('extraStoragecostEl', 100);
})
document.getElementById('storage1tbBtn').addEventListener('click', function () {
    priceUpdateFunc('extraStoragecostEl', 180);
})
document.getElementById('deliveryBtnFree').addEventListener('click', function () {
    priceUpdateFunc('deliverychargeEl', 0);
})
document.getElementById('deliveryBtn20').addEventListener('click', function () {
    priceUpdateFunc('deliverychargeEl', 20);
})
//promo 

document.getElementById('promoBtn').addEventListener('click', function () {
    let promoCode = document.getElementById('promoInput').value;
    if (!isPromoCodeApplied) {
        if (promoCode == 'stevekaku') {
            const totalPrice = parseInt(document.getElementById('totalPriceEl').innerText);
            const newTotalPrice = totalPrice - totalPrice * .2;
            document.getElementById('lastTotalEl').innerText = newTotalPrice;
            isPromoCodeApplied = true
            document.getElementById('promoInput').value = ''
        } else {
            alert("Wrong Promocode!!!!!!!");
            document.getElementById('promoInput').value = ''
        }
    }else{
        alert("Promocode is already applied!!!!!!!")
        document.getElementById('promoInput').value = ''
    }

})
