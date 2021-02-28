import axios from "axios";

const URL = "https://randomuser.me/api/?results=100&nat=ca&inc=picture,name,phone,email,dob"

export default {
  getEmps: function() {
    return axios.get(URL);
  }
};
