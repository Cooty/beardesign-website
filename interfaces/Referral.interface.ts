interface Referral {
  id: string
  from: {
    name: string
    title: string
    link?: string
    image: string
    organization?: string
  }
  text: string
}

export default Referral
