import React from 'react'
import btn from "./Button.module.css"

function Button() {
  return (
    <div className={`d-flex ${btn.container}`}>
        <div className={btn.items}>
            <i className="bi bi-heart"></i>
            <span>Like</span>
        </div>
        <div className={btn.items}>
            <i className="bi bi-bookmark"></i>
            <span>BookMark</span>
        </div>   
    </div>
  )
}

export {Button} 