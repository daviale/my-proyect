import  express  from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productsRoutes from './routes/products.routes'
const app = express()

app.set('pkg',pkg);

app.use(morgan('dev'));
app.use(express.json()); 

app.get('/',(req, res)=>{
    res.json({

        autor: app.get('pkg').author
    })
}
)

app.use('/products' ,productsRoutes)

export default app;
