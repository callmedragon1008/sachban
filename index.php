<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./asset/css/style.css">
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link href="./asset/themify-icons/themify-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="./asset/fonts/remixicon.css">
    <script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <title>Document</title>
    <style>
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
      }

      input[type=number] {
          -moz-appearance: textfield;
      }
  </style>
</head>
<body style="overflow-x: hidden;">
    <!-- header -->
    <div id="header">
        <nav class="navbar navbar-expand-xl navbar-light bg-light fixed-top shadow-sm mb" id="mainNav">
            <div class="container-fluid px-5">
                <a class="navbar-brand fw-bold header-logo" href="index.php">
                    <img src="./asset/image/Untitled.png" alt="Logo" style="width:40px;" class="rounded-pill me-2">
                    Chú Khỉ Buồn
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Danh mục
                    <i class="bi-list"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0 d-flex align-items-center">
                      <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Thể loại
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Tiểu thuyết</a></li>
                          <li><a class="dropdown-item" href="#">Tâm lý</a></li>
                          <li><a class="dropdown-item" href="#">Kinh dị - Giả tưởng</a></li>
                          <li><a class="dropdown-item" href="#">Tản văn - Tạp văn</a></li>
                        </ul>
                      </div>
                        <li class="nav-item">
                            <form class="d-flex me-lg-3">
                                <input class="form-control me-2" id="search-input" type="text" placeholder="Tìm" size="5px;">
                                <select class="form-select form-select-sm" id="select-bottom" style="width: 200px;margin-right: 14px;" aria-label=".form-select-sm example">
                                    <option value="0" selected="selected">Thể loại</option>
                                    <option value="1">Tiểu thuyết</option>
                                    <option value="2">Tâm lý</option>
                                    <option value="3">Kinh dị - Giả tưởng</option>
                                    <option value="4">Tản văn - Tạp văn</option>
                                </select>
                                <p style="min-width:90px;margin-bottom: 0px;margin-top: 9px;">Khoảng giá:</p>
                                <!-- <select class="form-select form-select-sm" :style="width 120px;margin-right: 14px;" aria-label=".form-select-sm example">
                                    <option value="0" selected="selected">10.000đ</option>
                                </select> -->
                                <input class="form-control me-2" id="min-find" type="number" size="5px;" style="width: 87px; " >
                                <p style="min-width:40px;margin-bottom: 0px;margin-top: 9px;">Đến</p>
                                <!-- <select class="form-select form-select-sm" style="width: 120px;margin-right: 14px;" aria-label=".form-select-sm example">
                                    <option value="0" selected="selected">500.000đ</option>
                                </select> -->
                                <input class="form-control me-2" id="max-find" type="number" size="5px;" style="width: 87px;">
                                <button class="btn btn-primary" id="search-icon" type="button">
                                    <i class="ti-search"></i>
                                </button>
                            </form>
                        </li>
                        
                        <li class="cart nav-item">
                            <a class=" nav-link me-lg-3" href="./shopping-cart.php" style="white-space: nowrap;">
                                <i class="ti-shopping-cart"></i>  Giỏ hàng (<span>0</span>)
                            </a>
                        </li>
                        <li class="nav-item header-user-name disappear"></li>
                        <li class="nav-item header-log-out disappear"><a class="nav-link me-lg-3" href="./index.php" style="white-space: nowrap;"><i class="ri-logout-box-line"></i> Đăng xuất</a></li>
                        <!-- <li class="nav-item header-account"><a class="nav-link me-lg-3" href="./Register.php"><i class="ri-edit-2-line"></i> Đăng Ký</a></li> -->
                        <li class="nav-item header-login"><a class="nav-link me-lg-3" href="./login.php" style="white-space: nowrap;"><i class="ri-login-box-line"></i> Đăng Nhập/Đăng Ký</a></li>
                      
                      </ul>
                    
                </div>
                
            </div>
            
        </nav>
       
    </div>

     <div id="content" class="mt-5 pt-3">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./asset/image/ms_banner_img2.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="./asset/image/ms_banner_img3.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
          </div>
        </header>

            <div class="col py-3">
                <div class="row d-flex justify-content-center" id="card-list">
                    <h2 class="text-center mt-3 pt-3" id="list-item-1">Danh sách sản phẩm</h2>  
                </div>
            </div>
                
        <div class="container mt-3 d-flex justify-content-center">
            <ul class="pagination paging">
                
            </ul>
        </div>
        <div class="modal" id="myModal" style="margin-top: 30px;">
            <div class="modal-dialog modal-xl" >
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <!-- Modal body -->
                    <div class="modal-body">
                        <div class="container">
                            <div class="row" id="modal-content">
                        
                                <!-- <div class="col-1">

                                </div> -->

                                

                            </div>
                        </div>
                    </div>
                    <!-- Modal footer -->
                </div>
            </div>
        </div>

    <footer class="" id="footer-index">
        <div class="box bg-light py-5">
            <div class="container">
                <div class="row">
                  <div class="col">
                    <h5><img src="./asset/image/hpolicy_img1.jpg" alt="">DỊCH VỤ TẬN TÂM</h5>
                  </div>
                  <div class="col">
                    <h5><img src="./asset/image/hpolicy_img2.jpg" alt="">SẢN PHẨM ĐA DẠNG</h5>
                  </div>
                  <div class="col">
                    <h5><img src="./asset/image/hpolicy_img3.jpg" alt="">VẬN CHUYỂN CHU ĐÁO</h5>
                  </div>
                  <div class="col">
                    <h5><img src="./asset/image/hpolicy_img4.jpg" alt="">GIÁ CẢ HỢP LÝ</h5>
                  </div>
                </div>
              </div>
              <div class="container mt-5">
                <div class="row">
                  <div class="col">
                    <h5>LIÊN KẾT NHANH</h5>
                    <br>
                    <P>Sách Thiếu Nhi</P>
                    <p>Trinh Thám</p>
                    <p>Sách Văn học</p>
                    <p>Sách Có Chữ Ký</p>
                    <p>Văn Phòng Phẩm</p>
                    <p>Gợi Ý Cho Bạn</p>
                  </div>
                  <div class="col">
                    <h5>CÁC BỘ SƯU TẬP</h5>
                    <br>
                    <p>Bút - Viết</p>
                    <p>Dụng Cụ Học Sinh</p>
                    <p>Sản Phẩm Về Giấy</p>
                    <p>Dụng Cụ Văn Phòng</p>
                    <p>Dụng Cụ Vẽ</p>
                    <p>Sản Phẩm Điện Tử</p>
                    <p>Văn Phòng Phẩm Khác</p>
                  </div>
                  <div class="col">
                    <h5>HỖ TRỢ KHÁCH HÀNG</h5>
                    <br>
                    <p>Chính sách bảo mật</p>
                    <p>Hướng dẫn mua hàng</p>
                    <p>Phương thức thanh toán</p>
                    <p>Phương thức vận chuyển</p>
                    <p>Chính sách bảo hành</p>
                    <p>Chính sách đổi trả</p>
                    <p>Tin tuyển dụng</p>
                  </div>
                  <div class="col">
                    <h5>CHĂM SÓC KHÁCH HÀNG</h5>
                    <br>
                    <p>Liên hệ hỗ trợ</p>
                    <p>Hệ thống cửa hàng</p>
                    <p>Tin tuyển dụng</p>
                  </div>
                  <div class="col">
                    <h5>ĐỐI TÁC KINH DOANH</h5>
                    <br>
                    <p>Công Ty Phát Hành Sách</p>
                    <p>Văn Phòng Phẩm</p>
                  </div>
                </div>
                <br>
                <p style="text-align: center;">Sách Tiếng Việt | Sách Ngoại Văn | Văn Phòng Phẩm | Đồ Chơi | Đồ Trang Trí - Lưu Niệm | Theo Nhà Cung Cấp | Gợi Ý Quà Tặng | Sách có chữ ký</p>
                <p style="text-align: center;">Công ty TNHH Sách & Lịch Đại Nam Số ĐKKD 0311752595 do Sở KHĐT Tp. HCM cấp ngày 25/04/2012</p>
                <img style="max-width: 160px; padding-bottom: 15px; display: block; margin: auto;" alt="" title="" src="https://theme.hstatic.net/1000363117/1000606112/14/logosalenoti_large.png">
              </div>
        </div>
    </footer>
    <script src="./js/main.js"></script>
    <!-- <script src="./js/cart.js"></script> -->
</body>
</html>