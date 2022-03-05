import styled from "styled-components"

const FooterArea = styled.footer`
    width: 100%;
    padding-bottom: 10px;
    position: absolute;
    bottom: 0;
    text-align: center;

    span {
        position relative;
        font-weight: 600;
        cursor: pointer;
        
        &:hover::before {
            transform: scaleX(1);
        }

        &::before {
            content: "";
            width: 100%;
            height: 2px;
            position: absolute;
            bottom: -2px;
            background-color: rgba(255, 255, 255, 0.7);
            transform: scaleX(0);
            transition: all ease-in-out 0.2s;
        }
    }
`

export default function Footer() {
    return (
        <FooterArea>
            Created by <span>
                <a
                    href="https://www.github.com/rafael-orige"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Rafael Vargas
                </a>
            </span>
        </FooterArea>
    )
}