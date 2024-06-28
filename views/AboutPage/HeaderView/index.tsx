import { headerData } from '@/utils/AboutPageContent/Header'
import {
  AboutPageTitle,
  HeaderContainer
} from '@/styles/Views/AboutPage/Header'

const HeaderView = () => {
  return (
    <HeaderContainer>
      <AboutPageTitle>
        <div dangerouslySetInnerHTML={{ __html: headerData.title }}></div>
      </AboutPageTitle>
    </HeaderContainer>
  )
}

export default HeaderView
