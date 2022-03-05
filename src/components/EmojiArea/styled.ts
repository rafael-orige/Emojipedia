import styled from "styled-components";

export const EmojiList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
    width: inherit;
    padding: 0;
    padding-bottom: 50px;
`

export const Emoji = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100px;
    height: 150px;
    padding: 5px;
    margin: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin-top: 10px;
    text-transform: capitalize;
    overflow: hidden;
`

export const EmojiIcon = styled.div`
    font-size: 27px;
    margin-bottom: 10px;
`

export const EmojiUnicode = styled.div`

`

export const EmojiName = styled.div`
    font-weight: 600;
    max-width: 80px;
    max-height: 65px;
    text-overflow: ellipis;
    overflow: hidden;
`;
