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

  // Add your own express routes here

  app.listen(process.env.PORT || process.env.PAYLOAD_LOCAL_PORT || 4000)
}

start()
