export function CoffeeCard({ nombre, precio }) {
  return (
    <div style={{ border: '2px solid #8B4513', borderRadius: '10px', padding: '15px', margin: '10px', backgroundColor: '#FFF8DC', color: '#5C4033', width: '150px' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>{nombre}</h3>
      <p style={{ margin: 0, fontWeight: 'bold' }}>${precio} MXN</p>
    </div>
  );
}