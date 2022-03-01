/* 
 NOTE: 
*/

import { createContext, useState } from "react";
import { getCocktails } from "../api/api";

export const CooktailContext = createContext({});

function CooktailContextProvider({ children }) {
    const [drinks, setDrinks] = useState([])

    const handleCoktails = () => {
        getCocktails()
            .then(response => {
                setDrinks(response.data.drinks)
            })
    }

    return (
        <CooktailContext.Provider value={{
            handleCoktails,
            drinks
        }}>
            {children}
        </CooktailContext.Provider>
    )
}

export default CooktailContextProvider;
