import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NovaTarefa from "@/components/NovaTarefa";

describe("NovaTarefa", () => {
  it("renderiza input e botão", () => {
    render(<NovaTarefa aoAdicionar={jest.fn()} />);

    expect(screen.getByPlaceholderText("Digite uma tarefa")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Adicionar" })).toBeInTheDocument();
  });

  it("não adiciona tarefa vazia", async () => {
    const aoAdicionar = jest.fn();
    const user = userEvent.setup();

    render(<NovaTarefa aoAdicionar={aoAdicionar} />);

    await user.click(screen.getByRole("button", { name: "Adicionar" }));

    expect(aoAdicionar).not.toHaveBeenCalled();
  });

  it("adiciona tarefa digitada", async () => {
    const aoAdicionar = jest.fn();
    const user = userEvent.setup();

    render(<NovaTarefa aoAdicionar={aoAdicionar} />);

    await user.type(screen.getByPlaceholderText("Digite uma tarefa"), "Estudar Jest");
    await user.click(screen.getByRole("button", { name: "Adicionar" }));

    expect(aoAdicionar).toHaveBeenCalledWith("Estudar Jest");
  });
});