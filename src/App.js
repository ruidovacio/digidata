import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Digimon from './componentes/Digimon';
import Boton from './componentes/Boton';


function App() {
  const [post, setPost] = useState([]);
  const [listaRender, setListaRender] = useState([]);
  const [selector, setSelector] = useState('');

  useEffect(() => {
    const obtenerDatos = async () => {
      const url = 'https://digimon-api.vercel.app/api/digimon';
      const result = await axios.get(url);
      const datos = result.data.map((objeto, i) => {
        return { index: (i + 1), ...objeto }
      })
      console.log(datos);
      setPost(datos);
      setListaRender(datos);
    }
    obtenerDatos();

  }, []);

  if (!post) return null;

  const ordernarDatos = (tipo) => {
    let nuevaLista = []
    if (tipo == 'In Training'){
      nuevaLista = post.filter((digi) => digi.level == 'In Training' || digi.level == 'Fresh' || digi.level == 'Training')

    } else {
    nuevaLista = post.filter((digi) => digi.level == tipo)
  }
    console.log(nuevaLista);
    setListaRender(nuevaLista);
  }

  const resetDatos = () => {
    setListaRender(post);
  }

  return (
    <div className="App">
      <div className='titulo-contenedor'>
        <h1 className='titulo'>digidata</h1>
        <div className='nav'>
          <Boton accion={ordernarDatos}>In Training</Boton>
          <Boton accion={ordernarDatos}>Rookie</Boton>
          <Boton accion={ordernarDatos}>Champion</Boton>
          <Boton accion={ordernarDatos}>Mega</Boton>
          <Boton accion={ordernarDatos}>Ultimate</Boton>
          <Boton accion={ordernarDatos}>Armor</Boton>
          <Boton accion={resetDatos}>All</Boton>
        </div>
      </div>

      <div className='cargando'>
        {listaRender.length === 0 && <p>Cargando...</p>}
      </div>
      <div className='digimones'>
        {listaRender.map((digi) => (
          <Digimon
            id={digi.index}
            nombre={digi.name}
            imagen={digi.img}
            nivel={digi.level} />
        ))}

      </div>
    </div>
  );
}

export default App;
