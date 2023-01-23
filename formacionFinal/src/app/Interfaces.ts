export interface Country {

        name: string,
        code: string
      
}

export interface User{
        id?:number,
        name: string,
        pass:string,
        passConfirm:string,
        email:string,
        check: boolean,
        country:Country,
        city:string
}