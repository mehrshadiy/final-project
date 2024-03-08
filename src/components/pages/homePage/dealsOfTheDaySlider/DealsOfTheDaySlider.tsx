import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductDealsCard} from "@/components";

interface Props {
    sliderData: Array<any>
}

export function DealsOfTheDaySlider({sliderData}: Props) {
    return (
        <>
            <Swiper
                spaceBetween={16}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={true}
                breakpoints= {{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 22
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 22
                    }
                }
                }
            >
                {
                    sliderData.map((slideData, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProductDealsCard data={slideData}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}