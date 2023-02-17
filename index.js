
let count = 1
document.getElementById('first-card').addEventListener('click',function(){
    const productName = getInnerText('firs-name')
    const productPrice = getInnerText('firs-price');
    const productQuantity  = getInnerText('firs-quanity');
    console.log(productName,productPrice,productQuantity);
    const total = parseInt(productPrice) * parseInt(productQuantity)
   setData(productName,productPrice,productQuantity,total)
   count += 1
   disableBtn("first-card")
})


document.getElementById('secand-card').addEventListener('click',function(e){
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    const productName = e.target.parentNode.parentNode.children[0].innerText
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText

    const sumTotal = parseInt(productPrice) + parseInt(productQuantity)

    setData(productName,productPrice,productQuantity,sumTotal)
    console.log(productName,productPrice,productQuantity);

    count += 1;
})

document.getElementById('third-card').addEventListener('click',function(){
    const productName = getInnerText('third-title');
    const productPrice = getInnerText('third-price');
    const productQuantity  = getInnerText('third-qunaiity');

    const total = parseInt(productPrice) - parseInt(productQuantity)
   setData(productName,productPrice,productQuantity,total)
   count += 1
})
document.getElementById('fourth-card').addEventListener('click',function(){
    const productName = getInnerText('fourth-name');
    const productPrice = getInnerText('fourth-price');
    const productQuantity  = getInnerText('fourth-qunaiity');

    const total = parseInt(productPrice) - parseInt(productQuantity)
   setData(productName,productPrice,productQuantity,total)
   count += 1
})

document.getElementById('last-card').addEventListener('click',function(){
    const productName = getInnerText('last-name')
    const productPrce =  document.getElementById('price').value;
    const productQuantity =  document.getElementById('quantity').value;

    const total = parseFloat(productPrce) / parseFloat(productQuantity)

    setData(productName,productPrce,productQuantity,total)
    disableBtn('last-card')
})


function getInnerText(id) {
    const data = document.getElementById(id).innerText;
    return data;
   
}


function setData(pOfName,pOftPrice,pOfQuantity,pOftotal) {
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${count}</td>
        <td>${pOfName}</td>
        <td>${pOftPrice}</td>
        <td>${pOfQuantity}</td>
        <td>${pOftotal}</td>
    `;

    tbody.appendChild(tr)
}

function disableBtn(id) {
    document.getElementById(id).setAttribute("disable",true)
}