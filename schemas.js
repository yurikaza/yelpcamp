const joi = require("joi");
const campgroundSchema = joi.object({
  campground: joi
    .object({
      title: joi.string().required(),
      price: joi.number().required().min(0),
      image: joi.number().required(),
      location: joi.number().required(),
      description: joi.number().required(),
    })
    .required(),
});
