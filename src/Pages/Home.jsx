import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Banner from '../components/Banner';
import DishesBlock from "../components/DishesBlock";
import About from "../components/About";
import Map from "../components/Map";
import Categories from "../components/Categories";
import Skeleton from '../components/DishesBlock/Skeleton';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SearchContext } from '../App';
import { fetchDish } from '.././Redux/Slices/dishSlice'



function Home() {
    const activeCategories = useSelector(state => state.categorySlice.activeCategories); //redux вытаскиваем активный id из категорий для фильтрации
    const { dishItems, status } = useSelector((state) => state.dish);
    const dispatch = useDispatch()
    const { searchValue } = React.useContext(SearchContext);

    React.useEffect(() => {
        async function fetchData() {
            const search = searchValue ? `?search=${searchValue}` : '';
            dispatch(fetchDish({ search }))
        }
        fetchData()
    }, [searchValue])



    return (
        <>
            {!searchValue && <Banner />}
            <Categories />
            <div className='swiper-wrapper'>
                <Swiper slidesPerView={5} loop={true} >
                    {status === 'loading'
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
                            {status === 'loading'
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
                            {status === 'loading'
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