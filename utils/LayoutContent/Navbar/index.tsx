import { NavbarDataType } from '@/utils/LayoutContent/Navbar/types'
import ProjectLogo from 'assets/images/images/project-logo.png'

export const navbarData: NavbarDataType = {
  projectLogo: ProjectLogo,
  list: [
    { href: '/', title: 'Home' },
    { href: '/about', title: 'About' },
    { href: '/marketplace', title: 'Marketplace' },
    { href: '/hosting', title: 'Hosting' },
    { href: '/contact', title: 'Contact' }
  ],
  loginButtonText: 'Login',
  getStartedButtonText: 'Get Started'
}
