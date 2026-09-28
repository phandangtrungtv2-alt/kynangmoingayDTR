# Cài đặt và triển khai

Hướng dẫn này dành cho người chạy hoặc phát triển app từ mã nguồn. Các lệnh thực thi ở thư mục chứa `package.json`.

## Yêu cầu

- Node.js từ **22.13.0** trở lên và npm.
- Mạng để tải thư viện lần đầu.
- Windows, macOS hoặc Linux. Bản clone mới mặc định dùng chế độ `portable`; các lệnh npm chính không yêu cầu Bash trong chế độ này.

Không cần tự thêm API key hoặc file `.env` để thử app bằng chế độ phát triển local hiện tại.

## Cài thư viện

```sh
npm run install:ci
```

Lệnh dùng bộ phiên bản khóa trong `package-lock.json`. Giữ file này khi đưa mã nguồn lên GitHub.

## Tạo cơ sở dữ liệu local lần đầu

```sh
npm run build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_next_malcolm_colcord.sql
```

Bản build tạo `dist/server/wrangler.json`. Lệnh sau đó tạo bảng `families` trong D1 local. Chỉ chạy migration này cho cơ sở dữ liệu mới, vì SQL hiện tại tạo bảng trực tiếp. Thông báo “table families already exists” nghĩa là bảng đã tồn tại; không xóa dữ liệu đang có để chạy lại.

Dữ liệu local nằm trong `.wrangler/state`, độc lập với dữ liệu app trên web.

## Mở bản phát triển

```sh
npm run dev
```

Mở URL mà terminal hiển thị, mặc định **http://localhost:5173**. Nếu cổng đã có ứng dụng khác, dùng URL thực tế được báo hoặc chọn cổng khác:

```sh
npm run dev -- --port 5174
```

Ở chế độ portable trên địa chỉ loopback, app có đăng nhập mô phỏng qua `/signin-with-chatgpt?return_to=/`, dùng tài khoản thử `seedy@sites.test`. Cơ chế này chỉ hỗ trợ phát triển trên máy local và không nằm trong bản build production. Không mở bản phát triển ra Internet để dùng như app chính thức.

Để thử từ điện thoại, dùng bản triển khai có đăng nhập thật. Truy cập IP mạng LAN của máy tính không đáp ứng điều kiện đăng nhập mô phỏng loopback.

## Các lệnh khác

| Lệnh | Mục đích |
| --- | --- |
| `npm run lint` | Kiểm tra quy tắc mã nguồn. |
| `npm run build` | Tạo bản build Worker. |
| `npm start` | Chạy bản Worker đã build trên máy local. |
| `npm run db:generate` | Tạo migration mới từ schema khi có thay đổi dữ liệu. |

`npm start` cần build trước và **không có đăng nhập mô phỏng** của `npm run dev`. Vì vậy nó không thay thế luồng thử nhanh ở trên. Repo chưa có lệnh `npm test`.

## Triển khai lên web

### Nền tảng hiện tại: Sites

App đang dùng Sites, chạy Worker với binding D1 tên `DB`. File `.openai/hosting.json` liên kết bản gốc với dự án Sites hiện tại. Đây là cấu hình của dự án gốc, không tự tạo dự án mới cho người clone.

Khi cập nhật app trên dự án Sites gốc, sử dụng quy trình xuất bản của Sites với mã nguồn đã kiểm tra, binding D1 và migration cần thiết. Các file build không cần lưu vào GitHub. Quyền xem app được quản lý riêng trên nền tảng hosting; quyền đọc repo GitHub không cấp quyền xem app.

### Chuyển sang hosting khác

Mã nguồn chưa có cấu hình hoàn chỉnh để triển khai trực tiếp trên một hosting khác. Người triển khai cần thực hiện các việc sau trước khi xuất bản:

1. Cấu hình môi trường chạy Cloudflare Worker tương thích với bản build và binding D1 `DB`.
2. Tạo cơ sở dữ liệu production và áp dụng migration phù hợp; không tải dữ liệu local của gia đình lên repo.
3. Tích hợp hệ thống đăng nhập thật. `app/chatgpt-auth.ts` đang nhận danh tính từ gateway Sites, không tự xác minh các header nhận từ Internet.
4. Thay lớp đăng nhập hoặc dùng gateway đáng tin cậy: gateway phải loại bỏ header `oai-authenticated-user-*` do khách gửi trước khi gắn danh tính đã xác minh. Không cho phép người dùng tự cung cấp ID để truy cập dữ liệu.
5. Cấu hình HTTPS, địa chỉ đăng nhập/đăng xuất, quyền truy cập; kiểm tra hồ sơ và ghi nhận tách biệt giữa hai tài khoản.

App cần máy chủ, API và cơ sở dữ liệu, nên không thể triển khai nguyên bản bằng GitHub Pages. Upload mã nguồn lên GitHub không phải thao tác triển khai.

## Kiểm tra sau khi thay đổi

Chạy kiểm tra mã nguồn và build. Sau đó kiểm tra những luồng bị ảnh hưởng: thêm hồ sơ bằng biệt danh, tìm bài có dấu/không dấu, học và lưu một bài, thấy lịch sử cùng bài tiếp theo, tải lại trang và kiểm tra trên màn hình điện thoại.

Nếu thay đổi nội dung, kiểm tra đủ 365 ID từ 1 đến 365, không đổi ID của bài đã có, các trường bài học đầy đủ và tiếng Việt hiển thị đúng. Nếu thay đổi API, kiểm tra yêu cầu chưa đăng nhập, dữ liệu sai, xung đột phiên bản và ghi nhận theo từng tài khoản.

[Về trang giới thiệu](../README.md)
