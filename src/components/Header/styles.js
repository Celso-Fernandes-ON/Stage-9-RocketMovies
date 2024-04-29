import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    grid-area: header;
    height: 105px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    gap: 64px;
    align-items: center;

    padding: 0 80px;

    > a {
        font-size:  24px;
        color: ${({theme}) => theme.COLORS.SALMON};
        text-align: center;
        font-weight: 700;
    }

`
export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    >img{
        height: 56px;
        width: 56px;
        border-radius: 50%;
    }
    >div{
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;
        text-align: right;
        width: max-content;

        
        span{
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
        strong{
            display: inline;
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
    `