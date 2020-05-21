import request from '@/utils/request'

export function login(data) {
    return request({
        url: 'http://127.0.0.1:8800/api/account/login/',
        method: 'post',
        data
    })
}

export function getInfo(token) {
    return request({
        url: 'http://127.0.0.1:8800/api/user/my/',
        method: 'get',
        headers: { 'authorization': token }


    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}

export function sendCode(data) {
    return request({
        url: 'http://127.0.0.1:8800/api/account/sendCode/',
        method: 'post',
        data
    })
}