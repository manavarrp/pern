import express from 'express'

const app = express()
const port = 3000

const router = express.Router()

app.use(express.json())


let cars = [
  {id: 1, make :'Toyota', model:'Cmary', year:'2022', price :10000},
  {id: 2, make :'Mazda', model:'E3', year:'2025', price :12000},
  {id: 3, make :'Subaru', model:'Nubs', year:'2026', price :22000}
]

router.get('/', (req, res) => {
  res.json(cars)
})

router.post('/', (req, res) => {
    const { make, model, year, price } = req.body
    if(!make || !model || !year || !price) return res.status(400).json( {error: 'All fields are required'})
    const newCar = {
        id: cars.length + 1,
        make,
        model,
        year,
        price
    }

    cars.push(newCar)
    res.status(201).json(newCar)


})

router.put('/:id', (req, res) => {
    res.send('')
})

router.delete('/:id', (req, res) => {
    res.send('')
})

router.get('/:id', (req, res) => {
    const id  = Number(req.params.id)
    const car = cars.find(car => car.id === id)
    if(!car) return res.status(404).send('Car not found')
    res.send(car)
})

app.use('/api/v1/cars', router)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

