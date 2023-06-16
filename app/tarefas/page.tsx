import styles from "./page.module.css";
import getTodos from "../actions/getTodos";
import Tarefas from "./Tarefas";
import getCurrentUser from "../actions/getCurrentUser";

async function TarefasPage() {
  const todos = await getTodos();
  const currentUser = await getCurrentUser()
  console.log("TarefasPage todos:", todos);
  console.log("TarefasPage currentUser:", currentUser);

  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <h1 className={styles.title}>Tarefas da Família</h1>
        <div className={styles.tarefasContainer}>
          <Tarefas todos={todos} authorId={currentUser?.id || ""}/>
        </div>
      </div>
    </div>
  );
}

export default TarefasPage;
