import express from 'express'
import payload from 'payload'

require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.CMS_SECRET || 'supersecret',
    mongoURL: process.env.MONGODB_URI || 'mongodb://localhost/cms',
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    }
  })

  // Add your own express routes here

  app.listen(process.env.CMS_PORT || 8000)
}

start()
