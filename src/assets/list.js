import * as yup from 'yup';
// import "yup-phone";
const schema = yup.object({
    restaurant_name: yup.string().required(),
    restaurent_address_1: yup.string().required(),
    restaurent_city: yup.string().required(),
    restaurent_state: yup.string().required(),
    resturent_zip_code: yup.number().typeError("zip code must be a valid Zip code").required(),
    restaurent_location_nb: yup.number().typeError("this must be a valid number").required(),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    contact_email: yup.string().required().email(),
    restaurent_phone_nb: yup.string().required(),

});

  export default schema;
  