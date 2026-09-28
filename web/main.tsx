import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FamilyApp from "@/app/family-app";
import "./static.css";
import { installStaticFamilyApi } from "./static-api";

// Đánh dấu đây là bản web tĩnh để app đổi vài câu chữ cho phù hợp.
(window as typeof window & { __staticWeb?: boolean }).__staticWeb = true;

// Thay các lời gọi /api/family bằng lưu trữ ngay trong trình duyệt.
installStaticFamilyApi();

const container = document.getElementById("root");
if (!container) throw new Error("Không tìm thấy phần tử #root");

createRoot(container).render(
  <StrictMode>
    <FamilyApp />
  </StrictMode>,
);
