import {z} from 'zod'


export const usernameValidation = z
.string()
.min(2,"Username must be atleast 2 characters") 
.min(20,"Username must be atmost 20 characters")
.regex(/^[a-zA-Z0-9_]+$/,"username must not contain special character")


export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:'invalid email address'}),
    password: z.string().min(6,{message:'password must be six characters'})
})