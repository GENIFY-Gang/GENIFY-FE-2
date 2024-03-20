export interface registerResource {
    username: string;
    password: string;
    email:string;
    role?:string;
  }

  export interface loginResource {
    username: string;
    password: string;
  }

  export interface promptResource {
    input_text: string;
  }

  export interface feedbackResource {
    name: string;
    overallExp:number;
  }