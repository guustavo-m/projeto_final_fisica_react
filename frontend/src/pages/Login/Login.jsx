import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

import logo from "../../assets/img/logo_buscfisica.png";

export default function Login() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function showMessage(text) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  async function handleLogin(event) {
    event.preventDefault();

    if (!nome || !email || !password) {
      showMessage("Preencha nome, e-mail e password.");
      return;
    }

    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.mensagem || "Falha no login");
      }

      const data = await response.json();

      localStorage.setItem("jwtToken", data.token);

      navigate("/home");
    } catch (error) {
      showMessage(error.message);
    }
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>BUSCFÍSICA</h1>
          <img src={logo} alt="logo buscfísica" />
        </div>
      </header>

      <main className={styles.mainContainer}>
        <section className={styles.loginSection}>
          <h2>LOGIN</h2>

          <p className={styles.subtitle}>
            Faça login para acessar sua conta.
          </p>

          <div className={styles.message}>
            {message}
          </div>

          <form onSubmit={handleLogin}>
            <div className={styles.formRow}>
              <label htmlFor="nome">
                NOME COMPLETO
              </label>

              <input
                id="nome"
                type="text"
                placeholder="Seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div className={styles.formRow}>
              <label htmlFor="email">
                E-MAIL
              </label>

              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.formRow}>
              <label htmlFor="password">
                SENHA
              </label>

              <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />
            </div>

            <div className={styles.buttonRow}>
              <button type="submit">
                Entrar
              </button>
            </div>

            <div className={styles.loginLink}>
              <span>
                Ainda não possui conta?
              </span>

              <Link to="#">
                Criar conta
              </Link>
            </div>
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <h2>BUSCFÍSICA</h2>
        </div>

        <div className={styles.footerColumn}>
          <h4>CONTATO</h4>
          <p>BUSCFISICA7@GMAIL.COM</p>
          <p>(19) 99653-1673</p>
        </div>

        <div className={styles.footerColumn}>
          <h4>DESENVOLVEDORES</h4>
          <p>AYLA CRISTINA DA SILVA VILELA</p>
          <p>GABRIELLA CAMACHO STAVARENGO</p>
          <p>GUSTAVO MILLAMONTE</p>
          <p>MARIA VITÓRIA GUEDES FERREIRA</p>
          <p>MANUELLA DA SILVA PIVA</p>
        </div>
      </footer>
    </>
  );
}