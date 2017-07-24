import {FETCH_PHOTOGRAPHERS} from '../../actions/photo/index';
const INITIAL_STATE = {
    all: [],
    user: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PHOTOGRAPHERS:
            return {
                ...state, all: action.payload.data
            };
        default:
            return state;
    }
}