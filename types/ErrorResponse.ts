export interface MemberErrorResponse {
  response : {
    _data : {
      errors: {
        password?:string;
        nickname?:string;
        name?:string;
      }
    }
  }
}

export interface BoardErrorResponse {
  response: {
    _data: any;
  }
}