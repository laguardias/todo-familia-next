'use client'

import { useRef } from 'react'
import { createTodo } from '@/app/actions/createTodo'

import styles from "./page.module.css";
import { toast } from "react-hot-toast";
import axios from "axios";
import { FormEventHandler, useEffect, useState } from "react";
import getTodos from "../actions/getTodos";

function Tarefas({ todos }) {

  const formRef = useRef<HTMLFormElement>(null)

  async function action(data: FormData) {
    const title = data.get('title')
    if (typeof title !== 'string' || !title) return

    await createTodo(title)
    formRef.current?.reset()
  }

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
      <form className={styles.inputContainer} ref={formRef} action={action}>
        <input
          type="text"
          placeholder="Escreva algo a ser feito"
          name="title"
        />
        <div className={styles.buttonDiv}>
          <button type="submit">Adicionar</button>
        </div>
      </form>
      <div className={styles.tarefasContainer}>
        {todos.length === 0 ? (
          <div>Não existem tarefas a serem feitas!</div>
        ) : (
          todos.map((todo) => <div key={todo.id}>Todo id: {todo.id}</div>)
        )}
      </div>
    </>
  );
}

export default Tarefas;
