interface Props {
    badge: string
    price: number
    salePrice?: number
}

export function Badge({badge = '', price, salePrice}: Props) {

    return (
        <>
            {
                badge.length > 0 ?
                    <div
                        className={`badge ${badge.toLowerCase() == 'hot' ? 'badge--hot' : 'badge--sale'}  absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none`}>
                        {badge}
                    </div>
                    :
                    (
                        salePrice ?
                            <div className="badge badge--off absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none">
                                -{(Math.round(salePrice/price*100))}%
                            </div>
                            :
                            <></>
                    )
            }
        </>
    )
}