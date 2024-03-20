import axios, { AxiosResponse } from "axios";
import { feedbackResource, loginResource, promptResource, registerResource } from "./interface";

export class GenifyService{

    public async register(data: registerResource) {
        let results: AxiosResponse<
          { messages: string } | { [prop: string]: string }
        > = await axios.post(
            `http://localhost:5000/user/register`,
          data,
        );
        return results.data;
      }

      public async login(data: loginResource) {
        let results: AxiosResponse<
          { messages: string } | { [prop: string]: string }
        > = await axios.post(
            `http://localhost:5000/user/login`,
          data,
        );
        return results.data;
      }
      
      public async promptPost(data: promptResource) {
        let results: AxiosResponse<
          { messages: string } | { [prop: string]: string }
        > = await axios.post(
            `http://localhost:5000/prompt_generator/generate`,
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
}