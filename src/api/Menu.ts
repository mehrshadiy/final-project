import {apiClient} from "@/api";

export async function getMenuApiCall() {
    return await apiClient.get('/menus',{
        params:{
            populate: '*'
        }
    })
}