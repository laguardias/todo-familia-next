"use client";

import Link from "next/link";
import styles from "./header.module.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSession, signOut } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <h2 className={styles.title}>Lista de tarefas da </h2>
        <h1 className={styles.family}>sua Família</h1>
        <div className={styles.links}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Dialog>
            <DialogTrigger>Ajuda</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Como utilizar este WebApp</DialogTitle>
                <DialogDescription>
                  Descrever o funcionamento do APP quando estiver pronto.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          {!session && (
            <>
              <Link className={styles.link} href="/login">
                Login
              </Link>
              <Link className={styles.link} href="/cadastro">
                Cadastro
              </Link>
            </>
          )}

          {session && (
            <>
              <Link className={styles.link} href="/tarefas" onClick={() => signOut()}>
                Tarefas
              </Link>
              <Link className={styles.link} href="#" onClick={() => signOut()}>
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;