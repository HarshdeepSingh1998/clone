import Link from 'next/link'
import Image from 'next/image'
import useScreenType from '@/utils/Customhooks/useScreenType'
import ProjectLogo from 'assets/images/images/project-logo.png'
import { LeftContent } from '@/styles/Components/AuthNavbar/LeftContainer'

const LeftContainer = () => {
  const { screenType } = useScreenType()
  return (
    <LeftContent>
      {screenType === 'mobile' || screenType === 'tab' ? (
        <Link href={'/'}>
          <Image src={ProjectLogo} alt={'Asic mining'} />
        </Link>
      ) : (
        ''
      )}
    </LeftContent>
  )
}

export default LeftContainer
