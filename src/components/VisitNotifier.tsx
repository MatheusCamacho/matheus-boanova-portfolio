"use client";

import { useEffect } from "react";

const SESSION_KEY = "portfolio-visit-pinged";

export function VisitNotifier() {
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(SESSION_KEY)) return;
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Se o storage estiver indisponível, o cookie do servidor ainda evita duplicação.
    }

    void fetch("/api/visit", {
      method: "POST",
      credentials: "same-origin",
      keepalive: true,
      headers: {
        Accept: "application/json",
      },
    }).catch(() => {
      // O aviso é opcional e nunca deve atrapalhar a navegação do portfólio.
    });
  }, []);

  return null;
}
