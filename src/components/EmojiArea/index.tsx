import * as E from "./styled";
import { EmojiList } from "../../types/EmojiList";

type Props = {
    EmojiList: EmojiList
}

export default function EmojiArea({ EmojiList }: Props) {
    return (
        <E.EmojiList>
            {EmojiList.results.map((item, index) => (
                <E.Emoji
                    key={index}
                    title=
                    {
                        item.name
                            .split(" ")
                            .map(item => item.charAt(0).toUpperCase() + item.substring(1))
                            .join(" ")
                    }
                >
                    <E.EmojiIcon>{item.emoji}</E.EmojiIcon>
                    <E.EmojiUnicode>{item.unicode}</E.EmojiUnicode>
                    <E.EmojiName>{item.name}</E.EmojiName>
                </E.Emoji>
            ))}
        </E.EmojiList>
    );
};