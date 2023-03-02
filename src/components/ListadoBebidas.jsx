import React from 'react'
import { Row } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import Bebida from './Bebida'

const ListadoBebidas = () => {

    const {bebidas} = useBebidas()
  return (
    <Row>
        {bebidas.map((item)=>(
            <Bebida key={item.idDrink} item = {item}></Bebida>
        ))}
    </Row>
  )
}

export default ListadoBebidas