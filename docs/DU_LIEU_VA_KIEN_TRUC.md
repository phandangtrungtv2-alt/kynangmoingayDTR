# Dữ liệu và kiến trúc

## Luồng chính

Trang `app/page.tsx` yêu cầu đăng nhập rồi hiển thị `FamilyApp`. Giao diện tải dữ liệu qua `GET /api/family`, hướng dẫn bài học ở phía trình duyệt và lưu bằng `PUT /api/family`. Nội dung bài nằm trong mã nguồn, không cần truy vấn D1 cho từng bài.

## Bộ bài học và lộ trình

- `lib/lessons.ts`: kiểu bài học, 30 bài gốc, chủ đề và các bước học.
- `lib/year-curriculum.ts`: nội dung bổ sung để hoàn thành bộ 365 bài.
- `lib/learning-path.ts`: tổng hợp các bài đã có ghi nhận, sắp xếp lịch sử và chọn bài chưa có ghi nhận đầu tiên.

ID bài từ 1 đến 365 là liên kết với nhật ký đã lưu. Giữ nguyên ID khi sửa nội dung để tránh gán lịch sử cũ sang bài khác. Giữ file tiếng Việt ở UTF-8 và kiểm tra dấu sau khi sửa.

Lộ trình dựa trên ghi nhận, không dựa trên ngày hiện tại. Khi lọc theo con, chỉ dùng ghi nhận của con đó; chế độ gia đình gộp các bài đã có ghi nhận của ít nhất một con. Những bài đã học ngoài thứ tự được bỏ qua khi gợi ý bài kế tiếp. Kết quả `again` vẫn là một bài đã có ghi nhận, có thể mở lại để ôn.

## Dữ liệu gia đình

Một hàng trong bảng D1 `families` gồm:

| Cột | Ý nghĩa |
| --- | --- |
| `user_id` | Khóa chính, lấy từ danh tính đã đăng nhập. |
| `data` | JSON chứa `children`, `records`, `startDate`. |
| `revision` | Phiên bản bản ghi để tránh ghi đè khi hai thiết bị cùng sửa. |

Hồ sơ con: `id` UUID và `name` biệt danh, dài 1–40 ký tự sau khi bỏ khoảng trắng đầu/cuối. Không có tuổi, ngày sinh, nhóm lớp hoặc trường.

Ghi nhận: `lessonId`, `childId`, `status`, `note`, `date`. Trạng thái gồm `learned` (Đã cùng học), `practice` (Đã thực hành), `again` (Cần luyện thêm). Ngày có định dạng `YYYY-MM-DD`; giao diện ghi ngày theo múi giờ Việt Nam.

Giới hạn hiện tại: 12 hồ sơ, 4.380 ghi nhận, một ghi nhận cho mỗi cặp con/bài, ghi chú tối đa 1.200 ký tự và JSON gia đình tối đa **1.800.000 byte UTF-8**. Ghi nhận phải tham chiếu một hồ sơ có trong gia đình. Khi học lại cùng bài, ghi nhận của con được cập nhật thay vì thêm một bản ghi lịch sử mới.

`startDate` được giữ để tương thích dữ liệu và không tạo lịch nhắc hay khóa bài. Các trường nhóm lớp cũ được schema bỏ qua, giữ ID hồ sơ và ghi nhận hiện có.

## API

`GET /api/family` trả `{ family, revision }` và khởi tạo dữ liệu trống nếu tài khoản chưa có hàng dữ liệu.

`PUT /api/family` nhận `{ family, revision }`, kiểm tra đăng nhập, nguồn yêu cầu khi có header Origin, cấu trúc dữ liệu, kích thước và revision. Khi cập nhật thành công, revision tăng một đơn vị.

| Mã phản hồi | Ý nghĩa |
| --- | --- |
| 200 | Đọc hoặc lưu thành công. |
| 400 | Dữ liệu, revision hoặc ngày bắt đầu không hợp lệ. |
| 401 | Chưa đăng nhập hoặc phiên không còn hợp lệ. |
| 403 | Origin không khớp nguồn của API. |
| 409 | Revision đã đổi; tải lại dữ liệu trước khi lưu. |
| 413 | Dữ liệu quá lớn; rút gọn ghi chú. |
| 503 | Chưa đọc/lưu được dữ liệu; thử lại. |

API trả `Cache-Control: no-store`. Client không gửi user ID để chọn gia đình khác; server chọn theo danh tính từ lớp đăng nhập.

## Trình duyệt và đăng nhập

`localStorage` chỉ nhớ ID bài và bước đang đọc, không lưu toàn bộ hồ sơ hay nhật ký gia đình. Bản nháp này thuộc trình duyệt hiện tại. Nội dung ghi chú chưa lưu không được bảo đảm khôi phục sau khi đóng hoặc tải lại trang.

Trên Sites, gateway cung cấp danh tính đã xác minh cho `app/chatgpt-auth.ts`. Ngoài Sites, phải tích hợp cơ chế xác thực tương đương hoặc thay lớp đăng nhập. Đọc trực tiếp header `oai-authenticated-user-*` từ yêu cầu Internet không đủ an toàn. Xem [yêu cầu chuyển hosting](CAI_DAT_VA_TRIEN_KHAI.md#triển-khai-lên-web).

[Về trang giới thiệu](../README.md)
