import React, { createContext, useState } from 'react';

export const MenuSectionsContext = createContext();

export const MenuSectionsProvider = ({children}) => {
    const [menuSection, setMenuSection] = useState('Inicio');

    return(
        <MenuSectionsContext.Provider value={[menuSection, setMenuSection]}>
            {children}
        </MenuSectionsContext.Provider>
    );
}
