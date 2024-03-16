import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductVerticalList} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Products";
import {getAllProductCall} from "@/api/Product";

interface Props {

}

export function BottomSlider({}: Props) {

    const {data: topSellingData} = useQuery<ApiResponseType<ProductType>>({
        queryKey: [getAllProductCall.name, 'topSelling'],
        queryFn: () => getAllProductCall(
            {
                populate: ['thumbnail'],
                filters: {is_top_selling: {$eq: true}},
                pagination: {
                    page: 1,
                    pageSize: 3,
                    withCount: false
                }
            }
        )
    })
    const {data: trendingProductData} = useQuery<ApiResponseType<ProductType>>({
        queryKey: [getAllProductCall.name, 'trendingProduct'],
        queryFn: () => getAllProductCall(
            {
                populate: ['thumbnail'],
                filters: {is_trending: {$eq: true}},
                pagination: {
                    page: 1,
                    pageSize: 3,
                    withCount: false
                }
            }
        )
    })
    const {data: RecentlyAddedData} = useQuery<ApiResponseType<ProductType>>({
        queryKey: [getAllProductCall.name, 'RecentlyAdded'],
        queryFn: () => getAllProductCall(
            {
                populate: ['thumbnail'],
                sort: ['id:desc'],
                pagination: {
                    page: 1,
                    pageSize: 3,
                    withCount: false
                }
            }
        )
    })
    const {data: topRateData} = useQuery<ApiResponseType<ProductType>>({
        queryKey: [getAllProductCall.name, 'topRate'],
        queryFn: () => getAllProductCall(
            {
                populate: ['thumbnail'],
                sort: ['rate:desc'],
                pagination: {
                    page: 1,
                    pageSize: 3,
                    withCount: false
                }
            }
        )
    })


    return (
        <>
            <Swiper
                spaceBetween={16}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 18
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 22
                    }
                }
                }
            >
                {
                    topSellingData && topSellingData.data.length > 0 &&
                    <SwiperSlide>
                    {
                        topSellingData &&
                        <ProductVerticalList title={"Top Selling"} data={topSellingData.data}/>
                    }
                </SwiperSlide>
                }

                {
                    trendingProductData && trendingProductData.data.length > 0 &&
                    <SwiperSlide>
                    {
                        trendingProductData &&
                        <ProductVerticalList title={"Trending Products"} data={trendingProductData.data}/>
                    }
                </SwiperSlide>
                }

                {
                    RecentlyAddedData && RecentlyAddedData.data.length > 0 &&
                    <SwiperSlide>
                    {
                        RecentlyAddedData &&
                        <ProductVerticalList title={"Recently Added"} data={RecentlyAddedData.data}/>
                    }
                </SwiperSlide>
                };

                {
                    topRateData && topRateData.data.length > 0 &&
                    <SwiperSlide>
                        {
                            topRateData &&
                            <ProductVerticalList title={"Top Rated"} data={topRateData.data}/>
                        }
                    </SwiperSlide>
                }
            </Swiper>
        </>
    )
}