export const updateUserInfo = (state, payload) => {
  state.userInfo = Object.assign({}, state.userInfo, payload)
}
