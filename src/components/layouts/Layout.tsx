import {Header} from "@/components/layouts/header/Header";
import {Footer} from "@/components/layouts/footer/Footer";
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