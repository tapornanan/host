import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const StyledSimpleText = styled.h4`
    font-size: xx-large;
    border-bottom: 4px solid lightgray;
    color: red;
    margin: 0 0 20px;
    padding: 20px 0;
    text-transform: capitalize;
`

const StyledCard = styled.div`
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 8px;
    max-width: 540px;
    margin: 20px auto;
`

const StyledParagraph = styled.p`
    color: goldenrod;
`

const useSimpleText = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // async operations
        setTimeout(() => {
            setIsReady(true)
        }, 1_000)
    }, [])

    return {
        isReady,
    }
}


const SimpleText = ({ text = 'default text', content = null }) => {
    const { isReady } = useSimpleText();
    return isReady && (
        <StyledCard>
            <StyledSimpleText>{text}</StyledSimpleText>
            <StyledParagraph>
                {content 
                    ? content 
                    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            </StyledParagraph>
        </StyledCard>
    ) 
}

export default SimpleText