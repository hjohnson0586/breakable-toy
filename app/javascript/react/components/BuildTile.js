import React from 'react'

const BuildTile = props => {
  let buildIndexHTML = props.builds.map(build => {
    return(
      <div key={build.id}>
        <div>
          <h3><a className="build-title" href={`/builds/${build.id}`}>{build.name}</a></h3>
            <p className="build-description">{build.description}</p>
            <p className="build-price">${build.price}</p>
        </div>
      </div>
    )
  })
  return(
    <div className="build-tile-css">
      {buildIndexHTML}
    </div>
  )
}

export default BuildTile
