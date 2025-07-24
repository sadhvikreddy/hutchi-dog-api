require('module-alias/register')

import express from 'express'
import {setupRouters} from '@/main/setup/setup-routers'
import test_db from '@/main/utils/test_db'

const app = express()
setupRouters(app).then(() => {
    app.listen(9999, () => {
        console.log('Dog API App is running on port 9999')
        test_db();
    })
})