//khởi tạo server
const express = require('express'); //require express
const app = express();
const port = 3000;

//khai báo sử dụng ejs
app.set('view engine', 'ejs'); //khai báo view engine là ejs
app.set('views', './views'); //khai báo thư mục chứ file giao diện

//router
app.get('/danhmuc/:iddanhmuc/sanpham/:id', (req,res) => {
    console.log(req.query); //được đánh dấu bằng ?ten1=x&ten2=y trên url
    console.log(req.params); //nằm trong url /:id
    //params không được trùng tên nhau
    //nếu đặt trùng thì sẽ lấy giá trị của thằng sau cùng
    // res.send('<h1>Đây là trang chủ</h1>'); 
    res.render('detail', {
        id: req.params.id,
        iddanhmuc: req.params.iddanhmuc,
    });
});

app.listen(port, () => {
    console.log(`SV đang chạy ở port ${port}`);
})