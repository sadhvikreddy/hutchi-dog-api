require('module-alias/register')

import express from 'express'
import {setupRouters} from '@/main/setup/setup-routers'

const app = express()
setupRouters(app).then(() => {
    app.listen(9999, () => {
        console.log('Dog API App is running on port 9999')
    })
})