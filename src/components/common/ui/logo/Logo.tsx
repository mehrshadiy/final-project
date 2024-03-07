// @flow
import * as React from 'react';
import {ImageView} from "@/components";
import Link from "next/link";


export function Logo() {
    return (
        <Link href={'/'}>
            <ImageView src={"/assets/images/Logo.png"} alt={"logo"} height={66} width={242} classname={"w-[117px] lg:w-[242px]"}/>
        </Link>
    )
}