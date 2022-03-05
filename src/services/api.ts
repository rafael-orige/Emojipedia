import { EmojiList } from "../types/EmojiList";

export default async function fetchEmojis(searchType: string, query: string) {
    let url: string = "https://api.emojisworld.fr/v1/";
    switch (searchType) {
        case "popular":
            url = url + searchType + "/";
            break;

        case "search":
            url = url + searchType + "?q=" + query;
            break;
    }
    try {
        var response = await fetch(url);
        var json: EmojiList = await response.json();
    } catch (error) {
        var json: EmojiList = {
            totals: 0,
            results: [
                {
                    category: { id: 0, name: "" },
                    children: [
                        { id: 0, name: "" }
                    ],
                    count: 0,
                    emoji: "",
                    id: 0,
                    name: "",
                    sub_category: { id: 0, name: "" },
                    unicode: ""
                }
            ]
        }
        console.log("Deu errado... ", error);
    }
    console.log(json);
    return json;
}