# Đưa dự án lên GitHub

Bộ bàn giao có hai file ZIP:

- **tai-lieu-github.zip:** README, các hướng dẫn và ảnh minh họa; dùng khi bạn chỉ cần bổ sung tài liệu vào repo đã có mã nguồn.
- **moi-ngay-cung-con-github.zip:** mã nguồn app hiện tại kèm toàn bộ tài liệu; dùng để tạo repo app đầy đủ. Gói này không chứa lịch sử Git, thư viện đã cài, dữ liệu gia đình local hoặc file build.

Tên repo gợi ý: `moi-ngay-cung-con`.

Mô tả có thể dùng cho phần About:

> App web hỗ trợ phụ huynh hướng dẫn 365 bài kỹ năng mềm và kỹ năng sống cho trẻ tiểu học dưới 12 tuổi. Học bất cứ lúc nào, theo dõi tiến độ và lộ trình trên máy tính, điện thoại.

## Chỉ đăng tài liệu vào repo đã có

1. Giải nén **tai-lieu-github.zip**.
2. Mở repo của bạn trên GitHub, chọn **Add file → Upload files**.
3. Đưa `README.md` và thư mục `docs` vào **thư mục gốc của repo**, giữ nguyên các thư mục con để ảnh và liên kết hoạt động.
4. Xem lại nội dung thay đổi, nhập lời ghi nhận cập nhật và lưu theo tùy chọn GitHub hiển thị. Nếu tạo nhánh mới, mở và hợp nhất pull request khi đã kiểm tra.

Không upload nguyên ZIP thay cho các file nếu muốn GitHub hiển thị README và hướng dẫn ngay trên repo. Hướng dẫn thao tác: [GitHub Docs — Upload files](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

## Đăng toàn bộ app vào repo mới

### Chuẩn bị bản riêng để upload

1. Giải nén **moi-ngay-cung-con-github.zip** vào một thư mục mới, ví dụ `D:\Lam app\moi-ngay-cung-con-github`.
2. Kiểm tra thư mục này có `package.json`, `README.md`, `app`, `lib`, `docs` và các file cấu hình.
3. Tạo repo GitHub mới, ví dụ `moi-ngay-cung-con`. Bạn chọn quyền Public hoặc Private. Khi dùng lệnh bên dưới, để repo mới trống, không tạo sẵn README, license hoặc gitignore.

Thư mục app gốc `D:\Lam app\6-ky nang moi ngay` đã có cấu hình Git phục vụ Sites. Thực hiện các bước tiếp theo trong **bản giải nén riêng** để giữ kết nối hosting gốc.

### Upload bằng Git trên Windows

Cần Git đã cài và đã xác thực với tài khoản GitHub của bạn. Mở PowerShell trong bản giải nén riêng:

```powershell
Set-Location -LiteralPath 'D:\Lam app\moi-ngay-cung-con-github'
git init -b main
git add .
git status --short
git commit -m "Them app Moi ngay cung con va tai lieu"
git remote add origin https://github.com/TEN_TAI_KHOAN/TEN_REPO.git
git push -u origin main
```

Thay `TEN_TAI_KHOAN` và `TEN_REPO` bằng tên thật của bạn. Xem danh sách ở bước `git status` trước khi commit. Hướng dẫn tạo repo trống và upload mã nguồn: [GitHub Docs — Adding locally hosted code](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github).

### Upload qua trình duyệt

Bạn cũng có thể đưa các file và thư mục đã giải nén lên giao diện Upload files. GitHub cho phép tối đa **100 file mỗi lần upload**, **25 MiB mỗi file** qua trình duyệt; chia mã nguồn thành nhiều lượt và giữ đúng đường dẫn. Xem [giới hạn upload của GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

Khi kéo chọn file trên máy, chú ý cả các file/thư mục ẩn cần cho build như `.openai/hosting.json`, `.gitignore` và `.npmrc`. Upload bằng Git giữ các file này thuận tiện hơn.

## Những file nằm trong repo

Giữ mã nguồn, `package.json`, `package-lock.json`, cấu hình Vite/TypeScript, thư mục `build`, `vendor`, migration `drizzle`, hình ảnh `public` và tài liệu `docs`. `build` chứa mã hỗ trợ quá trình build và cần được giữ; khác với thư mục đầu ra `dist`.

Không đưa `node_modules`, `dist`, `.next`, `.vinext`, `.wrangler`, `.sites-runtime`, `.git`, `.env*`, token hoặc dữ liệu gia đình vào file upload. Gói mã nguồn bàn giao đã loại các phần này. Giữ giấy phép đi kèm các thành phần bên thứ ba.

## Kiểm tra sau khi upload

- README xuất hiện ở trang chính và ảnh minh họa mở được.
- Các liên kết trong mục Tài liệu mở đúng trang.
- Có đủ `package-lock.json`, `.openai/hosting.json` và migration.
- Người clone có thể làm theo [hướng dẫn cài đặt](CAI_DAT_VA_TRIEN_KHAI.md).

**GitHub lưu mã nguồn.** Để app chạy trên web, thực hiện thêm bước triển khai với máy chủ, đăng nhập và D1. Xem [hướng dẫn triển khai](CAI_DAT_VA_TRIEN_KHAI.md#triển-khai-lên-web). Địa chỉ app hiện tại vẫn là [Mỗi ngày cùng con](https://moi-ngay-cung-con.yenthainam2025.chatgpt.site/), với quyền truy cập do hosting quản lý.

[Về trang giới thiệu](../README.md)
