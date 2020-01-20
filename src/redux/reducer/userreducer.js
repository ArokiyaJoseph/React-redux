import { CAPTURE_USER_DATA } from "../constant";

const initialState = {
    myData: {
        fName: "",
        lName: ""
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CAPTURE_USER_DATA:
            {
                return {...state, myData: action.payload };
            }

        default:
            return state;
    }
};