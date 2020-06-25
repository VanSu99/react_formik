
### TỔNG QUAN

Formik, nó là 1 thư viện nhỏ, giúp chúng ta xử lý 3 vấn đề phiền toái nhất trong form là, nhận giá trị ở trong và ngoài form state, validate giá trị và hiển thị error messages, xử lý việc submit form.

🍣 Quản lý và theo dõi state của Form và hiển thị ra.
🍣 Xử lý submit Form.
🍣 Form validation và hiển thị thông báo lỗi.

### QUÁ TRÌNH 

🎯 Xây dựng một Form đơn giản.
🎯 Sử dụng useFormik Hook.
🎯 Quản lý state của Form.
🎯 Xử lý submit Form.
🎯 Form validation.
🎯 Formik Components.
🎯 Một vài tính năng khác.
🎯 Tái sử dụng các Components cho input, radio button, checkboxes, textarea, select.

### CÀI ĐẶT

npm install formik --save

### THỰC HÀNH VỚI FORMIK

🍣 Formik cung cấp một hook tuỳ chỉnh trả về tất cả state và helper cần thiết, nó được gọi là useFormik.
    - Trong useFormik có thể là 1 Object.
    - Trong useFormik sẽ chứa biểu mẫu của Form, các tên thuộc tính của biểu mẫu Formik sẽ trùng với name của <input/>

🍣 Muốn lấy giá trị của từng Field và setup vào input component của app chúng ta thì sử dụng sau:
    value = {formik.values.tên_thuoc_tinh}

🍣 Xong 2 bước trên, tiếp đến chúng ta cần cập nhật giá trị đầu vào mà users nhập cho từng Field trong Form và lưu các giá trị này vào Formik State => dùng function do Formik cung cấp là: handleChange
    onChange = {formik.handleChange}

🍣 Kế đến là việc xử lý phần submit Form. Để xử lý form submission, ta cần truyền option 'onSubmit' vào useFormik hook.
    - Trong hàm 'onSubmit' sẽ có thể truy cập các giá trị đã được submit.

🍣 Form Validation 
    - formik.errors : để xem các lỗi khi submit, hoặc thao tác trên Form.

### THAM KHẢO 

️🎯 https://viblo.asia/p/quan-ly-form-trong-react-voi-formik-va-yup-p1-RQqKLvw4l7z



Happy Coding 💗💗💗