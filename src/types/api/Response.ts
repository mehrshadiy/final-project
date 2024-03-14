export interface ApiResponseType<T> {
    data: EntityType<T>[]
    meta: MetaType
}

export interface EntityType<T> {
    id: number
    attributes: T
}


export interface PopulateType<T> {
    data: [EntityType<T>]
}

export interface MetaType {
    pagination: Pagination
}

export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}