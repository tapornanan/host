import React, { useEffect, useState } from 'react';


const useSimpleText = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
        }, 3_000)
    }, [])

    return {
        isReady,
    }
}


const SimpleText = ({ text = 'default text'}) => {
    const { isReady } = useSimpleText();
    return isReady && (
        <h1 style={{
            color: "blue",
            fontWeight: 'bold'
        }}>{text}</h1>
    ) 
}

export default SimpleText