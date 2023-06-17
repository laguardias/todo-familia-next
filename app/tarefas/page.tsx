import styles from "./page.module.css";
import getTodos from "../actions/getTodos";
import Tarefas from "./Tarefas";
import getCurrentUser from "../actions/getCurrentUser";
import Form from "./Form";

async function TarefasPage() {
  const todos = await getTodos();
  const currentUser = await getCurrentUser();

  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <h1 className={styles.title}>Tarefas da Família</h1>
        <Form authorId={currentUser?.id || ""} />
        <Tarefas todos={todos} />
      </div>
    </div>
  );
}

export default TarefasPage;
