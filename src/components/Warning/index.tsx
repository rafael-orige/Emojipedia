import styled from "styled-components";

const WarningArea = styled.div`
    margin-top: 50px;
    color: red;
    text-align: center;
`;

type Props = {
    WarningText: string
}

export default function Warning({ WarningText }: Props) {
    return <WarningArea>{WarningText}</WarningArea>
}
