"use client";

import React from "react";
import { useRef } from "react";
import { createTodo } from "@/app/actions/createTodo";
import styles from "./page.module.css";
import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  authorId: string;
};

function Form({ authorId }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const title = data.get("title");
    if (typeof title !== "string" || !title) return;

    await createTodo(title, authorId);
    formRef.current?.reset();
  }

  return (
    <>
      <form className={styles.inputContainer} ref={formRef} action={action}>
        <Input
          type="text"
          placeholder="Escreva algo a ser feito"
          name="title"
        />
        <div className={styles.buttonDiv}>
          <Button type="submit">Adicionar</Button>
        </div>
      </form>
    </>
  );
}

export default Form;
