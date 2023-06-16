"use client";

import styles from "./page.module.css";
import { toast } from "react-hot-toast";
import axios from "axios";
import { FormEventHandler, useState } from "react";

function Tarefas() {
  const [tarefa, setTarefa] = useState("");

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/tarefas", { Post: tarefa });
      toast.success("Registrado!");
    } catch (error) {
      toast.error(`Um erro aconteceu. Tente novamente!${error}`);
    }
  };

  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <h1 className={styles.title}>Tarefas da Família</h1>
        <form className={styles.inputContainer} onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Escreva algo a ser feito"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
          />
          <div>
            <button onClick={onSubmit}>Adicionar</button>
          </div>
        </form>
        <div className={styles.tarefasContainer}></div>
      </div>
    </div>
  );
}

export default Tarefas;
