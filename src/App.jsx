import { useState } from 'react';
import { CoffeeCard } from './CoffeeCard';

function Encabezado() {
  return (
    <div style={{ backgroundColor: '#8B4513', color: 'white', padding: '20px', borderRadius: '10px' }}>
      <h1 style={{ margin: 0 }}>☕ Mi Cafetería Virtual ☕</h1>
      <p style={{ margin: '5px 0 0 0' }}>El mejor código se escribe con café</p>
    </div>
  );
}

export default function App() {
  const [pedidos, setPedidos] = useState(0);

  const menu = [
    { id: 1, nombre: 'Capuchino', precio: 45 },
    { id: 2, nombre: 'Latte', precio: 50 },
    { id: 3, nombre: 'Espresso', precio: 30 },
    { id: 4, nombre: 'Moka', precio: 55 }
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif', textAlign: 'center' }}>
      
      <Encabezado />

      <div style={{ margin: '30px 0' }}>
        <h2>Cafés ordenados: {pedidos}</h2>
        <button 
          onClick={() => setPedidos(pedidos + 1)}
          style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>
          ¡Ordenar un café!
        </button>
        <button 
          onClick={() => setPedidos(0)}
          style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Cancelar órdenes
        </button>
      </div>

      <h2>Menú del día</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {menu.map((cafe) => (
          <CoffeeCard 
            key={cafe.id} 
            nombre={cafe.nombre} 
            precio={cafe.precio} 
          />
        ))}
      </div>

    </div>
  );
}