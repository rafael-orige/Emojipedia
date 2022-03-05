export type EmojiList = {
    totals: number,
    results: [
        {
            category: { id: number, name: string },
            children: [
                { id: number, name: string }
            ],
            count: number,
            emoji: string,
            id: number,
            name: string,
            sub_category: { id: number, name: string },
            unicode: string
        }
    ]
}