/**
 * https://excalidraw.com/#room=00ed76ff236ee175bb81,X4mf4VxROAe08s99PQkUAw
 */

import styles from "./page.module.css";
import getTodos from "../actions/getTodos";
import Tarefas from "./Tarefas";

async function TarefasPage() {
  const todos = await getTodos();

  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <h1 className={styles.title}>Tarefas da Família</h1>
        <div className={styles.tarefasContainer}>
          <Tarefas todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default TarefasPage;
