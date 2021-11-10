import axios from "axios";

const instance = axios.create({
	baseURL: 'https://www.thecocktaildb.com'
})

export const getCocktails = () => {
	return instance.get(
		"/api/json/v1/1/filter.php?c=Cocktail"
	)
}

module.export = { getCocktails, getMap }