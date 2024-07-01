export interface GetUserInterface {
  id: string
  email: string
  role: string
  personalData: {
    name: string
    profileImage: string
    phone: string
    username: string
  }
  profileCompletion: number
  termsAgreed: boolean
}
