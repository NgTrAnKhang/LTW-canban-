total();
displaycart();
AutoRefresh();
var a=JSON.parse(localStorage.getItem('productname'));
function total(){
    var pricenumber=JSON.parse(localStorage.getItem('productpricenumber'));
    var quantity=JSON.parse(localStorage.getItem('productquantity'));
    localStorage.setItem('total',0);
    var total=JSON.parse(localStorage.getItem('total'));
    for (var i = 0; i < pricenumber.length; i++)
    {
        var a=pricenumber[i]*quantity[i];
        total +=a;
    }
    total=parseInt(total);
    localStorage.setItem('total',total);
}
function AutoRefresh() {
    setTimeout("location.reload(true);",60000);
 }
function displaycart(){
    var product=JSON.parse(localStorage.getItem('productname'));
    var pricestring=JSON.parse(localStorage.getItem('productpricestring'));
    var pricenumber=JSON.parse(localStorage.getItem('productpricenumber'));
    var quantity=JSON.parse(localStorage.getItem('productquantity'));
    var img=JSON.parse(localStorage.getItem('productimg'));
    var total=JSON.parse(localStorage.getItem('total'));
    let productcotainer=document.querySelector('.product');
    var x=-1;
    productcotainer.innerHTML='';
    for (var i = 0; i < product.length; i++)
    {
        if (product[i] !== null)
        {
            x++;
            productcotainer.innerHTML += `
            <div class="sp">
            <span onclick="xoaitem(${x})"><i class="fas fa-minus-circle del"></i></span>
            <img src="${img[i]}" alt="" class="itemimg">
            <div class="itemname">${product[i]}</div>
            <div class="itemprice">${pricestring[i]}</div>
            <div class="itemquantity">${quantity[i]}</div>
            <div class="itemtotal">${quantity[i] * pricenumber[i]},000đ</div>
            </div>
        `;
            if (i === product.length - 1) {
              productcotainer.innerHTML += `
            <div class="product-header totalprice">
            <h5 class="totalprice">Tổng cộng:${total},000đ</h5>
            <span class="clearitem" onclick="clearproduct()">Clear cart</span>
        </div>
            `;
            }
        }
        
    }
}
function clearproduct(){
    localStorage.setItem("productname", "[]");
    localStorage.setItem("productpricestring", "[]");
    localStorage.setItem("productpricenumber", "[]");
    localStorage.setItem("productquantity", "[]");
    localStorage.setItem("productimg", "[]");
    localStorage.setItem('total',0);
    displaycart();
}
function purchase(){
    var product=JSON.parse(localStorage.getItem('productname'));
    if (product.length === 0)
    {
      window.alert("BẠN CHƯA CÓ SẢN PHẨM NÀO");
    }
    else
    {
      var nameoder=document.getElementById('nameorder');
      var address=document.getElementById('addorder');
      var phone=document.getElementById('phoneorder');
      if (nameoder.value === "")
      {
        window.alert("VUI LÒNG NHẬP HỌ TÊN");
      }
      if (address.value === "")
      {
        window.alert("VUI LÒNG ĐỊA CHỈ");
      }
      if (phone.value === "")
      {
        window.alert("VUI LÒNG SỐ ĐIỆN THOẠI");
      }
      if (nameoder.value !== "" &&  address.value !== ""&& phone.value !== "")
      {
        let text = "KIỂM TRA CẨN THẬN TRƯỚC KHI BẤM OK";
        if (confirm(text) == true)
        {
          window.alert("THANH TOÁN THÀNH CÔNG");
          localStorage.setItem("productname", "[]");
          localStorage.setItem("productpricestring", "[]");
          localStorage.setItem("productpricenumber", "[]");
          localStorage.setItem("productquantity", "[]");
          localStorage.setItem("productimg", "[]");
          localStorage.setItem('total',0);
          displaycart();
        }
      }
    }
    
}
function xoaitem(i){
    let text = "BẠN MUỐN XOÁ SẢN PHẨM NÀY?";
    if (confirm(text) == true) {
      var product = JSON.parse(localStorage.getItem("productname"));
      var pricestring = JSON.parse(localStorage.getItem("productpricestring"));
      var pricenumber = JSON.parse(localStorage.getItem("productpricenumber"));
      var quantity = JSON.parse(localStorage.getItem("productquantity"));
      var img = JSON.parse(localStorage.getItem("productimg"));
      delete product[i];
      delete pricestring[i];
      delete pricenumber[i];
      delete quantity[i];
      delete img[i];
      product = product.filter((a) => a);
      pricestring = pricestring.filter((a) => a);
      pricenumber = pricenumber.filter((a) => a);
      quantity = quantity.filter((a) => a);
      img = img.filter((a) => a);
      localStorage.setItem("productname", JSON.stringify(product));
      localStorage.setItem("productpricestring", JSON.stringify(pricestring));
      localStorage.setItem("productpricenumber", JSON.stringify(pricenumber));
      localStorage.setItem("productquantity", JSON.stringify(quantity));
      localStorage.setItem("productimg", JSON.stringify(img));
      total();
      displaycart();
    }
}