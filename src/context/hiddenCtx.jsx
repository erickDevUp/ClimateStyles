import React, {useState} from "react"

const HiddenCtx = React.createContext({})

export const HeddCtx = ({ children }) => {
    const [hidden, setHidden] = useState(false);

    return(<HiddenCtx.Provider value={{hidden, setHidden}}>
        {children}
    </HiddenCtx.Provider>
)
}

export default HiddenCtx;

