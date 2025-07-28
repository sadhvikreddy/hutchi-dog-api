require('module-alias/register')

import express from 'express'
import {setupRouters} from '@/main/setup/setup-routers'

const port = process.env.port ?? 9999

const app = express()
setupRouters(app).then(() => {
    app.listen(port, () => {
        console.log('Dog API App is running on port 9999')
    })
})