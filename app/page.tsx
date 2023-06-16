// import getUsers from "./actions/getUsers";

const lastThreeUsers = [
  { id: 1, sobrenome: "Silva" },
  { id: 2, sobrenome: "Santos" },
  { id: 3, sobrenome: "Souza" },
];

export default async function Home() {
  //   const users = await getUsers();
  //   const lastThreeUsers = users.slice(-5).reverse();

  return (
    <div>
      <div>
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Bem vindo
          </h1>
          <p>
            Este é um <i>WebApp</i> para ajudar na organização das tarefas da{" "}
            <strong>sua Família</strong>. O que deve ser feito? Escreva aqui e
            todos saberão!
          </p>
          <h2>O que essa App faz?</h2>
          <ul>
            <li>
              Você pode organizar as tarefas da sua família neste App, como por
              exemplo &quot;comprar manteiga no supermercado&quot;.
            </li>
            <li>
              Adicione membros da sua família no App. Assim eles poderão ler,
              escrever ou deletar tarefas.
            </li>
            <li>
              Não se esqueça de abrir o App e conferir as tarefas diariamente!
            </li>
            <li>
              Abandone os recadinhos na geladeira ou lista de compras no papel!
            </li>
          </ul>
          <div>
            <h2>Últimas 5 Famílias cadastradas:</h2>
            {lastThreeUsers.map((user) => (
              <div key={user.id}>
                <p>
                  <span>🌞</span>
                  {user.sobrenome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
