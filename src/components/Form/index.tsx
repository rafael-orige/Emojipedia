import React, { useState } from "react";
import * as F from "./style";

type Props = {
    SubmitSearch: (searchType: string, query: string) => void
};

export default function Form({ SubmitSearch }: Props) {
    const [inputValue, setInputValue] = useState<string>("");
    const [clearSearch, setClearSearch] = useState<boolean>(false);

    return (
        <>
            <F.FormArea onSubmit={(event) => {
                event.preventDefault();
                SubmitSearch("search", inputValue);
                setInputValue("");
                setClearSearch(true);
            }}>
                <F.SearchBox
                    type="text"
                    value={inputValue}
                    placeholder="What emoji are you looking for?"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setInputValue(event.target.value) }}
                />
                <F.SubmitButton
                    type="submit"
                    value="Submit"
                />
            </F.FormArea>

            {clearSearch &&
                <F.ClearSearchArea>
                    <F.ClearSearch onClick={() => {
                        setClearSearch(false);
                        SubmitSearch("popular", "")
                    }}>Clear</F.ClearSearch>
                </F.ClearSearchArea>
            }
        </>
    )
}