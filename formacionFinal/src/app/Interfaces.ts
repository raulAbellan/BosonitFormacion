export interface Country {

        name: string,
        code: string
      
}

export interface User{
        name: string,
        pass:string,
        passConfirm:string,
        email:string,
        check: boolean,
        country:Country,
        city:string

}