"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, isExiting: false }]);

    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, isExiting: true } : t))
      );
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 350);
    }, 3000);
  }, []);

  // Global window helper for backwards compatibility and easy triggers
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.triggerToast = showToast;
    }
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div id="toast-container" aria-live="polite">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast-msg ${toast.isExiting ? "" : "show"}`}
            role="status"
          >
            <svg
              className="toast-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    return {
      showToast: (msg) => {
        if (typeof window !== "undefined" && window.triggerToast) {
          window.triggerToast(msg);
        } else {
          console.log("[Toast]:", msg);
        }
      },
    };
  }
  return context;
}
