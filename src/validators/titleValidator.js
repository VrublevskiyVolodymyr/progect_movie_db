import Joi from "joi";

const titleValidator = Joi.object({
    title: Joi.string().regex(/^[a-zA-Z ]{1,20}$/).required()
});

export {titleValidator}
