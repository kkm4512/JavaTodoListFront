export interface Member{
  id : number;
  name : string;
  password : string;
  nickname : string;
}

export interface LoginMember extends Pick<Member,"name" | "password"> {};