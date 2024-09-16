import { useState, useEffect } from 'react'
import withAuth from '@/utils/Authentication'
import useSalesData from '@/utils/Customhooks/useSalesData'
import useScreenType from '@/utils/Customhooks/useScreenType'
import AuthLayout from '@/components/AuthLayout'
import PaymentConfirmationModal from '@/components/PaymentConfirmationModal'
import SalesDesktop from '@/views/Admin/SalesPage/Desktop'
import SalesMobile from '@/views/Admin/SalesPage/Mobile'
import { SalesContainer } from '@/styles/Pages/Admin/SalesPage'

const Sales = () => {
  const salesData = useSalesData()
  const { screenType } = useScreenType()
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient) {
    return null
  }

  return (
    <AuthLayout isPopUpVisible={salesData.showPaymentConformationModal}>
      <SalesContainer>
        {screenType === 'desktop' && <SalesDesktop salesData={salesData} />}
        {(screenType === 'mobile' || screenType === 'tab') && (
          <SalesMobile salesData={salesData} screenType={screenType} />
        )}
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
