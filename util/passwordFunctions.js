import bcrypt from "bcrypt";
 export const hashpassword = async (password) =>{
     const saltRound = await bcrypt.genSalt( parseInt(process.env.SALT_ROUNDS));
    let hashpassword = await bcrypt.hash(password,saltRound);
    return hashpassword; 
 }

export const comparePassword = async(password) =>{
     let result = await  bcrypt.compare(password,hashpassword);
     console.log(result);

}