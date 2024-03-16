import {apiClient} from "@/api/config";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Products";

interface Props {
    populate?: Array<'thumbnail' | 'categories' | 'gallery'>
    filters?: {}
    sort?: Array<string>
    pagination?: {
        withCount?: boolean
        page?: number
        pageSize?: number
        start?: number
        limit?: number
    }
}
export function getAllProductCall ({populate, filters = {}, sort = [], pagination = {}}: Props): Promise<ApiResponseType<ProductType>> {


  return apiClient.get('/products',{
      params: {
          populate: populate?.join(','),
          filters: filters,
          sort: sort,
          pagination: pagination
      }
  })
}