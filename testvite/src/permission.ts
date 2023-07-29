import router from './route/index'

router.beforeEach(async(to,from, next)=>{
    console.log(to)
    next()
})

router.afterEach(()=>{

})