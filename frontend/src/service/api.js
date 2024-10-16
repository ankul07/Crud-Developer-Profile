import { commonRequest } from "./commonRequest";
// const server = "https://profile-eight-iota.vercel.app";
const server = "https://crud-developer-profile.vercel.app";

export const registerFunction = async (data, header) => {
  return await commonRequest("POST", `${server}/api/v1/register`, data, header);
};

export const getUserFunction = async (search) => {
  return await commonRequest(
    "GET",
    `${server}/api/v1/getuser?search=${search}`,
    ""
  );
};

export const singleUserFunction = async (id) => {
  return await commonRequest("GET", `${server}/api/v1/singleuser/${id}`, "");
};

export const deleteFunction = async (id) => {
  return await commonRequest("DELETE", `${server}/api/v1/delete/${id}`, {});
};

export const updateFunction = async (id, data, header) => {
  return await commonRequest(
    "PUT",
    `${server}/api/v1/updateuser/${id}`,
    data,
    header
  );
};
