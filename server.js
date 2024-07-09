//khởi tạo server
const express = require('express'); //require express
// từ express 4.16, ko cần require body-parser
// var bodyParser = require('body-parser'); //require body-parser
const app = express();
const port = 3000;

//khai báo sử dụng ejs
app.set('view engine', 'ejs'); //khai báo view engine là ejs
app.set('views', './views'); //khai báo thư mục chứ file giao diện
// app.use(bodyParser.urlencoded()); //từ express 4.16 trở xuống
app.use(express.urlencoded({ extended: true })); //từ express 4.16 trở lên
//router
app.get('/list', (req,res) => {
    let products = [
        {
            id: 1,
            name: 'thaivm2',
            price: 1000000,
            description: 'Đây là description',
            image: 'https://picsum.photos/200'
        },
        {
            id: 3,
            name: 'thaivm23',
            price: 3000000,
            description: 'Đây là description',
            image: 'https://picsum.photos/200'
        }
    ];
    res.render('list', { products })
})

app.get('/create', (req,res) => {
    res.render('create');
})

app.post('/save', (req,res) => {
    console.log(req.body.name, req.body.price, req.body.description);
})

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