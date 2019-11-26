import React, { useState } from 'react'
import posed from 'react-pose'

import Link from 'next/link'

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 },
})

const MemberCard = ({ url, photo, student, roles }) => {
  const [hovering, setHovering] = useState(false)

  return (
    <div className="column is-one-third">
      <Square
        pose={hovering ? 'hovered' : 'idle'}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Link  href={'/member?name=' + url}>
          <a>
            <div className="card" style={{ borderRadius: 5, borderWidth: 0 }}>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={photo}
                    style={{
                      maxWidth: '100%',
                      objectFit: 'cover',
                      borderRadius: 5,
                      borderWidth: 0,
                    }}
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <h1
                  className="has-text-weight-bold"
                  style={{
                    fontWeight: 500,
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  {student.name}
                </h1>
                <div className="tags">
                  <span className="tag is-rounded">{student.major}</span>
                  {roles.map(role => (
                    <span className="tag is-rounded" key={`tag-${role.name}`}>
                      {role.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        </Link>
      </Square>
    </div>
  )
}

export default MemberCard
