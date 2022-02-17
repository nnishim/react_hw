import React from 'react'
import './Card.css'

function Card({img, title, icon1, icon2, icon3, info, cook1, cook2, cook3, price}) {
	return (
		<div className="card">
			<img src={img} alt="" className='card__img' />
			<div className="card__text">
				<div className="card__text-top">
					<h3 className="card__title">{title}</h3>
					<div className="card__icons">
						<img src={icon1} alt="" className="card__icon" />
						<img src={icon2} alt="" className="card__icon" />
						<img src={icon3} alt="" className="card__icon" />
					</div>
				</div>
				<p className="card__info">{info}</p>
				<div className="card__cooking">
					<span className="card__span">{cook1}</span>
					<span className="card__span">{cook2}</span>
					<span className="card__span">{cook3}</span>
				</div>
				<div className="card__price">
					<h3 className="card__price-title">{price}</h3>
					<a href="#" className="card__btn">Order</a>
				</div>
			</div>
		</div>
	)
}

export default Card;