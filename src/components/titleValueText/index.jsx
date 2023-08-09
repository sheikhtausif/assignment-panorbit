import React from 'react'

import './index.css'

const TitleValueText = ({title, value}) => {
  return (
    <div className='title-value-container'>
      <p className='title-text'>{title} :</p>
      <p className='value-text'>{value}</p>
    </div>
  )
}

export default TitleValueText;