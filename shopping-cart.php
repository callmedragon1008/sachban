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
<body>
    <!-- header -->
    <div id="header">
        <nav class="navbar navbar-expand-lg bg-light navbar-light fixed-top shadow-sm mb" id="mainNav">
            <div class="container-fluid px-5">
                <a class="navbar-brand fw-bold header-logo" href="index.php">
                    <img src="./asset/image/Untitled.png" alt="Logo" style="width:40px;" class="rounded-pill me-2">
                    Chú Khỉ Buồn
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="bi-list"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li class="cart nav-item">
                            <a class="nav-link me-lg-3" href="./donhangdadat.php" id="cart-1" type="button" onclick="if (status1!=1) alert('Vui lòng đăng nhập để xem đơn hàng đã đặt')">
                                <i class="ri-luggage-cart-line"></i> Đơn hàng đã đặt
                            </a>
                        </li>
                        <li class="cart nav-item">
                            <a class=" nav-link me-lg-3" href="./shopping-cart.php">
                                <i class="ti-shopping-cart"></i> Giỏ hàng (<span>0</span>)
                            </a>
                        </li>
                        <li class="nav-item header-user-name disappear"></li>
                        <li class="nav-item header-log-out disappear"><a class="nav-link me-lg-3" href="./index.php"><i class="ri-login-box-line"></i> Đăng xuất</a></li>
                        <!-- <li class="nav-item header-account"><a class="nav-link me-lg-3" href="./Register.php"><i class="ri-edit-2-line"></i> Đăng Ký</a></li> -->
                        <li class="nav-item header-login"><a class="nav-link me-lg-3" href="./login.php"><i class="ri-login-box-line"></i> Đăng Nhập/Đăng Ký</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div class="box bg-light small-box-middle-container py-5" style="text-align: center; margin-top: 12rem; border-collapse: separate; border-radius: 15px;">
        <div class="small-middle-container mb-3">
            <div class="row">
                <div class="col-1">
                    <h5></h5>
                </div>
                <div class="col-3">
                    <h5>Sản phẩm</h5>
                </div>
                <div class="col-2">
                    <h5>Giá tiền</h5>
                </div>
                <div class="col-3">
                    <h5>Số lượng</h5>
                </div>
                <div class="col-3 d-flex justify-content-end">
                    <h5>Tổng tiền</h5>
                </div>
            </div>
        </div>
        <div class="products">
            
        </div>
        <div class="small-middle-container " style="text-align: center;">
            <div class="row">
                <div class="col-3">
                    <h5></h5>
                </div>
                <div class="col-3">
                    <h5></h5>
                </div>
                <div class="col-3">
                    <h5>Tổng Cộng</h5>
                </div>
                <div class="col-3 d-flex justify-content-end">
                    <h5 class="total-price"></h5>
                </div>
            </div>
        </div>
        <div class="small-middle-container " style="text-align: center;">
            <div class="row">
                <div class="col-1">
                    <h5></h5>
                </div>
                <div class="col-3">
                    <h5></h5>
                </div>
                <div class="col-2">
                    <h5></h5>
                </div>
                <div class="col-3">
                    <h5></h5>
                </div>
                <div class="col-3 d-flex justify-content-end">
                    <button class="btn btn-primary rounded-pill mb-2 mb-lg-0 btn-pay" data-bs-toggle="modal" data-bs-target="#myModal-pay">
                        <span class="d-flex align-items-center">
                            <i class="ri-money-dollar-box-fill"></i>
                            <span>Thanh toán</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <!-- <div class="total-price" style="width:650px">
            <h5 style="margin-left: 630px;width: 100px;margin: right 0px;">Total:</h5>
        </div> -->
    </div>
    




    <footer class="" id="footer-index">
        <nav class="navbar navbar-expand-lg bg-light navbar-light fixed-bottom shadow-sm mb">
            <div class="container-fluid">
                <div class="d-flex flex-grow-1">
                    <div class="w-100 text-right">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myFooter">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div class="collapse navbar-collapse flex-grow-1 text-right" id="myFooter">
                    <ul class="navbar-nav ms-auto flex-nowrap">
                        <li class="nav-item">
                            <a href="https://www.facebook.com" class="nav-link">
                                <i class="ri-facebook-circle-fill"></i> TCĐTonline
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.instagram.com" class="nav-link">
                                <i class="ri-instagram-fill"></i> TheCaoDienThoai
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="tel:+123456789" class="nav-link">
                                <i class="ri-phone-fill"></i> 0123-456-789
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="mailto:someone@example.com" class="nav-link">
                                <i class="ri-mail-fill"></i> someone@example.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </footer>

    <div class="modal" id="myModal-pay">
        <div class="modal-dialog modal-l">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Thanh toán</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
        
                <!-- Modal body -->
                <div class="modal-body" id="modal-pay">
                    
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger confirm-button" data-bs-dismiss="modal">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>
    <!-- <script src="./js/main.js"></script> -->
    <script src="./js/cart.js"></script>
</body>
</html>