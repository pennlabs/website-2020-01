import React, { useState } from 'react'
import posed from 'react-pose'

const roleColors = {
  Designer: '#E4D9FF',
  Developer: '#C1F5E9',
  Director: '#FFEAB6',
  Business: '#D1F7C4',
}

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 },
})

const AlumniCard = props => {
  const { alum } = props
  if (!alum) return null

  // TODO why is this not just alum.name?
  const { website, job, company, graduation_year, student } = alum
  const [hovering, setHovering] = useState(false)

  return (
    <div className="column is-one-third">
      <Square
        pose={hovering ? 'hovered' : 'idle'}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Link href={`/member?name=${website}`}>
          <a>
            <div className="card" style={{ borderRadius: 5, borderWidth: 0 }}>
              <div className="card-content">
                <h1
                  className="has-text-weight-bold"
                  style={{
                    fontWeight: 500,
                    fontSize: '1.5rem',
                    marginBottom: 0,
                    paddingBottom: 0,
                  }}
                >
                  {student.name + " '" + graduation_year}
                </h1>
                <em style={{ fontSize: 14, paddingTop: 0, marginTop: 0 }}>
                  {' '}
                  {`${job} @ ${company}`}{' '}
                </em>
                <div style={{ display: 'flex', marginTop: 10 }}>
                  <p className="is-size-6 has-text-grey-light">Roles: </p>
                  <div className="tags" style={{ paddingLeft: 5 }}>
                    {props.alum.roles.map(role => (
                      <span
                        className="tag is-rounded"
                        style={{ backgroundColor: roleColors[`${role}`] }}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </Square>
    </div>
  )
}

export default AlumniCard
