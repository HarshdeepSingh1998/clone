import { LoaderProps } from 'components/Loader/types'
import Fan from '@/assets/images/svg/Loader'
import { LoaderContainer, SvgContainer } from '@/styles/Components/Loader'

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <LoaderContainer>
      <div className={'loader-bg' + (isLoading ? ' opacity-bg' : '')}></div>
      {isLoading && (
        <>
          <SvgContainer>
            <Fan />
            <div className="loader">
              <div className="loader__bounce first"></div>
              <div className="loader__bounce second"></div>
              <div className="loader__bounce third"></div>
            </div>
          </SvgContainer>
        </>
      )}
    </LoaderContainer>
  )
}

export default Loader
