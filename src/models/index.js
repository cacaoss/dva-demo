import {routerRedux} from 'dva/router';

export default {
  namespace: "index",
  state: {},
  effects: {
    * goTo({payload}, {put, call}) {
      yield put(routerRedux.push(
        {
          pathname: "login",
        }
      ));
      yield put({type: "goLogin", payload})
    }
  },
  reducers: {
    goLogin(state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  }
}
