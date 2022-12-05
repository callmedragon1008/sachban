let json=localStorage.getItem('customerList')
let customerList=JSON.parse(json)
document.getElementById('header').innerText+=' '+customerList.length
for (let i=0;i<customerList.length;i++)
{
    document.getElementById('product-list').innerHTML+=
    `
    <div class="row">
        <div class="col-2" style="padding-left:3em;text-align:center;">
            <h4>${customerList[i].username}</h4>
        </div>
        <div class="col-2" style="text-align:center;">
            <h4>${customerList[i].email}</h4>
            </div>
        <div class="col-1" style="text-align:center;">
            <h4>${customerList[i].password}</h4>
        </div>
        <div class="col-3" style="padding-left:2em;text-align:center;">
            <h4>${customerList[i].address}</h4>
        </div>
        <div class="col-2" style="text-align:center;">
            <h4>${customerList[i].phonenumber}</h4>
        </div>
        <div class="col-1" style="text-align:center;">
            <button type="button" class="btn btn-outline-primary lock-btn"><i class="ri-lock-unlock-line"></i></button>
        </div>
        <div class="col-1">
            <button type="button" class="btn btn-outline-success"><i class="ri-file-settings-line"></i></button>
        </div>
    </div>
    <hr>
    `
}
document.getElementById('product-list').innerHTML+=`
<div class="row">
    <div class="col-1">
    </div>
    <div class="col-3">
    </div>
    <div class="col-1">
    </div>
    <div class="col-3">
    </div>
    <div class="col-3 d-flex justify-content-end">
        <button class="btn btn-primary rounded-pill mb-2 mb-lg-0" id="btn-save">
            <span class="d-flex align-items-center">
                <i class="ri-save-fill"></i>
                <span>Lưu Thay Đổi</span>
            </span>
        </button>
    </div>
    <div class="col-1">
    </div>
</div>`
let saveBtn=document.querySelector('#btn-save')
saveBtn.addEventListener('click',function(){
    window.location.href="customer.html"
})
let lockBtn=document.getElementsByClassName('lock-btn')
for (let i=0;i<lockBtn.length;i++){
    if (customerList[i].status=='-1'){
        lockBtn[i].innerHTML=`<i class="ri-lock-line"></i>`
        lockBtn[i].classList.add('btn-outline-danger')
    }
    lockBtn[i].addEventListener('click',function(){
        customerList[i].status=-parseInt(customerList[i].status)
        json=JSON.stringify(customerList)
        localStorage.setItem('customerList',json)
        if (lockBtn[i].innerHTML==`<i class="ri-lock-unlock-line"></i>`){
            lockBtn[i].classList.add('btn-outline-danger')
            lockBtn[i].innerHTML=`<i class="ri-lock-line"></i>`
        }
        else{
            lockBtn[i].classList.remove('btn-outline-danger')
            lockBtn[i].innerHTML=`<i class="ri-lock-unlock-line"></i>`
        }
    })
}
for (let i=0;i<customerList.length;i++){
    let user = {
        username: customerList[i].username,
        password: customerList[i].password,
      };
    json = JSON.stringify(user);
    if (customerList[i].status=='1')
        localStorage.setItem(user.username, json);
    else 
        localStorage.setItem(user.username,' ');
      
}
