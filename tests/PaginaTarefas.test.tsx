import { render, screen } from "@testing-library/react";
import ListaDeTarefas from "@/app/tarefas-page";

describe("Página de Tarefas", () => {
  it("renderiza tarefas iniciais corretamente", () => {
    const tarefasIniciais = [
      { id: 1, titulo: "Tarefa A" },
      { id: 2, titulo: "Tarefa B" },
    ];

    render(<ListaDeTarefas tarefasIniciais={tarefasIniciais} />);

    expect(screen.getByText("Lista de Tarefas")).toBeInTheDocument();

    expect(screen.getByText("Total de tarefas: 2")).toBeInTheDocument();

    expect(screen.getByText("Tarefa A")).toBeInTheDocument();
    expect(screen.getByText("Tarefa B")).toBeInTheDocument();
  });
});