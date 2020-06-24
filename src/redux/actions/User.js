import { Profile } from "./type";

export const profile = (data) => {
  console.log("data", data);
  return {
    type: Profile,
    payload: data,
  };
};
