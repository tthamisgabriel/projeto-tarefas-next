"use client";

import { useState } from "react";

type Props = {
  aoAdicionar: (titulo: string) => void;
};

export default function NovaTarefa({ aoAdicionar }: Props) {
  const [titulo, setTitulo] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!titulo.trim()) return;

    aoAdicionar(titulo);
    setTitulo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}