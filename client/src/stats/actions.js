import {
  FETCH_RUNS,
  FETCH_MATCH_RUNS,
  FETCH_TIME_DATA,
  FETCH_BAR_DATA,
  FETCH_BATSMEN
} from './types';

export const fetchRuns = payload => ({
  type: FETCH_RUNS,
  payload
});

export const fetchMatchRuns = payload => ({
  type: FETCH_MATCH_RUNS,
  payload
});

export const fetchTimeData = (payload, labelValue) => ({
  type: FETCH_TIME_DATA,
  payload,
  labelValue
});

export const fetchBarData = payload => ({
  type: FETCH_BAR_DATA,
  payload
});

export const fetchBatsmen = () => ({
  type: FETCH_BATSMEN
});
