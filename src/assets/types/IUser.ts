interface IAdres{
    street: string,
    suite: string,
    city: string,
    zipcode: number,
    geo: IGeo
}
interface IGeo{
    lat: number,
    lng:number
}
interface ICompany{
    name: string,
    catchPhrase:string,
    bs: string
}

export interface IUser{
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAdres,
    phone: string,
    website: string,
    company: ICompany
}