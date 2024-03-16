import {apiClient} from "@/api/index";
import {ApiResponseType} from "@/types";
import {CategoryType} from "@/types/api/Category";

export function getFeatureCategory(): Promise<ApiResponseType<CategoryType>> {
    return apiClient.get('/categories', {
        params: {
            populate: 'thumbnail',
            filters: {
                is_featured: {
                    $eq: true
                }
            }
        }
    })
}