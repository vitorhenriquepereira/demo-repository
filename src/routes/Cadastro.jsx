import { useState } from 'react';

export default function Cadastro() {
  const [nome, setNome] = useState('Vitor');

  return (
    <form action="#" method="post">
      <fieldset>
        <div className="form-group mb-3">
          <label htmlFor="nome">Informe seu nome abaixo:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>

        <h2>{nome}</h2>
      </fieldset>
    </form>
  );
}
