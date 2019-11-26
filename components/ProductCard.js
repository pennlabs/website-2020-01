import React, { useState } from 'react'
import posed from 'react-pose'

import Link from 'next/link'

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 },
})

const ProductCard = ({
  href,
  img,
  title,
  titleChild,
  tag,
  descChild,
  desc,
}) => {
  const [hovering, setHovering] = useState(false)

  return (
    <div className="column is-half">
      <Square
        pose={hovering ? 'hovered' : 'idle'}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Link href={href}> 
          <a>
            <div className="card" style={{ borderRadius: 5, borderWidth: 0 }}>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    {img ? (
                      <figure className="image is-64x64">
                        <img src={img} alt="Placeholder image" />
                      </figure>
                    ) : (
                      <div />
                    )}
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <div style={{ paddingBottom: '0.5rem' }}>
                        {titleChild ? (
                          titleChild
                        ) : (
                          <p className="title is-4">{title}</p>
                        )}
                        {tag}
                      </div>
                      {descChild ? descChild : desc}
                    </div>
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

export default ProductCard
