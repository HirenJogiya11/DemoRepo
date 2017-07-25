export interface  child {
  name: string,
  age : number

}

export interface  passenger {
  id: number,
  FirstName : string,
  Checkdin : boolean,
  children ?: child[]
}
