# Bản web tĩnh (GitHub Pages)

Thư mục này đóng gói app **Mỗi ngày cùng con** thành một trang web tĩnh để chạy trên GitHub Pages — không cần máy chủ, không cần đăng nhập.

## Cách hoạt động

- Dùng lại nguyên mã nguồn giao diện của app ở `app/`, `components/`, `lib/` (một nguồn duy nhất, không sao chép).
- Thay hai lời gọi API `/api/family` bằng lớp lưu trữ `localStorage` trong `static-api.ts` (dữ liệu nằm ngay trên trình duyệt của người dùng).
- Trang vào là `index.html` + `main.tsx`; giao diện dùng nguyên `app/globals.css`.

## Lệnh trên máy

Chạy từ thư mục gốc của kho (sau khi đã cài thư viện bằng `npm ci`):

```sh
npm run build:web     # tạo bản tĩnh trong web/dist
npm run preview:web   # xem thử bản tĩnh tại http://localhost:4173
```

## Triển khai

Workflow [deploy-web.yml](../.github/workflows/deploy-web.yml) tự động build và xuất bản lên GitHub Pages mỗi khi push lên `main`:

https://phandangtrungtv2-alt.github.io/kynangmoingayDTR/

## Lưu ý về dữ liệu

Bản tĩnh lưu hồ sơ và ghi nhận học tập trong trình duyệt của từng thiết bị (không gửi lên mạng). Muốn đồng bộ giữa nhiều thiết bị, hãy dùng bản đầy đủ trên hosting riêng.
