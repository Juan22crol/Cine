import { getTopMovies } from "../../services/services";
import { setPelis } from "./topMovies";


export const fetchTopMovies = () => {
    return async (dispatch) => {

        try {
            const res = await getTopMovies();

            
            const data = await res.json();
            const peliculas = data.results.slice(0,3);
            console.log(peliculas)

            dispatch(setPelis({ peliculas: peliculas }))

        } catch (error) {
            //Notificar error con dispatch
        }
    }
}