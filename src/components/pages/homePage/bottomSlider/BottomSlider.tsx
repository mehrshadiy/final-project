import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductVerticalList} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Products";
import {getAllProductCall} from "@/api/Product";
import {InView} from "react-intersection-observer";

interface Props {

}

export function BottomSlider({}: Props) {

    const {data: topSellingData, refetch: topSellingDataRefetch} = useQuery<ApiResponseType<ProductType>>({
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
        ),
        enabled: false
    })
    const {data: trendingProductData, refetch: trendingProductDataRefetch} = useQuery<ApiResponseType<ProductType>>({
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
        ),
        enabled: false
    })
    const {data: RecentlyAddedData, refetch: RecentlyAddedDataRefetch} = useQuery<ApiResponseType<ProductType>>({
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
        ),
        enabled: false
    })
    const {data: topRateData, refetch: topRateDataRefetch} = useQuery<ApiResponseType<ProductType>>({
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
        ),
        enabled: false
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
                    <InView as="div" onChange={(inView) => inView && topSellingDataRefetch()}>

                        {
                            topSellingData && topSellingData.data.length > 0 &&
                            <SwiperSlide>
                                {
                                    topSellingData &&
                                    <ProductVerticalList title={"Top Selling"} data={topSellingData.data}/>
                                }
                            </SwiperSlide>
                        }
                    </InView>
                }

                {
                    <InView as="div" onChange={(inView) => inView && trendingProductDataRefetch()}>
                        {
                            trendingProductData && trendingProductData.data.length > 0 &&
                            <SwiperSlide>
                                {
                                    trendingProductData &&
                                    <ProductVerticalList title={"Trending Products"} data={trendingProductData.data}/>
                                }
                            </SwiperSlide>
                        }
                    </InView>
                }

                {
                    <InView as="div" onChange={(inView) => inView && RecentlyAddedDataRefetch()}>
                        {
                            RecentlyAddedData && RecentlyAddedData.data.length > 0 &&
                            <SwiperSlide>
                                {
                                    RecentlyAddedData &&
                                    <ProductVerticalList title={"Recently Added"} data={RecentlyAddedData.data}/>
                                }
                            </SwiperSlide>
                        }
                    </InView>
                };

                {
                    <InView as="div" onChange={(inView) => inView && topRateDataRefetch()}>
                        {
                            topRateData && topRateData.data.length > 0 &&
                            <SwiperSlide>
                                {
                                    topRateData &&
                                    <ProductVerticalList title={"Top Rated"} data={topRateData.data}/>
                                }
                            </SwiperSlide>
                        }
                    </InView>
                }
            </Swiper>
        </>
    )
}