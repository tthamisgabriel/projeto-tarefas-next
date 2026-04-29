"use client";

import { useState } from "react";
import NovaTarefa from "@/components/NovaTarefa";
import { Tarefa } from "@/data/tarefas";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

type Props = {
  tarefasIniciais: Tarefa[];
};

export default function ListaDeTarefas({ tarefasIniciais }: Props) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  function adicionarTarefa(titulo: string) {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo,
    };

    setTarefas([...tarefas, novaTarefa]);
  }

  const contador = useContadorDeTarefas(tarefas);

  return (
    <main>
      <h1>Lista de Tarefas</h1>

      <p>Total de tarefas: {contador}</p>

      <NovaTarefa aoAdicionar={adicionarTarefa} />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.titulo}</li>
        ))}
      </ul>
    </main>
  );
}