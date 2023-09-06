import { FC, useCallback, useContext } from "react"
import { SearchContext } from "../contexts/SearchContext"

export type HTMLInputEvent = {target: {value: string, name: string}};

interface PropsInterface {};

export const Search: FC<PropsInterface> = () => {
    const {value, setValue} = useContext(SearchContext)!;

    const onChange = useCallback((event: HTMLInputEvent) => {
        setValue(event.target.value)
    }, [setValue]);

    const onClear = useCallback(() => {
        setValue("");
    }, [setValue]);

    return (
        <div>
        <input value={value} onChange={onChange} type="text" placeholder="Enter city"/>
        <button>Search</button>
        </div>
    )
}