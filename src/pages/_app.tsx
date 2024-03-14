import "@/styles/globals.css";
import "@/styles/icons.css";

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation';

import type {AppProps} from "next/app";
import {Layout} from "@/components";
import {Lato, Quicksand} from "next/font/google";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {ToastContainer} from "react-toastify";

const queryClient = new QueryClient()

const qiucksand = Quicksand({subsets: ['latin']})
const lato = Lato({
    weight: ['100', '300'],
    subsets: ['latin'],
    variable: '--font-lato'
})

export default function App({Component, pageProps}: AppProps) {


    return (
        <>
            <style jsx global>
                {`
                html {
                    font-family: ${qiucksand.style.fontFamily}, sans-serif;
                    --font-lato: ${lato.style.fontFamily}, sans-serif
                }
                `}
            </style>

            <QueryClientProvider client={queryClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
                <ReactQueryDevtools initialIsOpen={false} />
                <ToastContainer
                    position="top-right"
                    autoClose={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    theme="light"
                />
            </QueryClientProvider>
        </>

    )
}