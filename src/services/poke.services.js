
const API = "https://pokeapi.co/api/v2/pokemon";

export const List = async (pokemon) => {
    try {
        const response = await fetch(`${API}/${pokemon}`);
        const data = await  response.json();

        return data;
    } catch (error) {
        
        return null;
    }
}

