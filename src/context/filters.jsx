import { createContext, useState } from "react";

// Este es el que tenemos que consumir
export const FiltersContext = createContext()

// Este es el que nos provee de contexto al contexto
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 250
    })

    return (
        <FiltersContext.Provider value={{ 
            filters, 
            setFilters 
            }}
        >
            {children}
        </FiltersContext.Provider>
    )
}