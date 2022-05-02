import React, { createContext, useState } from 'react';

export const CheckButtonsContext = createContext();

export const CheckButtonsProvider = ({children}) => {

    const [checkButtons, setCheckButtons] = useState({menu: false})

    return(
        <CheckButtonsContext.Provider value={[checkButtons, setCheckButtons]}>
            {children}
        </CheckButtonsContext.Provider>
    )
}
