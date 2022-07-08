import React, { useContext} from 'react'
import { Context } from '../store/appContext';

const Detalle_Planeta = (props) => {


  const { store} = useContext(Context);

  return (
    <>
      <div className="card my-3 bg-transparent text-white fw-bold container" style={{ maxWidth: 1000 }}>
        <div className="row g-0 ">
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">Name: {store.single.name}</h3>
              <h4>Descripcion:</h4> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac est eu nibh eleifend auctor sit amet id ex. Integer ullamcorper at diam lobortis pellentesque. In hac habitasse platea dictumst. Nunc metus arcu, gravida pharetra augue vel, convallis sagittis turpis. Morbi vehicula leo eget felis porta aliquet nec vitae turpis. Nullam semper consequat dui, quis scelerisque ligula dictum malesuada. Aliquam fermentum imperdiet sem, placerat facilisis diam posuere sed. Sed nisl odio, viverra et magna et, condimentum facilisis velit. Curabitur pharetra tempor hendrerit. Proin semper purus enim, varius viverra sem rhoncus in. Quisque viverra magna et libero dignissim imperdiet. Donec nibh augue, consectetur at vestibulum id, facilisis eget quam. Nulla tempor sodales sapien, id interdum augue.</p>
            </div>
          </div>
          <hr className="border border-primary border-5"/>
          <table className="table table-borderless text-white">
            <thead>
              <tr>
                <th scope="col">Periodo de Rotacion</th>
                <th scope="col">Periodo Orbital</th>
                <th scope="col">Clima</th>
                <th scope="col">Gravedad</th>
                <th scope="col">Terreno</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="col">{store.single.rotation_period}</th>
                <th scope="col">{store.single.orbital_period}</th>
                <th scope="col">{store.single.climate}</th>
                <th scope="col">{store.single.gravity}</th>
                <th scope="col">{store.single.terrain}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Detalle_Planeta;