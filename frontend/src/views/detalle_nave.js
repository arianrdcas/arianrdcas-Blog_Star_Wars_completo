import React, { useContext} from 'react'
import { Context } from '../store/appContext';

const Detalle_Nave = (props) => {

  const { store} = useContext(Context);

  return (
    <>
      <div className="card my-3 bg-transparent fw-bold text-white container" style={{ maxWidth: 1000 }}>
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
                <th scope="col">Model</th>
                <th scope="col">Clase de Nave</th>
                <th scope="col">Manufacturer</th>
                <th scope="col">Longitud</th>
                <th scope="col">Numero de Pasajeros</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="col">{store.single.model}</th>
                <th scope="col">{store.single.vehicle_class}</th>
                <th scope="col">{store.single.manufacturer}</th>
                <th scope="col">{store.single.length}</th>
                <th scope="col">{store.single.passengers}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Detalle_Nave;