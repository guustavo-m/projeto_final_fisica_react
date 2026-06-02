import { Link, useNavigate } from "react-router-dom";
import styles from "./Formulas.module.css";

import logo from "/img/logo_buscfisica.png";

export default function Formulas() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("jwtToken");
    navigate("/");
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>BUSCFÍSICA</h1>
          <img src={logo} alt="logo buscfísica" />
        </div>

        <nav className={styles.navbar}>
          <Link to="/home">HOME</Link>

          <Link to="/questoes">
            QUESTÕES
          </Link>

          <Link
            to="/formulas"
            className={styles.active}
          >
            FÓRMULAS
          </Link>

          <button
            className={styles.logoutButton}
            onClick={logout}
          >
            SAIR
          </button>
        </nav>
      </header>

      <div className={styles.titulo}>
        <h1>FÓRMULAS</h1>

        <p>
          Veja as fórmulas mais usadas
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <h2>MECÂNICA</h2>

          <div className={styles.formula}>
            <span>VELOCIDADE MÉDIA</span>

            <div className={styles.caixa}>
              Vm = ΔS / Δt
            </div>
          </div>

          <div className={styles.formula}>
            <span>MRU</span>

            <div className={styles.caixa}>
              S = S₀ + V·T
            </div>
          </div>

          <div className={styles.formula}>
            <span>TORRICELLI</span>

            <div className={styles.caixa}>
              v² = v₀² + 2·a·Δs
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h2>TERMOLOGIA</h2>

          <div className={styles.formula}>
            <span>CALOR SENSÍVEL</span>

            <div className={styles.caixa}>
              Q = m·c·Δt
            </div>
          </div>

          <div className={styles.formula}>
            <span>CALOR LATENTE</span>

            <div className={styles.caixa}>
              Q = m·L
            </div>
          </div>

          <div className={styles.formula}>
            <span>
              1ª LEI DA TERMODINÂMICA
            </span>

            <div className={styles.caixa}>
              Q = τ + ΔU
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h2>ONDULATÓRIA</h2>

          <div className={styles.formula}>
            <span>FREQUÊNCIA</span>

            <div className={styles.caixa}>
              f = 1/T
            </div>
          </div>

          <div className={styles.formula}>
            <span>LEI DE SNELL</span>

            <div className={styles.caixa}>
              n₁sen(θ₁)=n₂sen(θ₂)
            </div>
          </div>

          <div className={styles.formula}>
            <span>EQ. DE GAUSS</span>

            <div className={styles.caixa}>
              1/f = 1/p + 1/p'
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h2>ELETRICIDADE</h2>

          <div className={styles.formula}>
            <span>LEI DE COULOMB</span>

            <div className={styles.caixa}>
              F = k·q₁·q₂ / d²
            </div>
          </div>

          <div className={styles.formula}>
            <span>
              CORRENTE ELÉTRICA
            </span>

            <div className={styles.caixa}>
              i = Q / Δt
            </div>
          </div>

          <div className={styles.formula}>
            <span>
              POTÊNCIA ELÉTRICA
            </span>

            <div className={styles.caixa}>
              P = U·i
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <h2>BUSCFÍSICA</h2>

          <button
            className={styles.logoutButton}
            onClick={logout}
          >
            SAIR
          </button>
        </div>

        <div className={styles.footerColumn}>
          <h4>CONTATO</h4>

          <p>BUSCFISICA7@GMAIL.COM</p>

          <p>(19) 99653-1673</p>
        </div>

        <div className={styles.footerColumn}>
          <h4>DESENVOLVEDORES</h4>

          <p>
            AYLA CRISTINA DA SILVA
            VILELA
          </p>

          <p>
            GABRIELLA CAMACHO
            STAVARENGO
          </p>

          <p>GUSTAVO MILLAMONTE</p>

          <p>
            MARIA VITÓRIA GUEDES
            FERREIRA
          </p>

          <p>
            MANUELLA DA SILVA PIVA
          </p>
        </div>
      </footer>
    </>
  );
}