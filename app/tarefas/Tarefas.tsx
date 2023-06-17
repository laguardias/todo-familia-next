"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.css";
import { deleteTodo } from "../actions/deleteTodo";

type Props = {
  todos: any[];
};

function Tarefas({ todos }: Props) {

  async function handleDelete(id: string) {
    await deleteTodo(id); 
  }

  return (
    <>
      <div className={styles.tarefasContainer}>
        {todos?.length === 0 ? (
          <div>Não existem tarefas a serem feitas!</div>
        ) : (
          todos?.map((todo) => (
            <div key={todo.id} className={styles.todoContainer}>
              <div>{todo.body}</div>
              <div>
                <Button variant="ghost">Editar</Button>
                <Button variant="destructive" onClick={() => handleDelete(todo.id)}>Deletar</Button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Tarefas;
