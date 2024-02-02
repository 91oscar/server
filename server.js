import express, { application } from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()
// When a request comes into the server, parse it.
app.use(express.json())
app.use(cors())

const images = [
    {
        image: `https://images.unsplash.com/photo-1624668456438-275609251df9?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        thumbnail: `https://images.unsplash.com/photo-1624668456438-275609251df9?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `A beautiful crane about to take flight in the snow, taken in Tsurui, Hokkaido, Japan`,
    }, {
        image: `https://images.unsplash.com/photo-1604608684575-0478ddb56d48?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        thumbnail: `https://images.unsplash.com/photo-1604608684575-0478ddb56d48?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `A lynx licking its paw in the snow`
    }, {
        image: `https://images.unsplash.com/photo-1612957514614-9c5bc5ba245f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        thumbnail: `https://images.unsplash.com/photo-1612957514614-9c5bc5ba245f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `A brown dog standing at attention in the snow, warm light filtering behind it.`
    }, {
        image: `https://images.unsplash.com/photo-1597732081142-329f64f5962f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        thumbnail: `https://images.unsplash.com/photo-1597732081142-329f64f5962f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `A brown dog standing at attention in the snow, warm light filtering behind it.`
    }, {
        image: `https://images.unsplash.com/photo-1463436755683-3f805a9d1192?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        thumbnail: `https://images.unsplash.com/photo-1463436755683-3f805a9d1192?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        alt: `A brown dog standing at attention in the snow, warm light filtering behind it.`
    }
]

// When someone vists imagen, we give back de array of images above.

app.get('/images', (req, res) => {
    try {
        res.status(200).json(images)
    } catch (err) {
        res.send(err)
    }
})

app.listen('1234', (req, res) => {
    console.log(`server Listening on port http://localhost:1234`)
})