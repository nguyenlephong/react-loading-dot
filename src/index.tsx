import React from 'react'
import './index.css'

export const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="dots"></div>
      <div className="dots"></div>
      <div className="dots"></div>
    </div>
  )
}
