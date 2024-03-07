// @flow
import * as React from 'react';
import Image from "next/image";

interface Props  {
    src: string
    alt: string
    width: number | string
    height: number | string
    classname ?: string
}

export function ImageView({src, alt, width, height, classname = ''}: Props) {
    return (
        <Image src={src} alt={alt} width={Number(width)} height={Number(height)} className={classname}/>
    )
}