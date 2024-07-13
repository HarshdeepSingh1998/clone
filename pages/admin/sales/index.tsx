import withAuth from '@/utils/Authentication'
import useSalesData from '@/utils/Customhooks/useSalesData'
import useScreenType from '@/utils/Customhooks/useScreenType'
import AuthLayout from '@/components/AuthLayout'
import SalesDesktop from '@/views/Admin/SalesPage/Desktop'
import { SalesContainer } from '@/styles/Pages/Admin/SalesPage'

const Sales = () => {
  const salesData = useSalesData()
  const { screenType } = useScreenType()
  return (
    <AuthLayout>
      <SalesContainer>
        {screenType === 'desktop' && <SalesDesktop salesData={salesData} />}
        {/* {(screenType === 'mobile' || screenType === 'tab') && (
          <SalesMobile salesData={salesData} />
        )} */}
      </SalesContainer>
    </AuthLayout>
  )
}

export default withAuth(Sales, 'admin')
