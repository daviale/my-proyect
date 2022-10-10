import  express  from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes' 
import {createRoles} from './libs/initialSetup'
 import usersRoutes from './routes/user.routes'


const app = express()
createRoles();
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
app.use('/auth', authRoutes)
 app.use('/users', usersRoutes)
export default app;
