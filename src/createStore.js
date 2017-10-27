export default function createStore(reducer) {
  let state

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  function getState() {
    return state
  }

  dispatch('@@INIT')

  return {dispatch: dispatch, getState: getState}
}

function render() {
  const container = document.getElementById('container');
}
