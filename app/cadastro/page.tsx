"use client";

import styles from "./page.module.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-hot-toast"
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sexo, setSexo] = useState("");
  const [cor, setCor] = useState("");
  const [idade, setIdade] = useState("");

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/register", {
        nome,
        sobrenome,
        email,
        senha,
        sexo,
        cor,
        idade,
      })
      .then(() => toast.success("User has been registered"))
      .catch(() => toast.error("An error occurred!"));
  };

  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <h1 className={styles.title}>Cadastro</h1>
        <form className={styles.form} onSubmit={onSubmit}>
          <div>
            <Label htmlFor="name">Seu primeiro nome</Label>
            <Input
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              type="nome"
              id="nome"
              placeholder="Nome"
            />
          </div>
          <div>
            <Label htmlFor="sobrenome">Nome da sua Família</Label>
            <Input
              onChange={(e) => setSobrenome(e.target.value)}
              value={sobrenome}
              type="sobrenome"
              id="sobrenome"
              placeholder="Sobrenome"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <Label htmlFor="senha">Senha</Label>
            <Input
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
              type="password"
              id="senha"
              placeholder="Senha"
            />
          </div>
          <div>
            <Label htmlFor="sexo">Sexo</Label>
            <Input
              onChange={(e) => setSexo(e.target.value)}
              value={sexo}
              type="sexo"
              id="sexo"
              placeholder="sexo"
            />
          </div>
          <div>
            <Label htmlFor="cor">cor</Label>
            <Input
              onChange={(e) => setCor(e.target.value)}
              value={cor}
              type="cor"
              id="cor"
              placeholder="cor"
            />
          </div>
          <div>
            <Label htmlFor="idade">idade</Label>
            <Input
              onChange={(e) => setIdade(e.target.value)}
              value={idade}
              type="idade"
              id="idade"
              placeholder="idade"
            />
          </div>
          {/*           <div>
            <Label htmlFor="sexo">Selecione seu Sexo</Label>
            <Select onValueChange={(e) => setSexo(e.target.value)} defaultValue={''}>
              <SelectTrigger className="w-[245px]">
                <SelectValue placeholder="Sexo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Selecione seu sexo</SelectLabel>
                  <SelectItem value={'masculino'}>
                    Masculino
                  </SelectItem>
                  <SelectItem value={'feminino'}>
                    Feminino
                  </SelectItem>
                  <SelectItem value={'sem-resposta'}>
                    Não Responder
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="cor">Selecione uma Cor</Label>
            <Select>
              <SelectTrigger className="w-[245px]">
                <SelectValue placeholder="Cor" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Selecione uma Cor</SelectLabel>
                  <SelectItem value="azul">Azul</SelectItem>
                  <SelectItem value="verde">Verde</SelectItem>
                  <SelectItem value="preto">Preto</SelectItem>
                  <SelectItem value="rosa">Rosa</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="idade">Selecione uma Faixa Etária</Label>
            <Select>
              <SelectTrigger className="w-[245px]">
                <SelectValue placeholder="Idade" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Selecione uma Faixa Etária</SelectLabel>
                  <SelectItem value="idade-a">0 a 20 anos</SelectItem>
                  <SelectItem value="idade-b">21 a 30 anos</SelectItem>
                  <SelectItem value="idade-c">31 a 50 anos</SelectItem>
                  <SelectItem value="idade-d">51 ou mais anos</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div> */}
          <div className={styles.cadastrar}>
            <Button onClick={onSubmit}>Cadastrar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
