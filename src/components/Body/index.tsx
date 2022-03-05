import { useEffect, useState } from "react";

import Container from "../Container";
import Header from "../Header";
import Form from "../Form";
import EmojiArea from "../EmojiArea";
import Warning from "../Warning";
import Footer from "../Footer";

import fetchEmojis from "../../services/api";

import { EmojiList } from "../../types/EmojiList";

export default function Body() {
    const [emojiList, setEmojiList] = useState<EmojiList>();
    const [warning, setWarning] = useState<string>("");
    const [warningState, setWarningState] = useState<boolean>(false);

    async function searchEmojis(searchType: string, query: string) {
        setWarningState(false);
        if (searchType === "search" && query !== "") {
            setEmojiList(await fetchEmojis(searchType, query));
        } else if (searchType === "popular") {
            setEmojiList(await fetchEmojis(searchType, query));
        } else {
            setWarningState(true);
            setWarning("You must type something before searching.");
        }
    }

    useEffect(() => {
        const getEmojis = async () => {
            setEmojiList(await fetchEmojis("popular", ""))
        }
        getEmojis();
    }, [])

    useEffect(() => {
        if (emojiList && emojiList.totals === 0) {
            setWarningState(true);
            setWarning("There are no emojis for this")
            console.log("Putz");
        }
    }, [emojiList])

    return (
        <Container>
            <Header />
            <Form SubmitSearch={searchEmojis} />
            {emojiList && emojiList.totals > 0 && warningState === false &&
                <EmojiArea EmojiList={emojiList} />
            }
            {warningState === true &&
                <Warning WarningText={warning} />
            }

            <Footer />
        </Container>
    );
};