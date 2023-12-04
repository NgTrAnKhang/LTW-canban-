onloadname();
function signout(){
    window.alert("ĐĂNG XUẤT THÀNH CÔNG");
    window.location.href="../seminar.html";
}
function onloadname()
{
    let name=localStorage.getItem('insidename');
    if(name)
    {
        document.querySelector('.icons div b').textContent=name;
    }
}
function thongbaologin()
{
  window.alert("ĐĂNG NHẬP ĐỂ ORDER SẢN PHẨM");
}