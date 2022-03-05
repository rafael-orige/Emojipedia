import styled from "styled-components";

export const FormArea = styled.form`
    display: flex;
    justify-content: center;
`;

export const SearchBox = styled.input`
    width: 90%;
    height: 40px;
    padding: 10px;
    border-radius: 10px 0 0 10px;
    border: none;
    outline: none;
    background-color: #f2f2f2;

    &::placeholder {
        color: #202124;
    }
`;

export const SubmitButton = styled.input`
    height: 40px;
    outline: none;
    border: none;
    border-radius: 0 10px 10px 0;
    padding: 10px 20px;
    border-left: 2px solid #202124;
    background-color: #f2f2f2;
`;

export const ClearSearchArea = styled.div`
    max-width: 30px;
    margin: auto;
`

export const ClearSearch = styled.p`
    position: relative;
    text-align: center;
    font-size: 13px;
    cursor: pointer;
    text-align: center;

    &:hover::before {
        transform: scaleX(1);
    }

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.8);
        bottom: 0;
        transform: scaleX(0);
        transition: all ease-in-out 0.2s;
    }
`