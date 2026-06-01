import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import styles from "./Questoes.module.css";

import API_URL from "../../services/api";

import logo from "../../assets/img/logo_buscfisica.png";

import QuestaoCard from "../../components/QuestaoCard/QuestaoCard";

export default function Questoes() {
  const navigate = useNavigate();

  const [questoes, setQuestoes] =
    useState([]);

  const [todasQuestoes, setTodasQuestoes] =
    useState([]);

  const [vestibulares, setVestibulares] =
    useState([]);

  const [topicos, setTopicos] =
    useState([]);

  const [materias, setMaterias] =
    useState([]);

  const [
    vestibularSelecionado,
    setVestibularSelecionado,
  ] = useState("");

  const [
    topicoSelecionado,
    setTopicoSelecionado,
  ] = useState("");

  const [
    materiaSelecionada,
    setMateriaSelecionada,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [erro, setErro] =
    useState("");

  function logout() {
    localStorage.removeItem(
      "jwtToken"
    );

    navigate("/");
  }

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    try {
      setLoading(true);

        const [
        vestibularesRes,
        topicosRes,
        materiasRes,
        questoesRes,
        ] = await Promise.all([
            fetch(`${API_URL}/questoes`),
            fetch(`${API_URL}/vestibulares`),
            fetch(`${API_URL}/materia`),
            fetch(`${API_URL}/topico`)
        ]);

const vestibularesData = await vestibularesRes.json();
const topicosData = await topicosRes.json();
const materiasData = await materiasRes.json();
const questoesData = await questoesRes.json();

      setVestibulares(
        vestibularesData
      );

      setTopicos(topicosData);

      setMaterias(materiasData);

      setTodasQuestoes(
        questoesData
      );

      setQuestoes(questoesData);
    } catch (error) {
      console.error(error);

      setErro(
        "Erro ao carregar questões."
      );
    } finally {
      setLoading(false);
    }
  }

  function filtrarQuestoes() {
    let resultado = [
      ...todasQuestoes,
    ];

    if (
      vestibularSelecionado
    ) {
      const vestibular =
        vestibulares.find(
          (v) =>
            String(v.id) ===
            vestibularSelecionado
        );

      if (vestibular) {
        resultado =
          resultado.filter(
            (q) =>
              q.vestibular ===
              vestibular.nome
          );
      }
    }

    if (topicoSelecionado) {
      const topico =
        topicos.find(
          (t) =>
            String(t.id_top) ===
            topicoSelecionado
        );

      if (topico) {
        resultado =
          resultado.filter(
            (q) =>
              q.topico ===
              topico.nome_top
          );
      }
    }

    if (
      materiaSelecionada
    ) {
      const materia =
        materias.find(
          (m) =>
            String(m.id_mat) ===
            materiaSelecionada
        );

      if (materia) {
        resultado =
          resultado.filter(
            (q) =>
              q.materia ===
              materia.nome_mat
          );
      }
    }

    setQuestoes(resultado);
  }

  return (
    <>
      <header
        className={styles.header}
      >
        <div className={styles.logo}>
          <h1>BUSCFÍSICA</h1>

          <img
            src={logo}
            alt="logo"
          />
        </div>

        <nav
          className={styles.navbar}
        >
          <Link to="/home">
            HOME
          </Link>

          <Link
            className={
              styles.active
            }
            to="/questoes"
          >
            QUESTÕES
          </Link>

          <Link to="/formulas">
            FÓRMULAS
          </Link>

          <button
            className={
              styles.logoutButton
            }
            onClick={logout}
          >
            SAIR
          </button>
        </nav>
      </header>

      <section
        className={
          styles.filtrosContainer
        }
      >
        <div
          className={styles.filtros}
        >
          <div
            className={
              styles.filtroGrupo
            }
          >
            <label>
              Vestibular
            </label>

            <select
              value={
                vestibularSelecionado
              }
              onChange={(e) =>
                setVestibularSelecionado(
                  e.target.value
                )
              }
            >
              <option value="">
                Todos
              </option>

              {vestibulares.map(
                (
                  vestibular
                ) => (
                  <option
                    key={
                      vestibular.id
                    }
                    value={
                      vestibular.id
                    }
                  >
                    {
                      vestibular.nome
                    }{" "}
                    -
                    {" "}
                    {
                      vestibular.sigla
                    }
                  </option>
                )
              )}
            </select>
          </div>

          <div
            className={
              styles.filtroGrupo
            }
          >
            <label>
              Matéria
            </label>

            <select
              value={
                materiaSelecionada
              }
              onChange={(e) =>
                setMateriaSelecionada(
                  e.target.value
                )
              }
            >
              <option value="">
                Todas
              </option>

              {materias.map(
                (materia) => (
                  <option
                    key={
                      materia.id_mat
                    }
                    value={
                      materia.id_mat
                    }
                  >
                    {
                      materia.nome_mat
                    }
                  </option>
                )
              )}
            </select>
          </div>

          <div
            className={
              styles.filtroGrupo
            }
          >
            <label>
              Tópico
            </label>

            <select
              value={
                topicoSelecionado
              }
              onChange={(e) =>
                setTopicoSelecionado(
                  e.target.value
                )
              }
            >
              <option value="">
                Todos
              </option>

              {topicos.map(
                (topico) => (
                  <option
                    key={
                      topico.id_top
                    }
                    value={
                      topico.id_top
                    }
                  >
                    {
                      topico.nome_top
                    }
                  </option>
                )
              )}
            </select>
          </div>

          <button
            className={
              styles.btnBuscar
            }
            onClick={
              filtrarQuestoes
            }
          >
            BUSCAR
          </button>
        </div>
      </section>

      <main
        className={styles.main}
      >
        {loading && (
          <h2>
            Carregando
            questões...
          </h2>
        )}

        {erro && (
          <h2>{erro}</h2>
        )}

        {!loading &&
          !erro &&
          questoes.map(
            (questao) => (
              <QuestaoCard
                key={
                  questao.idq
                }
                questao={
                  questao
                }
              />
            )
          )}

        {!loading &&
          !erro &&
          questoes.length ===
            0 && (
            <h2>
              Nenhuma questão
              encontrada.
            </h2>
          )}
      </main>
    </>
  );
}