let json
let customerList=[
    {
        username: 'NguyenA',
        email:'Anguyen1@gmail.com',
        address:'01 Số 1,P.12,Alsaska',
        phonenumber:'043489234',
        password: 1223435,
        status:'-1',
    },
    {
        username: 'TranB',
        email:'Btran2@gmail.com',
        address:'27 Số 2,P.10,Đồng Hới',
        phonenumber:'0936721892',
        password: 8594385,
        status:'-1',
    },
    {
        username: 'LeC',
        email:'Cle3@gmail.com',
        address:'02 Số 3,P.2,Đồng Nai',
        phonenumber:'0947284620',
        password: 1526374,
        status:'-1',
    },
    {
        username: 'HoangD',
        email:'Dhoang4@gmail.com',
        address:'72 Số 4,P.Thảo Điền,Quận 2, Tp. Hồ Chí Minh',
        phonenumber:'0193856294',
        password: 3836274,
        status:'-1',
    },
    {
        username: 'VoE',
        email:'Evo5@gmail.com',
        address:'50 Số 5,P.22,Quận Bình Thạnh',
        phonenumber:'0384739184',
        password: 8462846,
        status:'-1',
    },
    {
        username: 'DoF',
        email:'Fdo6@gmail.com',
        address:'05 Số 6,P.Phú Mỹ Hưng,Quận 7',
        phonenumber:'0385628471',
        password: 2846374,
        status:'-1',
    },
    {
        username: 'HuynhG',
        email:'Ghuynh7@gmail.com',
        address:'100 Số 7,P.Bến Thành,Quận 1',
        phonenumber:'0482749284',
        password: 3857264,
        status:'-1',
    },
]
if (localStorage.getItem('customerList')==null){
    json=JSON.stringify(customerList)
    localStorage.setItem('customerList',json)
}
else{
    json=localStorage.getItem('customerList')
    customerList=JSON.parse(json)
}

let order=[
    {
        status:'0',
        phone:'0394827938',
        address:'101, đường Số 1, p.Số 2, quận 3, TP.Hồ Chí Minh',
        customer:'Bảo',
        detail:[0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

    },
    {
        status:'0',
        phone:'0394839483',
        address:'202, đường Số 2, p.Số 3, quận 4, TP.Hồ Chí Minh',
        customer:'Yến',
        detail:[0,0,0,0,0,0,0,0,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0],

    },
    {
        status:'0',
        phone:'0485628492',
        address:'303, đường Số 4, p.Số 5, quận 6, TP.Hồ Chí Minh',
        customer:'Hà',
        detail:[0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

    },
    {
        status:'0',
        phone:'0837483729',
        address:'404, đường Số 5, p.Số 6, quận 7, TP.Hồ Chí Minh',
        customer:'Châu',
        detail:[0,0,0,6,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],

    },
    {
        status:'0',
        phone:'0938475829',
        address:'505, đường Số 6, p.Số 7, quận 8, TP.Hồ Chí Minh',
        customer:'fuaisf231',
        detail:[0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    },
    {
        status:'0',
        phone:'0183746294',
        address:'66, đường Số 7, p.Số 2, quận 1, TP.Hồ Chí Minh',
        customer:'Tiến',
        detail:[0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    },
]

if (localStorage.getItem('order')==null){
    json=JSON.stringify(order)
    localStorage.setItem('order',json)
}
else{
    json=localStorage.getItem('order')
    order=JSON.parse(json)
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
product=[
    {name: 'Cây Cam Ngọt Của Tôi',code:'', type: 'Tiểu thuyết', realValue: '108000', cost: '97000', number: 10, NXB:'Nhà Xuất Bản Hội Nhà Văn' , author:'José Mauro de Vasconcelos'},
    {name: 'Tàn Ngày Để Lại',code:'', type: 'Tiểu thuyết', realValue: '160000', cost: '148000', number: 10, NXB:'Nhà Xuất Bản Văn Học' , author:'Kazuo Ishiguro'},
    {name: 'Và Rồi Núi Vọng',code:'', type: 'Tiểu thuyết', realValue: '133500', cost: '88800', number: 10, NXB:'Nhà Xuất Bản Hội Nhà Văn' , author:'Khaled Hosseini'},
    {name: 'Trái Tim Của Quỷ',code:'', type: 'Tiểu thuyết', realValue: '117400', cost: '89500', number: 10, NXB:'Nhà Xuất Bản Dân Trí' , author:'Mahokaru Numata'},
    {name: 'Chết Giữa Mùa Hè',code:'', type: 'Tiểu thuyết', realValue: '184000', cost: '176200', number: 10, NXB:'Nhà Xuất Bản Hội Nhà Văn' , author:'Yukio Mishima'},
    {name: 'Những Chuyện Tình Thế Kỷ Mới',code:'', type: 'Tiểu thuyết', realValue: '201000', cost: '166000', number: 10, NXB:'Nhà Xuất Bản Phụ Nữ' , author:'Tàn Tuyết'},
    {name: 'Sắc Màu Nội Tâm',code:'', type: 'Tâm lý', realValue: '122000', cost: '97000', number: 10, NXB:'Nhà Xuất Bản Thanh Niên' , author:'Thượng Quan Chiêu Nghi'},
    {name: 'Bản Chất Của Dối Trá',code:'', type: 'Tâm lý', realValue: '149000', cost: '119000', number: 10, NXB:'Nhà Xuất Bản Lao Động Xã Hội' , author:'Dan Ariely'},
    {name: 'Tôi Ước Mình Chưa Từng Được Sinh Ra',code:'', type: 'Tâm lý', realValue: '90000', cost: '72300', number: 10, NXB:'' , author:'Yim Minkyung'},
    {name: 'Những Kẻ Cuồng Nhạc',code:'', type: 'Tâm lý', realValue: '230000', cost: '184500', number: 10, NXB:'Nhà Xuất Bản Thế Giới' , author:'Oliver Sacks'},
    {name: 'Thấu Hiểu Chính Mình',code:'', type: 'Tâm lý', realValue: '96000', cost: '76500', number: 10, NXB:'Nhà Xuất Bản Dân Trí' , author:'Megan Logan'},
    {name: 'Bạn Đắt Giá Bao Nhiêu?',code:'', type: 'Tâm lý', realValue: '119000', cost: '95000', number: 10, NXB:'Nhà Xuất Bản Thế Giới' , author:'Vãn Tình'},    
    {name: 'Quán Canh Bò Hầm Của Kẻ Cắp Quá Khứ',code:'', type: 'Kinh dị - Giả tưởng', realValue: '212000', cost: '176500', number: 10, NXB:'Nhà Xuất Bản Hà Nội' , author:'Youngtak Kim'},
    {name: 'Trăng Tròn Lần Tới Xin Hãy Đến Gặp Tôi',code:'', type: 'Kinh dị - Giả tưởng', realValue: '99000', cost: '79000', number: 10, NXB:'Nhà Xuất Bản Thế Giới' , author:'Kim Seong Joong'},
    {name: 'Sát Nhân Mạng',code:'', type: 'Kinh dị - Giả tưởng', realValue: '145000', cost: '116000', number: 10, NXB:'Nhà Xuất Bản Lao Động' , author:'Jeffery Deaver'},
    {name: 'Người Vô Hình',code:'', type: 'Kinh dị - Giả tưởng', realValue: '80000', cost: '64000', number: 10, NXB:'Nhà Xuất Bản Văn Học' , author:'H.G.Wells'},
    {name: 'Người Minh Họa',code:'', type: 'Kinh dị - Giả tưởng', realValue: '118000', cost: '94400', number: 10, NXB:'Nhà Xuất Bản Văn Học' , author:'Ray Bradbury'},
    {name: 'Nắm Bàn Tay Lạnh Giá',code:'', type: 'Kinh dị - Giả tưởng', realValue: '179000', cost: '142000', number: 10, NXB:'Nhà Xuất Bản Hà Nội' , author:'Robert Aickman'},
    {name: 'Trưởng Thành Là Khi Nỗi Buồn Cũng Có Deadline',code:'', type: 'Tản văn - Tạp văn', realValue: '88000', cost: '70800', number: 10, NXB:'Nhà Xuất Bản Văn Học' , author:'Writinman'},
    {name: 'Hẹn Nhau Phía Sau Tan Vỡ',code:'', type: 'Tản văn - Tạp văn', realValue: '86000', cost: '68800', number: 10, NXB:'Nhà Xuất Bản Phụ Nữ' , author:'An'},
    {name: 'Những Người Đàn Ông Không Có Đàn Bà',code:'', type: 'Tản văn - Tạp văn', realValue: '100000', cost: '80800', number: 10, NXB:'Nhà Xuất Bản Hội Nhà Văn' , author:'Haruki Murakami'},
    {name: 'Thiên Tài Bên Trái, Kẻ Điên Bên Phải ',code:'', type: 'Tản văn - Tạp văn', realValue: '179000', cost: '143000', number: 10, NXB:'Nhà Xuất Bản Thế Giới' , author:'Cao Minh'},
    {name: 'Chắc Gì Ta Đã Yêu Nhau',code:'', type: 'Tản văn - Tạp văn', realValue: '88000', cost: '70000', number: 10, NXB:'Nhà Xuất Bản Phụ Nữ' , author:'Minh Nhật'},
    {name: 'Lắng Nghe Gió Hát',code:'', type: 'Tản văn - Tạp văn', realValue: '75000', cost: '60000', number: 10, NXB:'Nhà Xuất Bản Hội Nhà Văn' , author:'Haruki Murakami'},
    
]
for (let i=0;i<product.length;i++){
    product[i].code="./asset/image/"+(i+1)+".png"
}
if (localStorage.getItem('product')==null){
    json=JSON.stringify(product)
    localStorage.setItem('product',json)
}
else{
    json=localStorage.getItem('product')
    product=JSON.parse(json)
}
let describe=[
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Stevens là một quản gia người Anh với tất cả mọi hàm nghĩa của từ này: tận tụy, chỉn chu, trung thành, và trên hết, luôn luôn có một ý thức mãnh liệt về phẩm giá nghề nghiệp. Mong muốn cải thiện chất lượng phục vụ tại dinh thự và chấm dứt những sa sút hiện tại, Stevens dấn thân vào một cuộc hành trình đi qua Miền Tây nước Anh. Mỗi chặng trên cuộc hành trình mở ra một cánh cửa nối về quá khứ, và dần dà hành trình ấy làm hé lộ những mất mát và nuối tiếc theo sau những ảo tưởng của một đời người',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',
'Cây Cam Ngọt Của Tôi là một câu chuyện về nổi đau và tình yêu thương, đưa chúng ta vào một hành trình khám phá để tự trả lời câu hỏi: Cuộc đời có đáng sống không? Zezé có đủ sự hoạt bát và tinh nghịch mà một đứa trẻ năm tuổi có thể có, cậu bé cũng có đủ sự thông minh và những suy nghĩ rối ren phức tạp mà ít đứa trẻ năm tuổi nào có thể có.',

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
                    <img src="${product[i+(pageNumber-1)*9].code}" alt="" srcset="" style="float: left;width:20rem;">
                </div>
    `
    var btnCart=document.querySelector('.btn-cart')
    var btnMinus=document.querySelector(".minus")
    var btnPlus=document.querySelector(".plus")
    var cart=document.getElementById("number-cart")
    document.getElementById("book-name").innerText=product[i+(pageNumber-1)*9].name
    document.getElementById("book-info").innerText='Nhà xuất bản : '+ product[i+(pageNumber-1)*9].NXB+' | Tác giả : '+product[i+(pageNumber-1)*9].author+' | Thể loại : '+product[i+(pageNumber-1)*9].type
    if (product[i+(pageNumber-1)*9].number>0)
        document.getElementById("book-status").innerText='Tình trạng : Còn hàng'
    else
        document.getElementById("book-status").innerText='Tình trạng : Hết hàng'
    document.getElementById('book-content').innerText=describe[i+(pageNumber-1)*9]
    if (product[i+(pageNumber-1)*9].realValue!=product[i+(pageNumber-1)*9].cost)
        document.getElementById('realValue').innerText=(parseInt(product[i+(pageNumber-1)*9].realValue)).toLocaleString()+'đ'
    else
        document.getElementById('realValue').innerText=''

    document.getElementById('cost').innerText=(parseInt(product[i+(pageNumber-1)*9].cost)).toLocaleString()+'đ'
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
            inCart[i]+=parseInt(cart.innerText);
            product[i].number=product[i].number-parseInt(cart.innerText)
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

// search

let btnSearch=document.querySelector("#search-icon")
btnSearch.addEventListener('click',function(){
    window.location.href="search.html"
})
