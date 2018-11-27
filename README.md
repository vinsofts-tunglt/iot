### Cấu trúc Project
* Controllers : Nơi xử lý logic và định nghĩa các phương thức xử lý cho 1 route.
* Definitions: Nơi lưu trữ và đặt các biến không thể thay đổi vd: API_USER = '/api-user'.
* Dist: Nơi chứa các file build từ ES6 -> ES5.
* Errors: Nơi định nghĩa các lỗi xử lý vào ra, ...
* Models: Nơi định nghĩa đối tượng dùng để tương tác với cơ sở dữ liệu
Ví dụ : Một phần mềm chơi game => sẽ có các đối tượng như ngừoi chơi, enemies,...
thì sẽ chia folder như sau: 
``` Models: 
        | --- player --- index.js (định nghĩa đối tượng: vd: tên, tuổi, tài khoản, mật khẩu, điểm,...)
                     --- validator.js (định nghĩa các phương thức xác minh các trường dữ liệu như: tuổi thì phải là số nguyên)
        |--- enemies --- index.js
                     --- validator.js
 ```
* Public: Nơi chứa các tệp css, images, js.
* Routers: Nơi chứa các methods GET, PUT, POST, DELETE cho từng đối tượng.
* Views: Chứa các file html được server trả về client hiển thị cho ngừoi dùng.
* package.json: Chứa các scripts, node_modules cần thiết cho việc chạy ứng dụng.