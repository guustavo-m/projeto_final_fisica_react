import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

import logo from "../../assets/img/logo_buscfisica.png";

export default function Home() {
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
          <Link
            className={styles.active}
            to="/home"
          >
            HOME
          </Link>

          <Link to="/questoes">
            QUESTÕES
          </Link>

          <Link to="/formulas">
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

      <main className={styles.main}>
        <section className={styles.content}>
          <h2>
            DOMINE A FÍSICA PARA O
            <br />
            VESTIBULAR
          </h2>

          <p>
            Acesse questões organizadas por
            vestibular e tópicos. Pratique e
            aprimore seus conhecimentos.
          </p>

          <button className={styles.btnSearch}>
            <Link
              className={styles.btnSearchA}
              to="/questoes"
            >
              Buscar questões
            </Link>
          </button>
        </section>

        <section className={styles.cards}>
          <div className={styles.card}>
            <h3>
              Treine Física de Verdade
            </h3>

            <p>
              Questões dos vestibulares pra você
              praticar sem parar.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Busca Avançada</h3>

            <p>
              Filtre por vestibular e tópico e
              encontre exatamente o conteúdo
              que precisa estudar.
            </p>
          </div>

          <div className={styles.card}>
            <h3>
              Acompanhe sua evolução
            </h3>

            <p>
              Monitore seus resultados e evolua
              com estratégia.
            </p>
          </div>
        </section>

        <section className={styles.bottom}>
          <h3>Pronto para começar?</h3>

          <p>
            Se naquela questão você esqueceu
            como faz, veja as fórmulas.
          </p>

          <button className={styles.btnSearch}>
            <Link
              className={styles.btnFormulasA}
              to="/formulas"
            >
              Veja as Fórmulas
            </Link>
          </button>
        </section>
      </main>

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