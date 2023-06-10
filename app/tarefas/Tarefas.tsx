"use client";

import styles from "./page.module.css";
import { toast } from "react-hot-toast";
import axios from "axios";
import { FormEventHandler, useEffect, useState } from "react";
import getTodos from "../actions/getTodos";

function Tarefas({ todos }) {
  const [tarefa, setTarefa] = useState("");

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/tarefas", { Post: tarefa });
      toast.success("Registrado!");
    } catch (error) {
      toast.error(`Um erro aconteceu. Tente novamente!${error}`);
    }
  };

  // Como faria o onSubmit?
  // Criaria uma action na pasta actions chamada createTodo
  // Importaria createTodo aqui neste arquivo
  // E faria no onSubmit:

  /**
   *   const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      await createTodo({ Post: tarefa })
      toast.success("Registrado!");
    } catch (error) {
      toast.error(`Um erro aconteceu. Tente novamente!${error}`);
    }
  };
   */
  return (
    <>
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
      <div className={styles.tarefasContainer}>
        {todos.length === 0 ? (
          <div>Não existem todos</div>
        ) : (
          todos.map((todo) => <div key={todo.id}>Todo id: {todo.id}</div>)
        )}
      </div>
    </>
  );
}

export default Tarefas;
