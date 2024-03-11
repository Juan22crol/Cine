import { getAllMovies, getTopMovies } from "../services/services";
import { setAllPelis,  setTopPelis} from "./slice";


export const fetchAllMovies = () => {
    return async (dispatch) => {

        try {
            const res = await getAllMovies();

            
            const data = await res.json();
            const pelis = data.results.slice(0,10);
            console.log(pelis)

            dispatch(setAllPelis({ pelis: pelis })) //Bien

        } catch (error) {
            //Notificar error con dispatch
        }
    }
}

export const fetchTopMovies = () => {
    return async (dispatch) => {

        try {
            const res = await getTopMovies();

            
            const data = await res.json();
            const peliculas = data.results.slice(0,3);
            console.log(peliculas)

            dispatch(setTopPelis({ pelis: pelis }))

        } catch (error) {
            //Notificar error con dispatch
        }
    }
}