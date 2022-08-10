import axios from "axios";
import { LogInResponse, SignUpOrIn } from "../types";
import { LOGIN, USER } from "./url";
import { BaseUrl } from "./url";

// export const userLogin = async ({ email, password }: SignUpOrIn) => {
//   console.log(email, password);
//   const res = await axios.post(`${USER}${LOGIN}`, {
//     email,
//     password,
//   });

//   console.log(res);
//   return res as unknown as LogIn;
// };

export const userLogin = async ({ email, password }: SignUpOrIn) => {
  try {
    const res = await axios.post<LogInResponse>(`${BaseUrl}${USER}${LOGIN}`, {
      data: {
        email,
        password,
      },
    });

    if (!(res.status === 200)) throw new Error(`status error ${res.status}`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
