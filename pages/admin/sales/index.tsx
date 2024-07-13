import withAuth from '@/utils/Authentication'
import useSalesData from '@/utils/Customhooks/useSalesData'
import useScreenType from '@/utils/Customhooks/useScreenType'
import AuthLayout from '@/components/AuthLayout'
import PaymentConfirmationModal from '@/components/PaymentConfirmationModal'
import SalesDesktop from '@/views/Admin/SalesPage/Desktop'
import { SalesContainer } from '@/styles/Pages/Admin/SalesPage'

const Sales = () => {
  const salesData = useSalesData()
  const { screenType } = useScreenType()
  return (
    <AuthLayout isPopUpVisible={salesData.showPaymentConformationModal}>
      <SalesContainer>
        {screenType === 'desktop' && <SalesDesktop salesData={salesData} />}
        {/* {(screenType === 'mobile' || screenType === 'tab') && (
          <SalesMobile salesData={salesData} />
        )} */}
      </SalesContainer>
      {salesData.showPaymentConformationModal && (
        <PaymentConfirmationModal
          isOpen={salesData.showPaymentConformationModal}
          setPaymentConformationModal={salesData.setPaymentConformationModal}
          fetchSalesData={salesData.fetchSalesData}
          productId={salesData.productId}
        />
      )}
    </AuthLayout>
  )
}

export default withAuth(Sales, 'admin')
