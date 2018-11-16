import React from 'react'

const Hexagon = props => {
  const {resource, vert, sides} = props.gameOptions
  const vertices = props.board.vertices
  const edges = props.board.edges

  return (
    <div className="hexagon-container">
      <div
        id={vert[1]}
        style={{
          transform: `translate(${-50 + props.cityAdjust}%, -50%)`
        }}
        className={`city city-1 ${vertices[vert[1]].color}`}
      />
      <div
        id={vert[2]}
        style={{
          transform: `translate(${-50 + props.cityAdjust}%, -50%)`
        }}
        className={`city city-2 ${vertices[vert[2]].color}`}
      />
      {props.anchor && (
        <div
          id={vert[3]}
          className={`city city-3 ${vertices[vert[3]].color}`}
          style={{transform: `translate(${props.anchorAdjust}%, -50%)`}}
        />
      )}
      {props.bottomLeftAnchor && (
        <div
          id={vert[4]}
          className={`city city-4 ${vertices[vert[4]].color}`}
          style={{
            transform: `translate(${-50 + props.cityAdjust}%, -50%)`
          }}
        />
      )}
      {props.bottomRightAnchor && (
        <div
          id={vert[6]}
          className={`city city-6 ${vertices[vert[6]].color}`}
          style={{
            transform: `translate(${props.anchorAdjust || 0}%, -50%)`
          }}
        />
      )}
      {props.bottomAnchor && (
        <div
          id={vert[5]}
          className={`city city-5 ${vertices[vert[5]].color}`}
          style={{
            transform: `translate(${-50 + props.cityAdjust}%, -50%)`
          }}
        />
      )}
      <div style={{...props.style}} className="hexagon">
        <div
          id={resource}
          className={`inner-hexagon hexagon-image ${props.image}`}
        />
        <div className="row">
          <div
            id={sides[1]}
            className={`side side-1 ${edges[sides[1]].color}`}
          />
          <div
            id={sides[2]}
            className={`side side-2 ${edges[sides[2]].color}`}
          />
        </div>
        <div className="row row-middle">
          <div
            id={sides[3]}
            className={`side side-3 ${edges[sides[3]].color}`}
          />
          <div
            id={sides[4]}
            className={`side side-4 ${edges[sides[4]] &&
              edges[sides[4]].color}`}
          />
        </div>
        <div className="row">
          <div
            id={sides[5]}
            className={`side side-5 ${edges[sides[5]] &&
              edges[sides[5]].color}`}
          />
          <div
            id={sides[6]}
            className={`side side-6 ${edges[sides[6]] &&
              edges[sides[6]].color}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Hexagon
