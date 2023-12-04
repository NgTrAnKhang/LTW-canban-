loadpage();

function loadpage(){
    let a=localStorage.getItem('user');
    let b=localStorage.getItem('pass');
    let c=localStorage.getItem('name');
    if(a)
    {
        console.log(a);
        console.log(b);
        console.log(c);
    }
    else
    {
        localStorage.setItem('user','[]');
        localStorage.setItem('pass','[]');
        localStorage.setItem('name','[]');
    }
}

function clickHandler(){
var a=document.getElementById("usersu");
var b=document.getElementById("pwsu");
var un=document.getElementById("username");

var tk=JSON.parse(localStorage.getItem('user'));
var mk=JSON.parse(localStorage.getItem('pass'));
var inlog=JSON.parse(localStorage.getItem('name'));

if (un.value === "")
{
    window.alert("VUI LÒNG NHẬP TÊN");
}
if (a.value === "")
{
    window.alert("VUI LÒNG NHẬP EMAIL");
}   
if (b.value === "")
{
    window.alert("VUI LÒNG NHẬP PASSWORD");
}
if (un.value !=="" && a.value !=="" && b.value!=="")
{
    tk.push(a.value);
    mk.push(b.value);
    inlog.push(un.value);

    localStorage.setItem('user',JSON.stringify(tk));
    localStorage.setItem('pass',JSON.stringify(mk));
    localStorage.setItem('name',JSON.stringify(inlog));
    window.alert("ĐĂNG KÝ THÀNH CÔNG");
    window.location.href = "./Login.html";
}
}


function clicktest(){
    var listuser=JSON.parse(localStorage.getItem("user"));
    var listpass=JSON.parse(localStorage.getItem("pass"));
    var listname=JSON.parse(localStorage.getItem("name"));
    var a2=document.getElementById("usersi");
    var b2=document.getElementById("pwsi");
    var count=0;
    console.log(listuser[listuser.length-1]);
    for (var i=0;i<listuser.length;i++)
    {
        if (listuser[i]===a2.value && listpass[i]===b2.value)
        {
            localStorage.setItem('insidename',listname[i]);
            window.alert("ĐĂNG NHẬP THÀNH CÔNG");
            window.location.href = "./Logged.html";
            break;
        }
        count++;
    }
    if(count===listpass.length)
    {
        window.alert("ĐĂNG NHẬP THẤT BẠI");
    }
}