import {
    defineStore
} from 'pinia'

export const TestStore = defineStore({
    id: "TestStore",
    state: () => ({
        firstName: 'x',
        lastName: 'ggggg',
        accessToken: '12345688'
    }),
    actions: {
        setToken(value: any) {
            this.accessToken = value
        }
    },
    persist: {
        key: "TestStore",
        storage: window.localStorage
    }
})