import { ON_CHANGE_FORM} from "./types";

export const onChange = (param) => {
    return(dispatch) => {
        console.log({param});
        dispatch({
            type: ON_CHANGE_FORM,
            payload: {param}
        })
    }
}