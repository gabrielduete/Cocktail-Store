/* 
 NOTE: This component was created to implement the use of React Context in the project,
 but the project is very old and with very bad syntax, so 
 I preferred to learn how to use react context through another project.

 Think about the scalability of your projects hehe!
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
