import {takeLatest, call, put} from "redux-saga/effects"
import {Action} from "./reducer";
import API from "../api";

const saga = function* () {
    yield takeLatest(Action.Types.GET_TODOS, function* (action) {
        const result = yield call(API.getTodos);
        if (result.data)
        yield put(Action.Creators.updateState({
            todos: result.data
        }))
    })
}

export default saga;