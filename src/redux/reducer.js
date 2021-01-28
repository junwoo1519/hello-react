const initialState = {
    popup: false,
    sideMenu: false,
    count: 1,
    todos: [],
    todoDetail: {},
}


export const Action = {
    Types: {
        UPDATE_STATE:"UPDATE_STATE",
        SET_TODOS: "SET_TODOS",
        SET_TODO_DETAIL: "SET_TODO_DETAIL",
        GET_TODOS: "GET_TODOS"
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),

        handleCount: (payload) => {
            return {
                type: Action.Types.HANDLE_COUNT,
                payload

            }
        },

        handleSideMenu: (payload) => ({
            type: Action.Types.HANDLE_SIDE_MENU,
            payload
        }),

        setTodos: (payload) => {
            return {
                type: Action.Types.SET_TODOS,
                payload
            }
        },

        todoDetail: (payload) => ({
            type: Action.Types.SET_TODO_DETAIL,
            payload
        }),

        getTodos: (payload) => ({
            type: Action.Types.GET_TODOS,
        })
    }

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:return state;

        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }

        case Action.Types.HANDLE_POPUP: {
            return {
                ...state,
                popup: action.payload
            }
        }
        case Action.Types.HANDLE_COUNT: {
            return {
                ...state,
                count: action.payload
            }
        }
        case Action.Types.HANDLE_SIDE_MENU: {
            return {
                ...state,
                sideMenu: action.payload
            }
        }
        case Action.Types.SET_TODOS: {
            return {
                ...state,
                todos: action.payload
            }
        }
        case Action.Types.SET_TODO_DETAIL: {
            return {
                ...state,
                todoDetail: action.payload
            }
        }
    }
}

export default reducer;