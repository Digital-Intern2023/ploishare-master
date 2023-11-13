import React from "react";
import { API_URL } from "../Constant";
import Swal from "sweetalert2";
import axios from "axios";

export default function SignIn(value) {
  console.log(value);
  const scg_email = new RegExp("[a-zA-Z0-9]+@scg+.com");
  var context = {
    username: value.email,
    password: value.password,
    userType: "CPAC",
  };
  axios
    .post("https://bluenet.cipcloud.net/api/v2/authen/auth", context, {
      auth: {
        username: "fc_vdo_content_intf",
        password: "E3nzMjMrpWusLApW",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
