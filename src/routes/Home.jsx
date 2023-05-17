import { useState } from 'react';
import { useEffect } from 'react'

export default function Home() {
  const [color, setColor] = useState('green');

  useEffect(() => {
    if(color === '#dc3545') {
      alert('Comunista');
    }
  }, [color]);

  return (
    <div>
      <div
        style={{
          padding: 12,
          marginBottom: 21,
          backgroundColor: color,
          color: 'white',
        }}
      >
        <p>Teste de Elemento colorido - {color}</p>
      </div>

      <div
        class="d-flex gap-2"
        style={{ padding: 9, flexWrap: 'wrap', backgroundColor: '#dfdfdf' }}
      >
        <button
          onClick={() => setColor('#0d6efd')}
          type="button"
          className="btn btn-primary"
        >
          Primary
        </button>
        <button
          onClick={() => setColor('#6c757d')}
          type="button"
          className="btn btn-secondary"
        >
          Secondary
        </button>
        <button
          onClick={() => setColor('#198754')}
          type="button"
          className="btn btn-success"
        >
          Success
        </button>
        <button
          onClick={() => setColor('#dc3545')}
          type="button"
          className="btn btn-danger"
        >
          Danger
        </button>
        <button
          onClick={() => setColor('#ffc107')}
          type="button"
          className="btn btn-warning"
        >
          Warning
        </button>
        <button
          onClick={() => setColor('#0dcaf0')}
          type="button"
          className="btn btn-info"
        >
          Info
        </button>
        <button
          onClick={() => setColor('#AFAFAF')}
          type="button"
          className="btn btn-light"
        >
          Light
        </button>
        <button
          onClick={() => setColor('#212529')}
          type="button"
          className="btn btn-dark"
        >
          Dark
        </button>
      </div>
    </div>
  );
}
