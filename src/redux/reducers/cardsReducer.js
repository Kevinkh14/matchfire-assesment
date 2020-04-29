import axios from "axios";
//initial state

const initialState = {
  items: [
    {id:1, title: "ENVIRONMENT", pic :"https://randomwordgenerator.com/img/picture-generator/57e6d3474350ab14f1dc8460962e33791c3ad6e04e507441722872d59045cc_640.jpg"},
    {id:2, title: "ARTS & ENTERTAINMENT",pic: "https://randomwordgenerator.com/img/picture-generator/buckled-book-2180047_640.jpg"},
    {id:3, title: "HEALTH & WELLNESS", pic:"https://randomwordgenerator.com/img/picture-generator/55e6d247495ab10ff3d8992cc12c30771037dbf85254794e732879dd9145_640.jpg"},
    {id:4, title :"HUNGER AND HUMANITARIAN AID", pic :"https://randomwordgenerator.com/img/picture-generator/55e2dd474a50b10ff3d8992cc12c30771037dbf85254794e70267cdd9444_640.jpg"},
    {id:5, title :"EDUCATION",pic:"https://randomwordgenerator.com/img/picture-generator/52e5d0414c51af14f1dc8460962e33791c3ad6e04e50744172287ad19f48c3_640.jpg"},
    {id:6, title :"ANIMAL WELFARE",pic:"https://randomwordgenerator.com/img/picture-generator/57e3dc454c57ad14f1dc8460962e33791c3ad6e04e50744172297ed2934ccc_640.jpg"},
    {id:7, title :"DIVERSITY & INCLUSION",pic:"https://randomwordgenerator.com/img/picture-generator/54e1dd4a4856a414f1dc8460962e33791c3ad6e04e507441722a72dc9448c3_640.jpg"},
    {id:8, title :"CITY TOURISM &CULTURAL COUNCILS",pic:"https://randomwordgenerator.com/img/picture-generator/5ee2d3424a57b10ff3d8992cc12c30771037dbf85254794e722679d7934d_640.jpg"}
  ]
};

// STRING LITERALS
const GET_ITEMS = "GET_ITEMS";

//FUNCTIONS
export function getItems() {
  return {
    type: GET_ITEMS,
    payload: axios.get(`/api/items`)
  };
}
//reducer function
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_ITEMS}_FULFILLED`:
      return {
        ...state,
        id:payload.data,
        title: payload.data,
        pic:payload.pic
      };

    default:
      return state;
  }
}
