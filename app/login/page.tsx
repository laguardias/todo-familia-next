"use client";

import styles from "./page.module.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {signIn} from 'next-auth/react';
import { toast } from "react-hot-toast";

function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const loginUser = async(e) => {
    e.preventDefault()
    signIn('credentials', {
      email: email,
      password: senha,
      redirect: false,
    })
    .then((callback) => {
      if(callback?.error){
        toast.error(callback.error)
      }

      if(callback?.ok && !callback?.error){
        toast.success('Logged in successfully8!')
      }

    } )
  }

  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={loginUser}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Email"
              required /* why doesn't work? */
            />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              type="password"
              id="password"
              placeholder="Senha"
              required /* why doesn't work? */
            />
          </div>
          <div className={styles.login}>
            <Button onClick={loginUser}>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
