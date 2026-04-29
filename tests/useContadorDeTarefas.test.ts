import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

describe("useContadorDeTarefas", () => {
  it("retorna quantidade correta de tarefas", () => {
    const tarefas = [
      { id: 1, titulo: "Tarefa 1" },
      { id: 2, titulo: "Tarefa 2" },
      { id: 3, titulo: "Tarefa 3" },
    ];

    const { result } = renderHook(() =>
      useContadorDeTarefas(tarefas)
    );

    expect(result.current).toBe(3);
  });

  it("retorna zero para lista vazia", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas([])
    );

    expect(result.current).toBe(0);
  });
});