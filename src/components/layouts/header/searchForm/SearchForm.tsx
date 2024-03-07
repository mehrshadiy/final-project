// @flow
import * as React from 'react';
import {IconBox} from "@/components";

type Props = {
    inputClassName?: string
};

export function SearchForm({inputClassName = ''}: Props) {
    // todo should implement form
    return (
            <form name="search-form" action="#" method="post" className="flex items-center">
                <input type="text" name="search_text" placeholder="Search for items"
                       className={`${inputClassName} text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none`}/>
                <button type="submit">
                    <IconBox icon={'icon-search'}/>
                </button>
            </form>
    )
}