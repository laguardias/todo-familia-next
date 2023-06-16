'use client'

import { useRef } from 'react'
import { createTodo } from '@/app/actions/createTodo'

import styles from "./page.module.css";
import { toast } from "react-hot-toast";
import { FormEventHandler, useEffect, useState } from "react";
import getTodos from "../actions/getTodos";

type Props = {
  todos: any[];
  authorId: string
}

function Tarefas({ todos, authorId }: Props) {

  const formRef = useRef<HTMLFormElement>(null)

  async function action(data: FormData) {
    const title = data.get('title')
    if (typeof title !== 'string' || !title) return

    console.log("action data:", data)
    console.log("action data title:", title)
    await createTodo(title, authorId)
    formRef.current?.reset()
  }

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
        {todos?.length === 0 ? (
          <div>Não existem tarefas a serem feitas!</div>
        ) : (
          todos?.map((todo) => <div key={todo.id}>Todo id: {todo.body}</div>)
        )}
      </div>
    </>
  );
}

export default Tarefas;
