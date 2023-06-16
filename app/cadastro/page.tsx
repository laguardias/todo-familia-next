"use client";

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
import { toast } from "react-hot-toast";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sexo, setSexo] = useState("");
  const [cor, setCor] = useState("");
  const [idade, setIdade] = useState("");
  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/register", {
        nome,
        sobrenome,
        email,
        senha,
        sexo,
        cor,
        idade,
      });
      toast.success("Usuário registrado! Faça Login.");
      router.push("/login");
    } catch (error) {
      toast.error("Um erro aconteceu. Tente novamente!");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <h1 className="pt-20 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Cadastro
      </h1>
      <form className="flex flex-col justify-center gap-4" onSubmit={onSubmit}>
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

        <div className="flex justify-center pt-4">
          <Button onClick={onSubmit}>Cadastrar</Button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
