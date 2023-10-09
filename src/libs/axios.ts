import { notification } from "antd"; //message,
import axios from "axios";
import dataCode from "common/constants/codeError.json";
import { UrlInternal } from "common/constants/endpoints";
import {
  cleanLocaStorage,
  deleteLocaStorage,
  getLocalStorage,
} from "utils/localStorage";
import { GETME, LANG } from "utils/localStorage/type";

import jwt_decode from "jwt-decode";

export const BASE_URL = "https://api.devartnguide.com/api/v1"; // dev
// export const BASE_URL = "https://api.artnguide.co.kr/api/v1"; // main

export const Axios = axios.create({
  baseURL: BASE_URL,
});

// eslint-disable-next-line no-underscore-dangle
const _axios = axios.create({
  baseURL: BASE_URL,
});

const mainAxios = {
  request: async (parameter: any) => {
    const {
      methodType,
      url,
      payload,
      requiresToken,
      config,
      notError,
      getError,
      params,
      accessTokenCollectData,
    } = parameter;

    return new Promise((resolve, reject) => {
      // axios request default options
      const headers = config && config.headers ? config.headers : {};

      if (headers.contentType) {
        headers["Content-Type"] = headers.contentType;
        delete headers.contentType;
      } else {
        headers["Content-Type"] = "application/json";
      }

      //multiple language
      const langMultiple = getLocalStorage(LANG, 0);
      headers["my-content-lang"] = langMultiple;

      // if API endpoint requires a token
      if (requiresToken) {
        let acToken = getLocalStorage(GETME, 0);
        const decoded: any = jwt_decode(acToken?.accessToken);
        if (new Date(decoded?.exp * 1000) < new Date()) {
          cleanLocaStorage();
          notification.open({
            message: "token expires",
            placement: "bottomRight",
          });
          window.location.href = UrlInternal.LOGIN;
          // window.location.reload();
        }
        if (acToken?.accessToken) acToken = acToken.accessToken;

        if (acToken) headers["Authorization"] = `Bearer ${acToken}`;

        if (accessTokenCollectData) {
          headers["Authorization"] = `Bearer ${accessTokenCollectData}`;
        }
      }

      _axios
        .request({
          url,
          method: methodType,
          data: payload,
          headers,
          params,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status === 401) {
              const acToken = getLocalStorage(GETME, 0);
              if (acToken?.accessToken) {
                deleteLocaStorage(GETME);
                window.location.reload();
              }
            } else {
              if (!notError) {
                const data: any = dataCode;
                const errData = err.response.data;
                // message.info(data[errData.errorCode?.trim()]);
                notification.open({
                  message: data[errData.errorCode?.trim()] + ".",
                  placement: "bottomRight",
                });
                resolve({ data: { datas: [] }, error: err.response.data });
              } else {
                if (getError) {
                  resolve({ data: { datas: [] }, error: err.response.data });
                }
              }
            }
          }
          reject(err);
        });
    });
  },

  getRequest: async function (parameter: any) {
    parameter.methodType = "GET";
    return this.request(parameter);
  },

  postRequest: async function (parameter: any) {
    parameter.methodType = "POST";
    return this.request(parameter);
  },

  putRequest: async function (parameter: any) {
    parameter.methodType = "PUT";
    return this.request(parameter);
  },

  patchRequest: async function (parameter: any) {
    parameter.methodType = "PATCH";
    return this.request(parameter);
  },

  deleteRequest: async function (parameter: any) {
    parameter.methodType = "DELETE";
    return this.request(parameter);
  },
};

export { mainAxios };
