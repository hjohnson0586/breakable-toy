import React from 'react'

const PartTile = props => {
  return(
    <div className="part-tile-css">
      <h3 className="part-tile-header">Specifications</h3>
        <p>{props.cpu}</p>
        <p>{props.cooler}</p>
        <p>{props.motherboard}</p>
        <p>{props.gpu}</p>
        <p>{props.ram}</p>
        <p>{props.storage}</p>
        <p>{props.psu}</p>
        <p>{props.case}</p>
    </div>
  )
}

export default PartTile
