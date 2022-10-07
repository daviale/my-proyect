import{Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = new Schema(
    {
        username:{
            type:String,
            unique:true
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
            require:true
        },
        roles:[ {
            ref :"Role",
            type:Schema.Types.ObjectId
        }]


    },{
        timestamps:true,
        versionKey:false
    })
                                        // aca tomo la contraseña
 userSchema.statics.encryptPassword = async(password) =>{

const salt  =  await bcrypt.genSalt(10)

// aca me dara una nueva contraseña cifrada , hast crea una contraseña cifrada
return await bcrypt.hash( password, salt)

 }

 userSchema.statics.comparePassword = async(password, receivedPassword) =>{

return await bcrypt.compare(password, receivedPassword)

    
}

 export default  model('User', userSchema) ;