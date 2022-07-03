import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Banner from '../components/Banner';
import DishesBlock from "../components/DishesBlock";
import About from "../components/About";
import Map from "../components/Map";
import Categories from "../components/Categories";
import Skeleton from '../components/DishesBlock/Skeleton';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SearchContext } from '../App';




function Home() {
    const activeCategories = useSelector(state => state.categorySlice.activeCategories); //redux вытаскиваем активный id из категорий для фильтрации

    const { searchValue } = React.useContext(SearchContext);
    const [dishItems, setDishitems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        async function fetchData() {
            try {
                const search = searchValue ? `?search=${searchValue}` : '';
                const dishesItemResponse = await axios.get(`https://62ba0099ff109cd1dc9f5a3f.mockapi.io/dishes${search}`);
                setDishitems(dishesItemResponse.data);
                setIsLoading(false)
            }
            catch (Error) {
                console.log('error, problem with getting dishes');
            }
        }
        fetchData()
    }, [searchValue])

   

    return (
        <>
            {!searchValue && <Banner />}
            <Categories />
            <div className='swiper-wrapper'>
                <Swiper slidesPerView={5} loop={true} >
                    {isLoading
                        ? [...new Array(6)].map((_, id) => <SwiperSlide key={id}><Skeleton key={id} /></SwiperSlide>)
                        : (
                            dishItems.filter((elem) => elem.category === activeCategories).map((dish) => (
                                <SwiperSlide key={dish.id}>
                                    <DishesBlock
                                        key={dish.id}
                                        {...dish}
                                    />
                                </SwiperSlide>
                            ))
                        )}
                </Swiper>
            </div>

            {!searchValue && (
                <>
                    <div className="dish__title title">ХОЛОДНЫЕ ЗАКУСКИ</div>
                    <div className='swiper-wrapper'>
                        <Swiper slidesPerView={5} loop={true} >
                            {isLoading
                                ? [...new Array(6)].map((_, id) => <SwiperSlide key={id}><Skeleton key={id} /></SwiperSlide>)
                                : (
                                    dishItems.filter((elem) => elem.category === 0).map((dish) => (
                                        <SwiperSlide key={dish.id}>
                                            <DishesBlock
                                                key={dish.id}
                                                {...dish}
                                            />
                                        </SwiperSlide>
                                    ))
                                )}
                        </Swiper>
                    </div>
                </>
            )}

            {!searchValue && (
                <>
                    <div className="dish__title title">ГОРЯЧИЕ ЗАКУСКИ</div>
                    <div className="swiper-wrapper">
                        <Swiper slidesPerView={5} loop={true}>
                            {isLoading
                                ? [...new Array(6)].map((_, id) => <SwiperSlide key={id}><Skeleton key={id} /></SwiperSlide>)
                                : (
                                    dishItems.filter((elem) => elem.category === 1).map((dish) => (
                                        <SwiperSlide key={dish.id}>
                                            <DishesBlock
                                                key={dish.id}
                                                {...dish}
                                            />
                                        </SwiperSlide>
                                    ))
                                )}
                        </Swiper>
                    </div>
                </>
            )}

            <About />
            <Map />

        </>
    )
}

export default Home