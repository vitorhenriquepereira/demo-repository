import { useState } from 'react';
import List from '../componentes/List';

export default function Home() {
  const [formData, setFormData] = useState({
    produto: '',
    quantidade: '1',
    unidadeMedida: 'Kg',
    status: false,
  });

  const [compra, setCompra] = useState([]);

  return (
    <>
      <form
        action="#"
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
          setCompra([...compra, formData]);
        }}
      >
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="produto">Informe um item para a lista:</label>
            <input
              type="text"
              className="form-control"
              id="produto"
              placeholder="Produto"
              value={formData.produto}
              onChange={(event) => setFormData({ ...formData, produto: event.target.value })} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="quantidade">Quantidade do item a ser comprado:</label>
            <input
              type="text"
              className="form-control"
              id="quantidade"
              placeholder="Quantidade"
              value={formData.quantidade}
              onChange={(event) => setFormData({ ...formData, quantidade: event.target.value })} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="unidadeMedida">Unidade de medida do item:</label>
            <input
              type="text"
              className="form-control"
              id="unidadeMedida"
              placeholder="Unidade de Medida"
              value={formData.unidadeMedida}
              onChange={(event) => setFormData({ ...formData, unidadeMedida: event.target.value })} />
          </div>
          <button type="submit" className="btn btn-primary">
            Adicionar Item
          </button>
        </fieldset>
      </form>
      <br />
      <ul>{compra.map((compras) => (
        <List
          key={compras.produto}
          produto={compras.produto}
          quantidade={compras.quantidade}
          unidadeMedida={compras.unidadeMedida}
          status={compras.status}
        />
      ))}
      </ul>
    </>
  );
}
