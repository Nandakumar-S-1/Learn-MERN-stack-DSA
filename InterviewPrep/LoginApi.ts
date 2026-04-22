import express from "express"

//repo interface
interface IAuthRepo{
    findByEmail(email:string):Promise<void>
}

//repository
class AuthRepo implements IAuthRepo{
    async findByEmail(email: string): Promise<void> {
        let res = await prisma.user.findUnique({
            where:{email}
        })
    return res
    }
}

//service
class AuthService{
    constructor(private _repo:IAuthRepo){}
    async login(email:string,pass:string){
        const user = await this._repo.findByEmail(email)
        if(!user){
            throw new Error('user not found')
        }
        const ismatch = await bcrypt.compare(pass,user.pass)
        if(!ismatch){
            throw new Error('Invalid pass')
        }
        const token=jwt.sign({id:user.id},'secrett',{expiresIn:'1h'})
        return {user,token}
    }
}

//controller

class authCOntroller {
    constructor(private _service:AuthService) {
        
    }
    login = async(req:Request,res:Response)=>{
        try {
            const {email,pass}=req.body
            const result = await this._service.login(email,pass)
            return res.status(200).json({success:true,...result})
        } catch (error) {
            return res.status(400).json({success:false,message:error.message})
        }
    }
}


//dependency injection manuall

const authRepo=new AuthRepo()
const authService=new AuthService(authRepo)
const authController = new authCOntroller(authService)

//route
const router = express.Router()
router.post('/login',authController.login)

export default router







// //router
// Router.post('/login',authCOntroller.login)

// //service

// class AuthService{
//     async login(email:string,password:string){
//         const user = {email:'a@gmail.com',password:'123'}
//         if(!email!==user.email){
//             throw new Error('user not found')
//         }
//         if(password!==user.password){
//             throw new Error('invalid password')
//         }
//         return {message:'login completed'}
//     }
// }


// class authCOntroller{
//     constructor(private _authService:AuthService){

//     }
//     login=async(req,res)=>{
//         try {
//             const {email,password}=req.body
//             const result = await this._authService.login(email,password)
//             res.status(200).json(result)
//         } catch (error) {
//             res.status(400).json({message:error.message})
//         }
//     }
// }