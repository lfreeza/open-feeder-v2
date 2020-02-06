import { login, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    frompath: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_FROM: (state, frompath) => {
      state.frompath = frompath
    }
  },

  actions: {
    // log in
    Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          console.log(response.data)
          const data = response.data
          setToken(data.token)
          console.log(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },

    // Get user information

    // Sign out
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // Front end
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        removeToken()
        commit('SET_TOKEN', '')
        resolve()
      })
    },
    SetFromPath ({ commit }, frompath) {
      commit('SET_FROM', frompath)
    }
  }
}

export default user
