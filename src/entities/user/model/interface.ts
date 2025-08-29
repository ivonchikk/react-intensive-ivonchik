export interface User {
    id: number,
    name: string,
    username: string,
    email: string,

    address: UserAddress,

    phone: string,
    website: string,

    company: UserCompany
}

interface UserAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
    geo: UserGeo
}
interface UserGeo {
    lat: number,
    lng: number
}

interface UserCompany {
    name: string,
    catchPhrase: string,
    bs: string
}

