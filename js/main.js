let json
let order=[{
    productCost: "50000",
    productnumber: 3,
    productName: "Khoa học viễn tưởng 50.000",
    productType: "Khoa học viễn tưởng"
    }
    ,{
    productCost: "10000",
    productnumber: 6,
    productName: "Vietnamobile 10.000",
    productType: "Vietnamobile"}
    ,{
    productCost: "200000",
    productnumber: 4,
    productName: "Vinaphone 200.000",
    productType: "Vinaphone"}
    ,{
    productCost: "50000",
    productnumber: 3,
    productName: "Mobifone 50.000",
    productType: "Mobifone"}
]

let customerList=[
    {
    username: 'Dat',
    email:'Dat',
    address:'27 Hùng Vương,P.12,Đồng Hới',
    phonenumber:'043489234',
    password: 1223435,
    },
    {
        username: 'Dat',
        email:'Dat@gmail.com',
        address:'27 Hùng Vương,P.12,Đồng Hới',
        phonenumber:'043489234',
        password: 1223435,
    },
    {
        username: 'Dat',
        email:'Dat@gmail.com',
        address:'27 Hùng Vương,P.12,Đồng Hới',
        phonenumber:'043489234',
        password: 1223435,
    },
    {
        username: 'Dat',
        email:'Dat@gmail.com',
        address:'27 Hùng Vương,P.12,Đồng Hới',
        phonenumber:'043489234',
        password: 1223435,
    },
    {
        username: 'Dat',
        email:'Dat@gmail.com',
        address:'27 Hùng Vương,P.12,Đồng Hới',
        phonenumber:'043489234',
        password: 1223435,
    },
    {
        username: 'Dat',
        email:'Dat@gmail.com',
        address:'27 Hùng Vương,P.12,Đồng Hới',
        phonenumber:'043489234',
        password: 1223435,
    },
    {
        username: 'Dat',
        email:'Dat@gmail.com',
        address:'27 Hùng Vương,P.12,Đồng Hới',
        phonenumber:'043489234',
        password: 1223435,
    },
]
json=JSON.stringify(customerList)
localStorage.setItem('customerList',json)
// Danh sách sản phẩm
let numberCart=0
let product=[]

document.querySelector('.cart span').innerText = numberCart;
product=[
    {name: 'Cây Cam Ngọt Của Tôi',code:'', type: 'Tiểu thuyết', realValue: '10000', cost: '10000', number: 5, NXB:'' , author:'José Mauro de Vasconcelos'},
    {name: 'Tàn Ngày Để Lại',code:'', type: 'Tiểu thuyết', realValue: '10000', cost: '10000', number: 5, NXB:'' , author:'José Mauro de Vasconcelos'},
    {name: 'Và Rồi Núi Vọng',code:'', type: 'Tiểu thuyết', realValue: '10000', cost: '10000', number: 0, NXB:'' , author:'José Mauro de Vasconcelos'},
    {name: 'Trái Tim Của Quỷ',code:'', type: 'Tiểu thuyết', realValue: '10000', cost: '10000', number: 0, NXB:'' , author:'José Mauro de Vasconcelos'},
    {name: 'Chết Giữa Mùa Hè',code:'', type: 'Tiểu thuyết', realValue: '10000', cost: '10000', number: 0, NXB:'' , author:'José Mauro de Vasconcelos'},
    {name: 'Những Chuyện Tình Thế Kỷ Mới',code:'', type: 'Tiểu thuyết', realValue: '10000', cost: '10000', number: 0, NXB:'' , author:'José Mauro de Vasconcelos'},
    {name: 'Cây Cam Ngọt Của Tôi',code:'', type: 'Tiểu thuyết', realValue: '10000', cost: '10000', number: 0, NXB:'' , author:'José Mauro de Vasconcelos'},
    {name: 'Vietnamobile 20.000',code:'', type: 'Vietnamobile', realValue: '20000', cost: '20000', number: 0, NXB:'' , author:''},
    {name: 'Vietnamobile 50.000',code:'', type: 'Vietnamobile', realValue: '50000', cost: '47300', number: 0, NXB:'' , author:''},
    {name: 'Vietnamobile 100.000',code:'', type: 'Vietnamobile', realValue: '100000', cost: '97500', number: 0, NXB:'' , author:''},
    {name: 'Vietnamobile 200.000',code:'', type: 'Vietnamobile', realValue: '200000', cost: '197500', number: 0, NXB:'' , author:''},
    {name: 'Vietnamobile 300.000',code:'', type: 'Vietnamobile', realValue: '300000', cost: '300000', number: 0, NXB:'' , author:''},    
    {name: 'Vietnamobile 500.000',code:'', type: 'Vietnamobile', realValue: '500000', cost: '497500', number: 0, NXB:'' , author:''},
    {name: 'Vinaphone 10.000',code:'', type: 'Vinaphone', realValue: '10000', cost: '10000', number: 0, NXB:'' , author:''},
    {name: 'Vinaphone 20.000',code:'', type: 'Vinaphone', realValue: '20000', cost: '18000', number: 0, NXB:'' , author:''},
    {name: 'Vinaphone 30.000',code:'', type: 'Vinaphone', realValue: '30000', cost: '30000', number: 0, NXB:'' , author:''},
    {name: 'Vinaphone 50.000',code:'', type: 'Vinaphone', realValue: '50000', cost: '50000', number: 0, NXB:'' , author:''},
    {name: 'Vinaphone 100.000',code:'', type: 'Vinaphone', realValue: '100000', cost: '100000', number: 0, NXB:'' , author:''},
    {name: 'Vinaphone 200.000',code:'', type: 'Vinaphone', realValue: '200000', cost: '194800', number: 0, NXB:'' , author:''},
    {name: 'Vinaphone 300.000',code:'', type: 'Vinaphone', realValue: '300000', cost: '284800', number: 0, NXB:'' , author:''},
    {name: 'Vinaphone 500.000',code:'', type: 'Vinaphone', realValue: '500000', cost: '454800', number: 0, NXB:'' , author:''},
    {name: 'Mobifone 10.000',code:'', type: 'Mobifone', realValue: '10000', cost: '10000', number: 0, NXB:'' , author:''},
    {name: 'Mobifone 20.000',code:'', type: 'Mobifone', realValue: '20000', cost: '20000', number: 0, NXB:'' , author:''},
    {name: 'Mobifone 30.000',code:'', type: 'Mobifone', realValue: '30000', cost: '30000', number: 0, NXB:'' , author:''},
    {name: 'Mobifone 50.000',code:'', type: 'Mobifone', realValue: '50000', cost: '49500', number: 0, NXB:'' , author:''},
    {name: 'Mobifone 100.000',code:'', type: 'Mobifone', realValue: '100000', cost: '97500', number: 0, NXB:'' , author:''},
    {name: 'Mobifone 200.000',code:'', type: 'Mobifone', realValue: '200000', cost: '192500', number: 0, NXB:'' , author:''},
    {name: 'Mobifone 300.000',code:'', type: 'Mobifone', realValue: '300000', cost: '287500', number: 0, NXB:'' , author:''},
    {name: 'Mobifone 500.000',code:'', type: 'Mobifone', realValue: '500000', cost: '487000', number: 0, NXB:'' , author:''},
]
if (localStorage.getItem('product')==null){
    json=JSON.stringify(product)
    localStorage.setItem('product',json)
}
else{
    json=localStorage.getItem('product')
    product=JSON.parse(json)
}
let describe=[
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
]
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
for (let i=0;i<a;i++){
    if (product[i+(pageNumber-1)*9].realValue!=product[i+(pageNumber-1)*9].cost){
        cardList.innerHTML += `
        <div class="col-lg-3 m-5">
        <div class="card">
            <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                <img class="card-img-top" src="./asset/image/1.png" alt="Card image">
            </button>
            <div class="card-body" >
                <h4 class="card-title" style="height:40px;margin-bottom:0px;">${product[i+(pageNumber-1)*9].name}</h4>
                <p class="card-text" style="text-decoration-line: line-through">${(parseInt(product[i+(pageNumber-1)*9].realValue)).toLocaleString()}đ</p>
                <div class="row">
                    <div class="col-5">
                        <h5 class="text-danger reduce-cost" style="margin-bottom:0px;">${(parseInt(product[i+(pageNumber-1)*9].cost)).toLocaleString()}đ</h5>
                    </div>
                    <div class="col-7">
                        <a class="btn btn-primary text-light pay-button" style="float:right;"><i class="ri-shopping-cart-2-fill"></i>Thêm vào giỏ</a>
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
                <img class="card-img-top" src="./asset/image/1.png" alt="Card image">
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
    let temp=0;
    var btnCart=document.querySelector('.btn-cart')
    var btnMinus=document.querySelector(".minus")
    var btnPlus=document.querySelector(".plus")
    var cart=document.getElementById("number-cart")
    document.getElementById("book-name").innerText=product[i+(pageNumber-1)*9].name
    document.getElementById("book-info").innerText='Nhà xuất bản : '+ product[i+(pageNumber-1)*9].NXB+' | Tác giả : '+product[i+(pageNumber-1)*9].author+' | Mã sản phẩm : '+product[i+(pageNumber-1)*9].code
    if (product[i+(pageNumber-1)*9].number>0)
        document.getElementById("book-status").innerText='Tình trạng : Còn hàng'
    else
        document.getElementById("book-status").innerText='Tình trạng : Hết hàng'
    document.getElementById('book-content').innerText=describe[i+(pageNumber-1)*9]
    if (product[i+(pageNumber-1)*9].realValue!=product[i+(pageNumber-1)*9].cost)
        document.getElementById('realValue').innerText=(parseInt(product[i+(pageNumber-1)*9].realValue)).toLocaleString()+'đ'
    
    document.getElementById('cost').innerText=(parseInt(product[i+(pageNumber-1)*9].cost)).toLocaleString()+'đ'
    cart.innerText=1
    btnMinus.addEventListener('click',function(){
        temp=1
        if (parseInt(cart.innerText)>1)
        cart.innerText=parseInt(cart.innerText)-1
        })
    btnPlus.addEventListener('click',function(){
        temp=1
        cart.innerText=(parseInt(cart.innerText)+1)+''
        })
    btnCart.addEventListener('click',function(){
        temp=1
        if (parseInt(cart.innerText)>product[i].number)
            alert('Hiện chỉ còn ' +product[i].number+' sản phẩm '+product[i].name)
        else{
            inCart[i]+=parseInt(cart.innerText);
            product[i].number=product[i].number-parseInt(cart.innerText)
            numberCart=parseInt(cart.innerText)+parseInt(document.querySelector('.cart span').innerText)
            localStorage.setItem('numberCart',numberCart)
            document.querySelector('.cart span').innerText = numberCart;
            json=JSON.stringify(inCart)
            localStorage.setItem('inCart',json)
            }
            document.querySelector(".btn-close").addEventListener('click',function(){
                if (temp==1) window.location.href="index.html"
            })
    })
    
})
}

   
    

// header,login
if (status1==1){
    headerLogin.classList.add('disappear')
    headerUser.classList.remove('disappear')
    headerLogout.classList.remove('disappear')
    headerUser.innerHTML=`<a class="nav-link me-lg-3" href=""><i class="ti-user"></i>${name1}</a>`
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
numberCart=localStorage.getItem('numberCart')
if (numberCart!=null)
    document.querySelector('.cart span').textContent=numberCart
let carts = document.querySelectorAll('.add-cart')
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',()=>{
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

// // Nút mua ngay

// let telephone=document.getElementById('telephone-input')
// let customer=[]
// let payBtn=document.querySelectorAll('.pay-button')
// let payModal=document.getElementById('myModal-pay')
// for (let i=0;i < payBtn.length;i++){
//     payModal.classList.remove('disappear')
//     payBtn[i].addEventListener('click',function(){
//         var confirmBtn=document.querySelector('.confirm-button')
//         confirmBtn.addEventListener('click',function(){
//             var orderID=localStorage.getItem('countOrder')
//             if (orderID==null) orderID=1
//             else orderID=JSON.parse(orderID)+1
//             if (status1!=1)
//                 alert('Vui lòng đăng nhập để thanh toán')
//             else{
//                 if (telephone.value==''||telephone.value.length<7||telephone.value.indexOf('0')!=0)
//                     alert('Vui lòng nhập số điện thoại hợp lệ')
//                 else{
//                     json=JSON.stringify(orderID)
//                     localStorage.setItem('countOrder',json)
//                     order.push({
//                         id:i+(pageNumber-1)*9,
//                         productName:product[i+(pageNumber-1)*6].name,
//                         productType:product[i+(pageNumber-1)*6].type,
//                         productCost:product[i+(pageNumber-1)*6].cost,
//                         productnumber:1,
//                     })
//                     json=JSON.stringify(order)
//                     localStorage.setItem('order'+orderID,json)
//                     localStorage.setItem('telephone'+orderID,telephone.value)
//                     localStorage.setItem('customer'+orderID,name1)
//                     alert('Đơn hàng đang được xử lý')
//                     window.location.href="index.html"
//                 }
//             }
//     })
// })
// }


headerLogout.addEventListener('click',function(){
    localStorage.setItem('status',0)
    for (let i=0;i<product.length;i++){
        inCart[i]=0
    }
    localStorage.setItem('inCart',inCart)
    headerLogin.classList.remove('disappear')
    headerUser.classList.add('disappear')
    headerLogout.classList.add('disappear')
})

// search

let btnSearch=document.querySelector("#search-icon")
btnSearch.addEventListener('click',function(){
    var e = document.getElementById("select-bottom")
    var select = e.options[e.selectedIndex].innerText
    var searchInput=document.getElementById("search-input")
    var searchInputText=searchInput.value
    if (searchInputText==''){
        if (select!='Danh mục')
            window.location.href=select+".html"
        else
            window.location.href="index.html"
    }
    else{
        localStorage.setItem('select',select)
        localStorage.setItem('searchInputText',searchInputText)
        window.location.href="search.html"
    }   
})
