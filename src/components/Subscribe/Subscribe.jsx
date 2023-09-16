"use client";

import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./Subscribe.module.scss";

export function Subscribe() {
  const emailInput = useRef(null);

  const share = async (e) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: "¡Hey! Este post que me pareció interesante. Échale un ojo",
          url: window.location.href,
        });
        toast.success("¡Gracias por compartir! 😊");
      } else {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Link copiado. ¡Gracias por compartir! 😊");
      }
    } catch (e) {
      toast.error("Oups, algo salió mal. Intenta de nuevo.");
    }
  };

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: emailInput.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      toast.error("Oups, algo salió mal. Intenta de nuevo.");

      return;
    }

    emailInput.current.value = "";
    toast.success("🎉 ¡Te has suscrito al newsletter! 🎉");
  };

  return (
    <div className={styles.container}>
      <Toaster />
      <div className={styles.form}>
        <div className={styles.text}>
          <h3>¿Te gustó ese post?</h3>
          <span>
            Compártelo o suscríbete a mi newsletter y recibe mis últimas
            publicaciones, noticias de tecnología, recursos de aprendizaje y
            mucho más!
          </span>
        </div>
        <form onSubmit={subscribe}>
          <input
            id="email-input"
            name="email"
            placeholder="hola@correo.com"
            ref={emailInput}
            required
            type="email"
          />
          <button type="submit">Suscribirme</button>
        </form>
      </div>
      <div className={styles.share}>
        <button onClick={share}>Compartir post</button>
      </div>
    </div>
  );
}
