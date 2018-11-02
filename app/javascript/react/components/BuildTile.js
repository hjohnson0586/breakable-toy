import React from 'react'

const BuildTile = props => {
  let buildIndexHTML = props.builds.map(build => {
    return(
      <div key={build.id} >
        <div>
          <h3><a href={`/builds/${build.id}`}>{build.name}</a></h3>
            <p>{build.description}</p>
            <p>${build.price}</p>
        </div>
      </div>
    )
  })
  return(
    <div>
      {buildIndexHTML}
    </div>
  )
}

export default BuildTile
