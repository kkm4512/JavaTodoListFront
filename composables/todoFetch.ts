import type { MemberErrorResponse } from "~/types/ErrorResponse";
import { HttpMethod } from "~/types/HttpMethod";

export async function boardFetch<T>(path:string,httpMethod:HttpMethod,data?:{}): Promise<T | undefined>{
  try {
    const res = await $fetch<T>(path,{
      baseURL: "http://localhost:8080/api/board",
      method : httpMethod,
      body : data,
    })    
    return res;
  } catch (e:unknown) {
    if (isFetchError(e)) {
      const errorResponse:MemberErrorResponse = e;
      const erros: {[key:string]: string | undefined} = errorResponse.response._data.errors;
      for ( const field in erros ) {
        alert(erros[field]);
        break
      }
    }
  }
}

function isFetchError(error:unknown): error is MemberErrorResponse {
  return typeof error === 'object' && error !== null && 'response' in error && '_data' in (error as any).response;
}