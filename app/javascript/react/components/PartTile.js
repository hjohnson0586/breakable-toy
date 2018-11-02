import React from 'react'

const PartTile = props => {
  let partIndexHTML = props.parts.map(part => {
    return(
      <div key={part.id}>
        <div>
            {part.cpu}
        </div>
      </div>
    )
  })
  return(
    <div>
    <h3>Specifications</h3>
      {partIndexHTML}
    </div>
  )
}

export default PartTile
