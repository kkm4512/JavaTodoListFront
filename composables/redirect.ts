const router = useRouter();

export function redirected(isTrue:boolean,yesRedirectURL:string,noRedirectURL:string){
  isTrue ? router.push(yesRedirectURL) : router.push(noRedirectURL)
}