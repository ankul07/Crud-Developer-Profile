import axios from "axios";
export const commonRequest = async (methods, url, body, header) => {
  let config = {
    method: methods,
    url,
    Headers: header
      ? header
      : {
          "Content-Type": "application/json",
        },
    data: body,
  };

  return axios(config)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
