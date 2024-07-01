export interface CardType {
  heading: string
  image: () => JSX.Element
  title: string
  subtitle: string
  units: string
  buttonText: string
}
