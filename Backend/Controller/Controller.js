import { dressModel } from "../Model/Model.js";
import { dressValidationSchema } from "../Validation/validation.js";

export let dressController = {
        getAll: async(req,res)=>{
            let dress = await dressModel.find()
            res.send(dress)
        },
        getById: async(req,res)=>{
            let {id} = req.params
            let dress = await dressModel.findById({_id:id})
            res.send(dress)
        },
        delete:async(req,res)=>{
            let {id} = req.params
            await dressModel.findByIdAndDelete({_id:id})
            res.send({
                message: "deleted"

            })
        },
        post: async(req,res)=>{
            let {error} =  dressValidationSchema.validate(req.body)
                if(error){
                    return res.send(error.details[0].message)

                
                }
                let newDress= dressModel(req.body)
                await newDress.save()
                res.send(newDress)

            }

}