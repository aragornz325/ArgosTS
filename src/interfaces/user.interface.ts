
export interface IUser {
    createdAt: Date;
    updatedAt: Date;
    username:  string;
    email:     string;
    role:      string;
    profile:   IProfile;
}

export interface IProfile {
    firstName: string
    lastName: string
    age: number
    phone: string
    city: string
    country: string
    postalCode: string
    address: string
    gender: string
    dateOfBirth: Date
    avatarUrl: string
    bio: string
    socialMediaLinks: string
    interests: string
    education: string
    employment: string
}