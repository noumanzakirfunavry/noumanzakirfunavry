"use strict";
exports.id = 60;
exports.ids = [60];
exports.modules = {

/***/ 3585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ setUser),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const user = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'user',
    initialState: null,
    reducers: {
        setUser (state, { payload  }) {
            return state = payload != null ? payload : null;
        }
    }
});
const { setUser  } = user.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (user.reducer);


/***/ }),

/***/ 7060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Dj": () => (/* binding */ persistor),
  "h": () => (/* binding */ store),
  "TL": () => (/* binding */ useAppDispatch)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./reducers/AuthSlice.tsx

//import { AuthState } from '../types/Types';
const initialState = {
    token: null,
    isAuthenticated: false
};
const auth = (0,toolkit_.createSlice)({
    name: 'auth',
    initialState,
    reducers: {
        saveToken (state, { payload  }) {
            if (payload) {
                state.token = payload;
            }
        },
        clearToken (state) {
            state.token = null;
        },
        setAuthState (state, { payload  }) {
            state.isAuthenticated = payload;
        }
    }
});
const { saveToken , clearToken , setAuthState  } = auth.actions;
/* harmony default export */ const AuthSlice = (auth.reducer);

// EXTERNAL MODULE: ./reducers/UserSlice.tsx
var UserSlice = __webpack_require__(3585);
;// CONCATENATED MODULE: ./reducers/Reducer.tsx



const rootReducer = (0,toolkit_.combineReducers)({
    auth: AuthSlice,
    user: UserSlice/* default */.Z
});
/* harmony default export */ const Reducer = (rootReducer);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(4161);
// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__(8936);
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);
;// CONCATENATED MODULE: ./store/Store.tsx



 // imports from redux-persist

const persistConfig = {
    key: 'root',
    storage: (storage_default())
};
const persistedReducer = (0,external_redux_persist_.persistReducer)(persistConfig, Reducer);
const store = (0,toolkit_.configureStore)({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});
const persistor = (0,external_redux_persist_.persistStore)(store);
const useAppDispatch = ()=>(0,external_react_redux_.useDispatch)()
;



/***/ })

};
;