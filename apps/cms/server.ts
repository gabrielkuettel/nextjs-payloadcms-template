import express from 'express'
import payload from 'payload'

require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'supersecret',
    mongoURL: process.env.MONGODB_URI || 'mongodb://localhost/cms',
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    }
  })

  const router = express.Router()

  // Note: Payload must be initialized before the `payload.authenticate` middleware can be used
  router.use(payload.authenticate)

  router.get('/', async (req: any, res) => {
    try {
      if (req.user) {
        const posts = await payload.find({
          collection: 'posts',
          // Set `overrideAccess` to `false` to ensure that access control is enforced
          overrideAccess: false,
          // Pass `user` object to use against access control checks
          user: req.user
        })

        return res.send(JSON.stringify(posts))
      }

      return res.send('Not authenticated')
    } catch (error: any) {
      return res.send(error.toString())
    }
  })

  // Add your own express routes here
  app.use('/test-route', router)

  app.listen(process.env.PORT || process.env.PAYLOAD_LOCAL_PORT)
}

start()
