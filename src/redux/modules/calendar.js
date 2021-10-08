import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { firestore } from '../../shared/firebase'; 
import moment from 'moment';

// action
const SET_PLAN = 'SET_PLAN';
const ADD_PLAN = 'ADD_PLAN';
const UPDATE_PLAN = 'UPDATE_PLAN';
const DELETE_PLAN = 'DELETE_PLAN';

// action creators
const setPlan = createAction(SET_PLAN, (plan_list) => ({plan_list}));
const addPlan = createAction(ADD_PLAN, (plan) => ({plan}));
const updatePlan = createAction(UPDATE_PLAN,(plan_id) => ({plan_id}));
const deletePlan = createAction(DELETE_PLAN,(plan_id) =>({plan_id}));

// initialState
const initialState ={
    list:[
        // {title: 'event 1', date: '2021-10-01 12:00:00'},
        // {title: '코딩하기', date: '2021-10-06 18:00:00'},
    ],
}

const initialPlan = {
    title: 'title',
    date: '2021-10-14 10:00:00',
    completed: false
}


// middleware
const setPlanFB = () =>{
    return function (dispatch, getState, {history}){
        const planDB = firestore.collection('plans');

        planDB.get().then((docs) =>{
            let plan_list = [];

            docs.forEach((doc)=>{
                // console.log(doc.id, doc.data());
                let plan = {
                    id:doc.id,
                    title: doc.title,
                    date : doc.date,
                    completed: doc.completed,
                    ...doc.data()
                }
                plan_list.push(plan);
            })

            // console.log(plan_list);
            
            dispatch(setPlan(plan_list));
        })
    }
}

const addPlanFB = (title, date) =>{
    return function (dispatch, getState, {history}){
        const planDB = firestore.collection('plans');

        const _plan = {
            ...initialPlan,
            title:title,
            date:moment(date).format('YYYY-MM-DD HH:mm:ss'),
            completed: false
        };
        // console.log(_plan)

        // id 추가
        planDB
        .add({..._plan})
        .then((doc) =>{
            let plan = {..._plan, id:doc.id};
            console.log(plan);
            // 리덕스에 추가
            dispatch(addPlan(plan));
            history.replace('/');
        }).catch((err) =>{
            console.log('일정 등록 실패', err)
        })
    }
}

const updatePlanFB = (id) => {
    return function (dispatch, getState, {history}){
        const planDB = firestore.collection('plans');
        planDB
        .doc(id)
        .update({completed:true})
        .then(() =>{
            dispatch(updatePlan(id))
        }
    }
}

// reducer
export default handleActions(
    {
        [SET_PLAN]: (state, action) => produce(state, (draft) =>{       
            draft.list = action.payload.plan_list
        }),

        [ADD_PLAN]: (state, action) => produce(state, (draft) =>{
            draft.list.unshift(action.payload.plan)
        }),
    },
    initialState
)

// export
const actionCreators ={
    setPlan,
    addPlan,
    setPlanFB,
    addPlanFB,
    updatePlanFB
}

export {actionCreators}