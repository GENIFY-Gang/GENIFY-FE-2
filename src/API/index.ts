import axios, { AxiosResponse } from "axios";
import { documentUpdateResource, feedbackResource, loginResource, promptResource, registerResource } from "./interface";

export class GenifyService{

    public async register(data: registerResource) {
        let results: AxiosResponse<
          { messages: string } | { [prop: string]: string }
        > = await axios.post(
            `https://genifybackend.azurewebsites.net/user/register`,
          data,
        );
        return results.data;
      }

      public async login(data: loginResource) {
        let results: AxiosResponse<
          { messages: string } | { [prop: string]: string }
        > = await axios.post(
            `https://genifybackend.azurewebsites.net/user/login`,
          data,
        );
        return results.data;
      }
      
      public async promptPost(data: promptResource) {
        let results: AxiosResponse<
          { messages: string } | { [prop: string]: string }
        > = await axios.post(
            `https://genifybackend.azurewebsites.net/prompt_generator/generate`,
          data,
        );
        return results.data;
      }

      public async feedbackForm(data: feedbackResource[][]) {
        let results: AxiosResponse<
          { messages: string } | { [prop: string]: string }
        > = await axios.post(
            `https://v1.nocodeapi.com/genify/google_sheets/XSsebbzcIbdFYEAU?tabId=sheet1`,
          data,
        );
        return results.data;
      }


      public async getDocumentData() {
        let results: AxiosResponse = await axios.get(
         `https://genifybackend.azurewebsites.net/documentation/`,
        );
        return results.data;
      }

      public async getUpdateDocumentData(data: documentUpdateResource) {
        let results: AxiosResponse<any> = await axios.put(
            `https://genifybackend.azurewebsites.net/documentation/`,
          data,
        );
        return results.data;
      }
}