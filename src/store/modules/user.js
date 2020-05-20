import { login, getInfo } from 'api/user'
import { Toast } from 'vant'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
// import router from '@/router'

const LOGIN = 'LOGIN' // 获取用户信息
const SetUserData = 'SetUserData' // 获取用户信息
const LOGOUT = 'LOGOUT' // 退出登录、清除用户数据
const USER_DATA = 'userDate' // 用户数据

export default {
    namespaced: true,
    state: {
        token: getToken() || '',
        user: JSON.parse(localStorage.getItem(USER_DATA) || null)
    },
    mutations: {

        [LOGIN](state, data) {
            let userToken = data.data.token
            state.token = userToken
            console.log('state', state)
            console.log('state', state.token)
            setToken(userToken)
        },

        [SetUserData](state, userData = {}) {
            console.log('userData', userData)
            state.user = userData
            localStorage.setItem(USER_DATA, JSON.stringify(userData))
        },
        [LOGOUT](state) {
            state.user = null
            state.token = null
            removeToken()
            localStorage.removeItem(USER_DATA)
            resetRouter()
        }

    },
    actions: {
        async login(state, data) {

            try {
                let res = await login({
                    account: data.account,
                    password: data.password
                })

                state.commit(LOGIN, res)
                Toast({
                    message: '登录成功',
                    position: 'middle',
                    duration: 1500
                })
                setTimeout(() => {
                    const redirect = '/'
                    data.$router.replace({
                        path: redirect
                    })
                }, 1500)
            } catch (error) {
                Toast({
                    message: error.message,
                    position: 'middle',
                    duration: 800
                })
            }
        },
        // get user info
        getInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(response => {
                    const { data } = response

                    if (!data) {
                        // eslint-disable-next-line
                        reject('Verification failed, please Login again.')
                    }
                    commit(SetUserData, data)
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    },
    getters: {
        token(state) {
            return state.token
        },
        user(state) {
            return state.user
        }
    }
}