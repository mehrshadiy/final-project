import React from "react";
import { twMerge } from 'tailwind-merge'

interface Props {
    classname?: string
    children: React.ReactNode
}

export function Section({classname = '', children}: Props) {
    return (
        <section className={ twMerge("container mb-[68px]", classname)}>
            {children}
        </section>
    )
}