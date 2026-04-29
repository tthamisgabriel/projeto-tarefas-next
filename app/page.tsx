import { buscarTarefas } from "@/data/tarefas";
import ListaDeTarefas from "./tarefas-page";

export default async function Home() {
  const tarefasIniciais = await buscarTarefas();

  return <ListaDeTarefas tarefasIniciais={tarefasIniciais} />;
}