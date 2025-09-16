export type JsonValue = unknown;

export function safeLocalStorageGet<T = JsonValue>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

export function safeLocalStorageSet<T = JsonValue>(
  key: string,
  value: T
): void {
  if (typeof window === "undefined") return;
  try {
    const raw = JSON.stringify(value);
    window.localStorage.setItem(key, raw);
  } catch {
    // ignore
  }
}

export function safeLocalStorageRemove(key: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    // ignore
  }
}

export const userLocalStorage = {
  get: <T = unknown>() => safeLocalStorageGet<T>("user"),
  set: <T = unknown>(data: T) => safeLocalStorageSet("user", data),
  remove: () => safeLocalStorageRemove("user"),
};

export const userAdminLocalStorage = {
  get: <T = unknown>() => safeLocalStorageGet<T>("userAdmin"),
  set: <T = unknown>(data: T) => safeLocalStorageSet("userAdmin", data),
  remove: () => safeLocalStorageRemove("userAdmin"),
};

export const themeLocalStorage = {
  get: () => safeLocalStorageGet<boolean>("theme"),
  set: (isDark: boolean) => safeLocalStorageSet("theme", isDark),
  remove: () => safeLocalStorageRemove("theme"),
};
