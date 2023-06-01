import styles from "./page.module.css";

export default async function Home() {

  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <div className={styles.instructions}>
          <h1 className={styles.h1}>Bem vindo!</h1>
          <p className={styles.paragraph}>
            Este é um <i>WebApp</i> para ajudar na organização das tarefas da{" "}
            <strong>sua Família</strong>. O que deve ser feito? Escreva aqui e
            todos saberão!
          </p>
          <h2 className={styles.h2}>O que essa App faz?</h2>
          <ul>
            <li className={styles.li}>
              Você pode organizar as tarefas da sua família neste App, como por
              exemplo "comprar manteiga no supermercado".
            </li>
            <li className={styles.li}>
              Adicione membros da sua família no App. Assim eles poderão ler,
              escrever ou deletar tarefas.
            </li>
            <li className={styles.li}>
              Não se esqueça de abrir o App e conferir as tarefas diariamente!
            </li>
            <li className={styles.li}>
              Abandone os recadinhos na geladeira ou lista de compras no papel!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
