import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "/img/logo_buscfisica.png";

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
    </>
  );
}