const loading = {
  state: {
    loading: false
  },

  mutations: {
    SET_LOADING: (state, loading) => {
      state.loading = loading
    }
  },

  actions: {
    SetLoading ({ commit }, value) {
      commit('SET_LOADING', value)
    }
  }
}

export default loading
