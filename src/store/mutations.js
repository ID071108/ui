// import types from ./

export const updateUserInfo = (state, payload) => {
  state.userInfo = Object.assign({}, state.userInfo, payload)
}

export const updateTabs = (state, payload) => {
  let hadTab = state.tabs.some(tab => tab.path === payload.path)
  !hadTab && state.tabs.push(payload)
}

export const closeTab = (state, payload) => {
  let _index = ''
  state.tabs.map((tab, index) => {
    if (tab.path === payload.path) {
      _index = index
    }
  })
  _index && state.tabs.splice(_index, 1)
  console.log(state.tabs)
}
