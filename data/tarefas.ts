export type Tarefa = {
  id: number;
  titulo: string;
};

export async function buscarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve([
    { id: 1, titulo: "Estudar testes unitários" },
    { id: 2, titulo: "Criar componente de nova tarefa" },
    { id: 3, titulo: "Testar hook personalizado" },
  ]);
}