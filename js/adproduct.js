loadproduct();
function loadproduct(){
    let a=localStorage.getItem('productname');
    let b=localStorage.getItem('productpricestring');
    let c=localStorage.getItem('productpricenumber');
    let d=localStorage.getItem('productquantity');
    let e=localStorage.getItem('productimg');

    if(a)
    {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
    }
    else
    {
        localStorage.setItem('productname','[]');
        localStorage.setItem('productpricestring','[]');
        localStorage.setItem('productpricenumber','[]');
        localStorage.setItem('productquantity','[]');
        localStorage.setItem('productimg','[]');
    }
}
function getproduct(){
    var pdn=document.getElementById('product-name').textContent;
    var pdps=document.getElementById('product-price-discount').textContent;
    var pdpn=document.getElementById('product-price-discount').textContent;
    pdpn=parseInt(pdpn);
    var pdq=document.getElementById('product-quantity');
    pdq=parseInt(pdq.value);
    var pdimg=document.getElementById('productimg').src;

    var product=JSON.parse(localStorage.getItem('productname'));
    var pricestring=JSON.parse(localStorage.getItem('productpricestring'));
    var pricenumber=JSON.parse(localStorage.getItem('productpricenumber'));
    var quantity=JSON.parse(localStorage.getItem('productquantity'));
    var img=JSON.parse(localStorage.getItem('productimg'));

    var count=0;
    console.log(quantity);
    if (pdq > 0) {
      for (var i = 0; i < product.length; i++) {
        if (product[i] === pdn) {
          quantity[i] += pdq;
          localStorage.setItem("productquantity", JSON.stringify(quantity));
          break;
        }
        else{
            count++;
        }
      }
    }
    if (count===product.length && pdq >0)
    {
        product.push(pdn);
        pricestring.push(pdps);
        pricenumber.push(pdpn);
        quantity.push(pdq);
        img.push(pdimg);

        localStorage.setItem("productname", JSON.stringify(product));
        localStorage.setItem("productpricestring", JSON.stringify(pricestring));
        localStorage.setItem("productpricenumber", JSON.stringify(pricenumber));
        localStorage.setItem("productquantity", JSON.stringify(quantity));
        localStorage.setItem("productimg", JSON.stringify(img));
    }
}
function thongbaologin()
{
  window.alert("ĐĂNG NHẬP ĐỂ ORDER SẢN PHẨM");
}