import {
    FETCH_INFO,
    INFO_RECEIVED,
    INFO_ERROR
} from './types';

const initial_state = {
    info: {},
    error: null,
    requesting: false,
    successful: false
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case FETCH_INFO:
            return {
                ...state,
                requesting: true,
                    successful: false
            };
        case INFO_RECEIVED:
            return {
                ...state,
                requesting: false,
                    successful: true,
                    info: action.response
            };
        case INFO_ERROR:
            return {
                ...state,
                requesting: false,
                    successful: false,
                    error: action.error
            };
        default:
            return {
                ...state
            };
    }
};