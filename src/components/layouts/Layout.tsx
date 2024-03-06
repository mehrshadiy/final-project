import {Header} from "@/components";
import {Footer} from "@/components";
import React, {ReactNode} from "react";

interface Props {
    children : ReactNode
}

export function Layout({children} : Props) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}