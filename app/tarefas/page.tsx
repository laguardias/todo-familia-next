"use client";

import styles from "./page.module.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

function Tarefas() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <h1 className={styles.title}>
          Tarefas da Família {session?.user.email}
        </h1>
        <h1 className={styles.title2}>Olá {session?.user.email}</h1>

        <Input type="text" placeholder="Escreva algo a ser feito" />

        <Button>Adicionar</Button>
      </div>
    </div>
  );
}

export default Tarefas;
