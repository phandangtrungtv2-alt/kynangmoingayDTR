import { familySchema, type Family } from "@/lib/family";
import { vnDate } from "@/lib/lessons";

// Bản web tĩnh không có máy chủ: dữ liệu gia đình được lưu trong localStorage
// của trình duyệt, mô phỏng đúng API /api/family của bản chạy trên máy chủ.

const STORAGE_KEY = "moi-ngay-cung-con:family:v1";

type StoredState = { family: Family; revision: number };

function freshFamily(): Family {
  return { children: [], records: [], startDate: vnDate() };
}

function readState(): StoredState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { family?: unknown; revision?: unknown };
      const family = familySchema.safeParse(parsed?.family);
      const revision =
        typeof parsed?.revision === "number" ? parsed.revision : -1;
      if (family.success && Number.isInteger(revision) && revision >= 0) {
        return { family: family.data, revision };
      }
    }
  } catch {
    // Bỏ qua dữ liệu hỏng và bắt đầu lại với hồ sơ trống.
  }
  return { family: freshFamily(), revision: 0 };
}

function writeState(state: StoredState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Trình duyệt chặn lưu trữ: bỏ qua, phiên hiện tại vẫn dùng được.
  }
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function handle(method: string, init?: RequestInit): Response {
  if (method === "GET") {
    const state = readState();
    return jsonResponse({ family: state.family, revision: state.revision });
  }

  if (method === "PUT") {
    let body: { family?: unknown; revision?: number } | null = null;
    try {
      body = JSON.parse(typeof init?.body === "string" ? init.body : "null");
    } catch {
      return jsonResponse({ error: "Dữ liệu không hợp lệ." }, 400);
    }
    const parsed = familySchema.safeParse(body?.family);
    if (
      !parsed.success ||
      typeof body?.revision !== "number" ||
      !Number.isInteger(body.revision) ||
      body.revision < 0
    ) {
      return jsonResponse({ error: "Vui lòng kiểm tra lại thông tin." }, 400);
    }
    const current = readState();
    if (current.revision !== body.revision) {
      return jsonResponse(
        {
          error:
            "Dữ liệu đã đổi ở nơi khác (có thể là thẻ khác của trình duyệt). Hãy tải lại dữ liệu trước khi lưu.",
        },
        409,
      );
    }
    const revision = current.revision + 1;
    writeState({ family: parsed.data, revision });
    return jsonResponse({ family: parsed.data, revision });
  }

  return jsonResponse({ error: "Không hỗ trợ." }, 405);
}

export function installStaticFamilyApi(): void {
  const originalFetch = window.fetch.bind(window);
  window.fetch = (
    input: RequestInfo | URL,
    init?: RequestInit,
  ): Promise<Response> => {
    const url =
      typeof input === "string"
        ? input
        : input instanceof URL
          ? input.href
          : input.url;
    if (url.includes("/api/family")) {
      const method = (init?.method ?? "GET").toUpperCase();
      return Promise.resolve(handle(method, init));
    }
    return originalFetch(input, init);
  };
}
