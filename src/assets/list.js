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

const itemCatagories = [
    { name: "Breakfast", code: "1" },
    { name: "Lunch", code: "2" },
    { name: "Dinner", code: "3" },
    { name: "Appetizer", code: "4" },
    { name: "Entree", code: "5" },
    { name: "Dessert", code: "6" },
    { name: "Beverages", code: "7" },
    { name: "Sides", code: "8" },
    { name: "Add Ons", code: "9" },
    { name: "Brunch", code: "10" },
    { name: "Kids Menu", code: "11" },
    { name: "Condiments", code: "12" },
    { name: "Extras", code: "13" },
];

const itemOilTypes = [
    { name: "Vegetable oil", code: "1" },
    { name: "Canola oil", code: "2" },
    { name: "Peanut oil", code: "3" },
    { name: "Corn oil", code: "4" },
    { name: "Olive oil", code: "5" },
    { name: "Other (see notes)", code: "6" },
];

const itemBreadeds = [
    { name: "Breaded", code: "1" },
    { name: "Battered", code: "2" },
    { name: "Other (see notes)", code: "3" },
];

  export {
      itemCatagories,
      schema,
      itemBreadeds,
      itemOilTypes
  };
  