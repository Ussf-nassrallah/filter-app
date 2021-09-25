import React from 'react'
import './ListItem.scss'

function ListItem({ item: {title, serviceTime, deliveryFee, category, cuisine, rating, price, coverSrc} }) {
  return (
    <div className="listItem-wrap">
      <img src={coverSrc} alt={title} />

      <header>
        <h4>{title}</h4>
        <span>{rating} ⭐</span>
      </header>

      <footer>
        <p>
          <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </footer>
    </div>
  )
}

export default ListItem
