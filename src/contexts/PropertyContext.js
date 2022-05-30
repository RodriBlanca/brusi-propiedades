import React, { createContext, useState } from 'react';

export const PropertyContext = createContext();

export const PropertyProvider = ({children}) => {
    const [propertyDetail, setPropertyDetail] = useState({});

    return(
        <PropertyContext.Provider value={[propertyDetail, setPropertyDetail]}>
            {children}
        </PropertyContext.Provider>
    );
}
