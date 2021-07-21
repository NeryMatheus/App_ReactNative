/*
Deixa a primeira palavra de uma letra em maiúsculo
Ex: exemplo -> Exemplo
*/

const capitalizeFirstLetter = string => {
	return string[0].toUpperCase() + string.slice(1)
}

export default capitalizeFirstLetter;