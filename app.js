import express from "express"
import tweetsRouter from './router/tweets.js'
import authRouter from './router/auth.js'

const app = express()

app.use(express.json())

app.use('/tweets', tweetsRouter)
app.use('/auth', authRouter)


app.use((req, res, next) => {
    res.sendStatus(404)
})

app.listen(8080)