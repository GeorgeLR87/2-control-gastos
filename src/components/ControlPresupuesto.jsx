import { useState, useEffect } from 'react';

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)

        const totalDisponible = presupuesto - totalGastado

        setDisponible(totalDisponible)
        setGastado(totalGastado)
    }, [gastos])

    const formatearCatidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
  <div className='contenedor-presupuesto contenedor sombra dos-columnas'>

      <div>
         <p>Grafica Aquí</p>     
      </div>

      <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span> {formatearCatidad(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span> {formatearCatidad(disponible)}
            </p>

            <p>
                <span>Gastado: </span> {formatearCatidad(gastado)}
            </p>
      </div>

  </div>);
};

export default ControlPresupuesto;
