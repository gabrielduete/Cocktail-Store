import axios from "axios";

const instance = axios.create({
	baseURL: 'https://www.thecocktaildb.com'
})

export const getCocktails = async () => {
	const response = await instance.get(
		"/api/json/v1/1/filter.php?c=Cocktail"
	)
	return response
}

module.export = { getCocktails }