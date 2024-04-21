import { User } from "../Models/Users.js";
import { Authentification,createUser } from "../Services/UserService.js";
import { Skills } from "../Models/Skills.js";
import { Experience } from "../Models/Experience.js";

const authentification= async(req,res,next)=>{
    const {Email}=req.body
    try{
        Authentification(Email)
        .then(Password=> {
            res.status(200).send({Password})
        })
    }catch(error){
        next(error)
    }
}

const CreateUser= async(req,res,next)=>{
    const user=  new User(
        req.body.FirstName,
        req.body.LastName,
        req.body.Email,
        req.body.Password,
        req.body.PhoneNumber,
        req.body.About,
        req.body.Education,
        req.body.Language,
        req.body.location,
        req.body.City)
    const skills= req.body.skills
    const experiences = req.body.Experience
    console.log(user);
    try{
        const user_id=createUser(user)
        console.log(user_id);
        skills.forEach(a_skill => {
            const skill=new Skills(a_skill,user.my_id,"")
            //console.log(skill.user_id);
            skill.save()
        });
        experiences.forEach(an_experience=> {
            const experience=new Experience(user.my_id,an_experience.StartDate,an_experience.EndDate,an_experience.Title)
            experience.save()
        });
        res.status(200).send({message:"user cree avec succes"})

    }catch(error){
        next(error)
    }finally{
        console.log(user.id);
    }

}

export{
    authentification,
    CreateUser
}