import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';


// action
const SET_PLAN = 'SET_PLAN';
const ADD_PLAN = 'ADD_PLAN';

// action creators
const setPlan = createAction(SET_PLAN, (plan_list) => ({plan_list}));
const addPlan = createAction(ADD_PLAN, (plan) => ({plan}));


// initialState
const initialState ={
    list:[],
}

const initialPlan = {
    title: 'event 1',
    date: '2021-10-01'

}


// middleware


// reducer
export default handleActions(
    {
        [SET_PLAN]: (state, action) => produce(state, (draft) =>{

        }),

        [ADD_PLAN]: (state, action) => produce(state, (draft) =>{

        })
    },
    initialState
)

// export
const actionCreators ={
    setPlan,
    addPlan
}

export {actionCreators}