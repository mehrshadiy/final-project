import * as React from 'react';
import Link from "next/link";
import {IconBox} from "@/components";
import {EntityType, MenuItemType} from "@/types";
import {useMenu} from "@/hooks";
import {useState} from "react";
import {useOverlay} from "@/hooks/useOverlay";


export function Menu() {

    const [showCategoryMenu, setShowCategoryMenu] = useState<boolean>(false)

    const {data: mainMenuItem} = useMenu({position: 'main_menu'})
    const {data: categoryMenuItems} = useMenu({position: 'brows-category'})

    useOverlay({
    onClick: () => {
        setShowCategoryMenu(false)
    }
    })

    const categoryMenuBtnClickHandler = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation()
        setShowCategoryMenu((prevState) => !prevState)
    }
    const categoryBodyClickHandler = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation()
    }

    return (
        <>
            <div className={'relative'}>
                <div onClick={categoryMenuBtnClickHandler}
                     className="inline-flex cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
                    <IconBox icon={"icon-apps"} size={24} link={'#'} title={"Browse All Categories"}
                             titleClasName={"text-medium"}/>
                    <IconBox icon={"icon-angle-small-down"} size={24}/>
                </div>

                <div onClick={categoryBodyClickHandler}
                     className={`${showCategoryMenu ? 'flex' : 'hidden'} lg:absolute z-20 bg-white left-0 top-16 lg:w-[500px] rounded-[5px] lg:border-[1px] border-green-300 lg:p-[30px] hover:cursor-default`}>
                    <div className="flex flex-wrap justify-between gap-y-[15px]">

                        {
                            categoryMenuItems &&
                            categoryMenuItems.data.map((item: EntityType<MenuItemType>, index: number) => {
                                return (
                                    <IconBox key={index} icon={item.attributes.icon_name} size={30}
                                             link={item.attributes.link}
                                             linkClassName={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300"}
                                             title={item.attributes.title}
                                             titleClasName={"text-heading-sm text-blue-300"}
                                             path={item.attributes.icon_path}/>
                                )
                            })
                        }

                        <div id="more_categories"
                             className="cursor-pointer flex gap-4 items-center lg:justify-center w-full mt-[17px]">
                            <IconBox icon={'icon-add'} size={24} title={'More Categories'} titleClasName={"text-heading-sm text-blue-300"}/>
                        </div>
                    </div>
                </div>
            </div>


            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">

                    {
                        mainMenuItem &&
                        mainMenuItem.data.map((item: EntityType<MenuItemType>, index: number) => {
                            return (

                                <li key={index}>
                                    {
                                        item.attributes.icon_name ?
                                            <IconBox link={item.attributes.link} icon={item.attributes.icon_name}
                                                     size={24} title={item.attributes.title}/>
                                            : <Link href={item.attributes.link} className={"flex items-center gap-1"}>
                                                {item.attributes.title}
                                            </Link>
                                    }
                                </li>)
                        })
                    }

                </ul>
            </nav>
        </>
    );
}