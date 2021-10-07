import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { firestore, storage } from '../../shared/firebase'; 


// action
const SET_PLAN = 'SET_PLAN';
const ADD_PLAN = 'ADD_PLAN';

// action creators
const setPlan = createAction(SET_PLAN, (plan_list) => ({plan_list}));
const addPlan = createAction(ADD_PLAN, (plan) => ({plan}));


// initialState
const initialState ={
    list:[
        // {title: 'event 1', date: '2021-10-01 12:00:00'},
        // {title: '코딩하기', date: '2021-10-06 18:00:00'},
    ],
}

// const initialPlan = {
//     title: 'event 1',
//     date: '2021-10-01'

// }


// middleware
const getPlanFB = () =>{
    return function (dispatch, getState, {history}){
        const planDB = firestore.collection('plans');

        planDB.get().then((docs) =>{
            let plan_list = [];

            docs.forEach((doc)=>{
                // console.log(doc.id, doc.data());
                let plan = {
                    id:doc.id,
                    title: doc.data().title,
                    date : doc.data().date
                }
                plan_list.push(plan);
            })

            // console.log(plan_list);
            
            dispatch(setPlan(plan_list));
        })
    }
}

// reducer
export default handleActions(
    {
        [SET_PLAN]: (state, action) => produce(state, (draft) =>{
            draft.list.push(...action.payload.plan_list);
        }),

        [ADD_PLAN]: (state, action) => produce(state, (draft) =>{

        })
    },
    initialState
)

// export
const actionCreators ={
    setPlan,
    addPlan,
    getPlanFB
}

export {actionCreators}