import {
    FETCH_RUNS,
    RUNS_RECEIVED,
    RUNS_ERROR,
    FETCH_MATCH_RUNS,
    MATCH_RUNS_RECEIVED,
    MATCH_RUNS_ERROR,
    FETCH_TIME_DATA,
    TIME_DATA_RECEIVED,
    TIME_DATA_ERROR,
    FETCH_BAR_DATA,
    BAR_DATA_RECEIVED,
    BAR_DATA_ERROR
} from './types'

const initial_state = {
    runs: [],
    runs_match: [],
    time_data: [],
    time_label: '',
    bar_data: {},
    requesting: false,
    successful: false,
    error: null
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case FETCH_RUNS:
            return {
                ...state,
                requesting: true,
                successful: false
            };
        case RUNS_RECEIVED:
            return {
                ...state,
                requesting: false,
                successful: true,
                runs: action.response
            };
        case RUNS_ERROR:
            return {
                ...state,
                requesting: false,
                successful: false,
                error: action.error
            };

        case FETCH_MATCH_RUNS:
            return {
                ...state,
                requesting: true,
                successful: false
            }
        case MATCH_RUNS_RECEIVED:
            return {
                ...state,
                requesting: false,
                successful: true,
                runs_match: action.response
            };
        case MATCH_RUNS_ERROR:
            return {
                ...state,
                requesting: false,
                successful: false,
                error: action.error
            };

        case FETCH_TIME_DATA:
            return {
                ...state,
                requesting: true,
                successful: false
            }
        case TIME_DATA_RECEIVED:
            return {
                ...state,
                requesting: false,
                successful: true,
                time_data: action.response,
                time_label: action.labelVal
            };
        case TIME_DATA_ERROR:
            return {
                ...state,
                requesting: false,
                successful: false,
                error: action.error
            };

        case FETCH_BAR_DATA:
            return {
                ...state,
                requesting: true,
                successful: false
            }
        case BAR_DATA_RECEIVED:
            return {
                ...state,
                requesting: false,
                successful: true,
                bar_data: action.response
            };
        case BAR_DATA_ERROR:
            return {
                ...state,
                requesting: false,
                successful: false,
                error: action.error
            };
        default:
            return { ...state }
    }
}