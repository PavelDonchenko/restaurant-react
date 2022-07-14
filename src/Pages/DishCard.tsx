import React, { Dispatch } from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/img/card/arrow-back.svg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { addItems } from '../Redux/Slices/cartSlice';
import { useAppDispatch } from '../Redux/store';

function DishCard() {

    const {id} = useParams()
    const [dish, setDish] = React.useState<{
		imageUrl: string,
		text: string,
		title: string,
		count: number,
		weight: number,
		price: number,
		id: string,
	}>()
	
    const navigate = useNavigate()

    React.useEffect(() => {
        async function fetchDish(){
            try {
                const dishData = await axios.get(`https://62ba0099ff109cd1dc9f5a3f.mockapi.io/dishes/${id}`)
                setDish(dishData.data)
            } catch (error) {
                alert('Error getting dish')
                navigate('/')
            }
        }
        fetchDish()
    }, [])

    const dispatch = useAppDispatch()

    const onClickAddCartItem = () => {
		if(dish){
			dispatch(addItems(dish))
		}
    }
	
	if(!dish){
		return <>Идет загрузка...</>
	}

  return (
    <section className="card">
				<div className="card__container">
					<Link to = "/">
					    <div className="card__title">
    						<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    							<circle cx="13" cy="13" r="13" fill="url(#paint0_linear_9072_1137)"/>
    							<path d="M9.46967 12.4697C9.17678 12.7626 9.17678 13.2374 9.46967 13.5303L14.2426 18.3033C14.5355 18.5962 15.0104 18.5962 15.3033 18.3033C15.5962 18.0104 15.5962 17.5355 15.3033 17.2426L11.0607 13L15.3033 8.75736C15.5962 8.46447 15.5962 7.98959 15.3033 7.6967C15.0104 7.40381 14.5355 7.40381 14.2426 7.6967L9.46967 12.4697ZM11 12.25L10 12.25L10 13.75L11 13.75L11 12.25Z" fill="white"/>
    							<defs>
    							<linearGradient id="paint0_linear_9072_1137" x1="1.25806" y1="1.47727" x2="29.0993" y2="14.4163" gradientUnits="userSpaceOnUse">
    							<stop stopColor="#618967"/>
    							<stop offset="1" stopColor="#72A479"/>
    							</linearGradient>
    							</defs>
    							</svg>
    						Вернуться назад
    					</div>
					</Link>
					<div className="card__item item-card">
						<div className="item-card__image-ibg">
							<a><img className="item-card__arrow-hiden" src={arrowIcon} alt="icon" /></a>
							<img src={`/${dish.imageUrl}`} alt="фото ягненка" />
						</div>
						<div className="item-card__description description-card">
							<h3 className="description-card__title">{dish.title}</h3>
							<p className="description-card__text">{dish.text}
							</p>
							<div className="description-card__weight">Вес: {dish.weight} г</div>
							<div className="description-card__backet">
								<button onClick={onClickAddCartItem} className="description-card__btn">Корзина</button>
								<div className="description-card__price">{dish.price} ₽</div>
							</div>
							<div className="description-card__nutritional nutritional-card">
								<div className="nutritional-card__item">
									<div>Белки</div>
									<div>17.23</div>
								</div>
								<div className="nutritional-card__item">
									<div>Жиры</div>
									<div>7.63</div>
								</div>
								<div className="nutritional-card__item">
									<div>Углеводы</div>
									<div>22.35</div>
								</div>
								<div className="nutritional-card__item">
									<div>Ккал</div>
									<div>234</div>
								</div>
								<div className="nutritional-card__item">
									<div>Вес</div>
									<div>210 г</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  )
}

export default DishCard