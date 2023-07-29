import {
    defineStore
} from 'pinia'

export const useUserStore = defineStore('storeUser', {
    state: () => {
        return {
            firstName: 'x',
            lastName: 'ggggg',
            accessToken: '12345688'
        }
    },
    actions: {
        setToken(value) {
            this.accessToken = value
        }
    },
    persist: {
        enabled: true, // 这个配置代表存储生效，而且是整个store都存储
        strategies: [{
            key: 'tetdvite',
            storage: localStorage
        }]
    }
})