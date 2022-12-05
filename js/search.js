let json
if (localStorage.getItem('customerList')==null){
    json=JSON.stringify(customerList)
    localStorage.setItem('customerList',json)
}
else{
    json=localStorage.getItem('customerList')
    customerList=JSON.parse(json)
}

// Danh sách sản phẩm
let numberCart=0
let product=[]

document.querySelector('.cart span').innerText = numberCart;
numberCart=localStorage.getItem('numberCart')
if (numberCart!=null)
    document.querySelector('.cart span').textContent=numberCart
else
    numberCart=0
json=localStorage.getItem('product')
product=JSON.parse(json)

if (localStorage.getItem('describe')==null){
    json=JSON.stringify(describe)
    localStorage.setItem('describe',json)
}
else{
    json=localStorage.getItem('describe')
    describe=JSON.parse(json)
}
let temp
let countPage=parseInt((product.length-1)/9)+1
let pageNumber=localStorage.getItem('pageNumber')
if (location.pathname=='/index.html'||location.pathname=='/') pageNumber=1
pageNumber=parseInt(pageNumber)
localStorage.setItem('pageNumber',pageNumber)
let cardList=document.getElementById("card-list")
let a=product.length-9*(pageNumber-1);
if (a>9) a=9
for (let i=3;i<a+3;i++){
    if (product[i+(pageNumber-1)*9].realValue!=product[i+(pageNumber-1)*9].cost){
        cardList.innerHTML += `
        <div class="col-lg-3 m-5">
        <div class="card">
            <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                <img class="card-img-top" src="${product[i+(pageNumber-1)*9].code}" alt="Card image">
            </button>
            <div class="card-body" >
                <h4 class="card-title" style="height:60px;margin-bottom:0px;">${product[i+(pageNumber-1)*9].name}</h4>
                <p class="card-text" style="text-decoration-line: line-through">${(parseInt(product[i+(pageNumber-1)*9].realValue)).toLocaleString()}đ</p>
                <div class="row">
                    <div class="col-5">
                        <h5 class="text-danger reduce-cost" style="margin-bottom:0px;margin-top:10px;">${(parseInt(product[i+(pageNumber-1)*9].cost)).toLocaleString()}đ</h5>
                    </div>
                    <div class="col-7">
                        <a class="btn btn-primary text-light pay-button add-cart" style="float:right;"><i class="ri-shopping-cart-2-fill"></i>Thêm vào giỏ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>          
        `
    }
    else
        cardList.innerHTML += `
        <div class="col-lg-3 m-5">
        <div class="card">
            <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                <img class="card-img-top" src="${product[i+(pageNumber-1)*9].code}" alt="Card image">
            </button>
            <div class="card-body" >
                <h4 class="card-title" style="margin-bottom:20px;height:59px;">${product[i+(pageNumber-1)*9].name}</h4>
                <div class="row">
                    <div class="col-5" style="margin-top:10px;">
                        <h5 class="text-danger reduce-cost">${(parseInt(product[i+(pageNumber-1)*9].realValue)).toLocaleString()}đ</h5>
                    </div>
                    <div class="col-7">
                        <a class="btn btn-primary text-light pay-button add-cart" style="float:right;"><i class="ri-shopping-cart-2-fill"></i>Thêm vào giỏ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>      
            `
}

// Phân trang
let pageFooter=document.querySelector(".paging")
if (countPage>1){
    if (pageNumber!=1&&pageNumber!=2) 
        pageFooter.innerHTML+=`<li class="page-item"><a class="page-link page-before" href="./page${pageNumber-1}.html"><i class="ti-angle-left" style="font-size:12px;"></i></a></li>`
    if (pageNumber==2)
        pageFooter.innerHTML+=`<li class="page-item"><a class="page-link page-before" href="./index.html"><i class="ti-angle-left" style="font-size:12px;"></i></a></li>`
    pageFooter.innerHTML+=`<li class="page-item page-index"><a class="page-link" href="./index.html">1</a></li>`
    for (let i=2;i<=countPage;i++)
        pageFooter.innerHTML+=`<li class="page-item page"><a class="page-link" href="./page${i}.html">${i}</a></li>`
    if (pageNumber!=countPage)
        pageFooter.innerHTML+=`<li class="page-item"><a class="page-link page-after" href="./page${pageNumber+1}.html"><i class="ti-angle-right" style="font-size:12px;"></i></a></li>`
}
let pageIndex=document.querySelector('.page-index')
let page=document.querySelectorAll('.page')
let pageBefore=document.querySelector('.page-before')
let pageAfter=document.querySelector('.page-after')
pageIndex.addEventListener('click',function(){
    localStorage.setItem('pageNumber',1)
})

for (let i=0;i<page.length;i++){
    page[i].addEventListener('click',function(){
        localStorage.setItem('pageNumber',i+2)
    })
}
if (pageNumber!=countPage)
    pageAfter.addEventListener('click',function(){
        localStorage.setItem('pageNumber',pageNumber+1)
    })
if (pageNumber!=1)  
    pageBefore.addEventListener('click',function(){
        localStorage.setItem('pageNumber',pageNumber-1)
    })


// modal
let btnModals=document.querySelectorAll(".btn-modal")
let headerLogin=document.querySelector('.header-login')
let headerUser=document.querySelector('.header-user-name')
let headerLogout=document.querySelector('.header-log-out')
let status1=localStorage.getItem('status')

for (let i=0;i<btnModals.length;i++){
  btnModals[i].addEventListener('click',function(){
    document.getElementById('modal-content').innerHTML=`
    <div class="col-8">
                    <h3 id="book-name"></h3>
                    <h6 style="color: blue;" id="book-info"></h6>
                    <h6 id="book-status"></h6>
                    <hr>
                    <h5>Mô tả:</h5>
                    <span id="book-content"> </span>
                    <hr>
                    <div class="row">
                        <div class="col-2 text-danger">
                            <h5 id="cost"></h5>
                        </div>
                        <div class="col-2">
                            <h6 id="realValue" style="text-decoration-line: line-through"></h6>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-3">
                            <b style="font-size: 30px;">Số lượng:</b>
                        </div>
                        <div class="col-3" style="margin-top: 10px;" class="in-cart">
                                <button class="navbar-toggler minus" type="button" style="margin-right:20px;" ><i class="ti-minus"></i></button>
                                <span style="font-size:19px;" id="number-cart">1</span>
                                <button class="navbar-toggler plus" type="button" style="margin-left:20px;"><i class="ti-plus"></i></button>
                        </div>
                        <div class="col-2">
                        </div>
                        <div class="col-4" style="padding-left: 55px;">
                            <a class="btn-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"> Thêm vào giỏ hàng</i></a>
                        </div>
                        
                    </div>
                    
                </div>
                <div class="col-4">
                    <img src="${product[i+(pageNumber-1)*9+3].code}" alt="" srcset="" style="float: left;width:20rem;">
                </div>
    `
    var btnCart=document.querySelector('.btn-cart')
    var btnMinus=document.querySelector(".minus")
    var btnPlus=document.querySelector(".plus")
    var cart=document.getElementById("number-cart")
    document.getElementById("book-name").innerText=product[i+(pageNumber-1)*9+3].name
    document.getElementById("book-info").innerText='Nhà xuất bản : '+ product[i+(pageNumber-1)*9+3].NXB+' | Tác giả : '+product[i+(pageNumber-1)*9+3].author+' | Thể loại : '+product[i+(pageNumber-1)*9+3].type
    if (product[i+(pageNumber-1)*9+3].number>0)
        document.getElementById("book-status").innerText='Tình trạng : Còn hàng'
    else
        document.getElementById("book-status").innerText='Tình trạng : Hết hàng'
    document.getElementById('book-content').innerText=describe[i+(pageNumber-1)*9+3]
    if (product[i+(pageNumber-1)*9+3].realValue!=product[i+(pageNumber-1)*9+3].cost)
        document.getElementById('realValue').innerText=(parseInt(product[i+(pageNumber-1)*9+3].realValue)).toLocaleString()+'đ'
    else
        document.getElementById('realValue').innerText=''

    document.getElementById('cost').innerText=(parseInt(product[i+(pageNumber-1)*9+3].cost)).toLocaleString()+'đ'
    cart.innerText=1
    btnMinus.addEventListener('click',function(){
        if (parseInt(cart.innerText)>1)
            cart.innerText=parseInt(cart.innerText)-1
        })
    btnPlus.addEventListener('click',function(){
        cart.innerText=(parseInt(cart.innerText)+1)+''
        })
    btnCart.addEventListener('click',function(){
        if (parseInt(cart.innerText)>product[i].number)
            alert('Hiện chỉ còn ' +product[i].number+' sản phẩm '+product[i].name)
        else{
            inCart[i+(pageNumber-1)*9]+=parseInt(cart.innerText);
            product[i+(pageNumber-1)*9].number=product[i+(pageNumber-1)*9].number-parseInt(cart.innerText)
            numberCart=parseInt(cart.innerText)+parseInt(document.querySelector('.cart span').innerText)
            localStorage.setItem('numberCart',numberCart)
            document.querySelector('.cart span').innerText = numberCart;
            json=JSON.stringify(inCart)
            localStorage.setItem('inCart',json)
            }
    })
    
})
}

   
    

// header,login
if (status1==1){
    headerLogin.classList.add('disappear')
    headerUser.classList.remove('disappear')
    headerLogout.classList.remove('disappear')
    headerUser.innerHTML=`<a class="nav-link me-lg-3" href=""><i class="ti-user"></i>${localStorage.getItem('username1')}</a>`
}

// Thêm sản phẩm vào giỏ hàng
let inCart=[]
if (localStorage.getItem('inCart')==null)
    for (let i=0;i<product.length;i++)
    {
        inCart.push(0)
    }
else {
    json=localStorage.getItem('inCart')
    inCart=JSON.parse(json)
}

let carts = document.querySelectorAll('.add-cart')
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',function(){
        if ((product[i+(pageNumber-1)*9].number)>0){
            inCart[i+(pageNumber-1)*9]++;
            json=JSON.stringify(inCart)
            localStorage.setItem('inCart',json)
            numberCart=localStorage.getItem('numberCart')
            product[i+(pageNumber-1)*9].number--;
            json=JSON.stringify(product)
            localStorage.setItem('product',json)
            if (document.querySelector('.cart span').textContent=='0') 
                numberCart=1
            else{
                numberCart++;
        }
            localStorage.setItem('numberCart',numberCart)
            document.querySelector('.cart span').innerText = numberCart;
        }
        else
            alert('Đã hết hàng')
})
}


headerLogout.addEventListener('click',function(){
    localStorage.setItem('status',0)
    for (let i=0;i<product.length;i++){
        inCart[i]=0
    }
    localStorage.setItem('numberCart',0)
    json=JSON.stringify(inCart)
    localStorage.setItem('inCart',json)
    headerLogin.classList.remove('disappear')
    headerUser.classList.add('disappear')
    headerLogout.classList.add('disappear')
})
let btnSearch=document.querySelector("#search-icon")
btnSearch.addEventListener('click',function(){
    window.location.href="search.html"
})
