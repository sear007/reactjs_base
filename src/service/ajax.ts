import axios, { AxiosRequestConfig } from "axios";

/**
 * @param {*} { headers = {}}
 * @return {*} 
 */
function getHeaders({ headers = {}}){
  const userToken = localStorage.getItem('token');
  return {
    Authorization: `Bearer ${userToken}`,
    ...headers,
  }
}

/**
 * @param {AxiosRequestConfig} [props={}]
 * @return {*} 
 */
function getConfig(props: AxiosRequestConfig = {}){
  return {
    method: 'GET',
    ...props,
  }
}

/**
 * @export
 * @template T
 * @param {string} url
 * @param {AxiosRequestConfig} [pProps={}]
 * @return {*}  {Promise<T>}
 */
export default function ajax<T>(url: string, pProps: AxiosRequestConfig = {}): Promise<T> {
  const config: AxiosRequestConfig = getConfig({
    ...pProps,
    url,
    headers: getHeaders(pProps),
  });
  return axios(config).then(({ data }) => data);
}