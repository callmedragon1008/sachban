let json=localStorage.getItem('order')
let order=JSON.parse(json)
document.getElementById('count-order').innerText='Số đơn hàng:'+order.length

for (let i=0;i<order.length;i++){
    document.getElementById('order-list').innerHTML+=`
    <div class="row">
        <div class="col-2">
            <h5> Trạng thái</h5>
        </div>
        <div class="col-3">
            <h5>${order[i].customer}</h5>
        </div>
        <div class="col-4">
            <h5>${order[i].address}</h5>
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-outline-primary btn-edit" data-bs-toggle="modal" data-bs-target="#myModal-edit"><i class="ri-file-text-fill"></i></button>
        </div>
    </div>
    <hr>
    `
}
let editBtn=document.querySelectorAll(".btn-edit")
for (let i=0;i<editBtn.length;i++){
    
}