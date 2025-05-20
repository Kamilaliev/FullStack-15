import Joi from "joi";

export let dressValidationSchema = Joi.object({
    image: Joi.string().uri(),
    title: Joi.string().min(5).max(60),
    price: Joi.number().min(1)
})