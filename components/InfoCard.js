import React from 'react'
import PropTypes from 'prop-types'

const InfoCard = ({ img, imgclassName, titleChild, desc }) => {
  return (
    <div className="column is-half">
      <div className="card" style={{ borderRadius: 5, borderWidth: 0 }}>
        <div className="card-content">
          <div className="media">
            {img ? (
              <div className="media-left">
                <figure className={imgclassName}>
                  <img src={img} alt="Placeholder image" />
                </figure>
              </div>
            ) : (
              <div />
            )}
            <div className="content">
              {titleChild}
              {desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

InfoCard.defaultProps = {
  img: '',
  imgclassName: '',
}

InfoCard.propTypes = {
  img: PropTypes.string,
  imgclassName: PropTypes.string,
  titleChild: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default InfoCard
