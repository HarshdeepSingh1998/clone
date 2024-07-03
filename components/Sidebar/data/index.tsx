import DimondIcon from '@/assets/images/svg/DimondIcon'
import BiddingManagementIcon from '@/assets/images/svg/BiddingManagementIcon'
import InventoryManagementIcon from '@/assets/images/svg/InventoryManagementIcon'
import AuctionManagementIcon from '@/assets/images/svg/AuctionManagement'
import Customer from 'assets/images/svg/Customer'
import ContractManagement from '@/assets/images/svg/ContractManagement'
import Sales from '@/assets/images/svg/Sales'
import Resource from 'assets/images/svg/Resources'

export const getsidebarData = (userRole: string | undefined) => {
  if (userRole === 'admin') {
    return [
      {
        route: '/',
        data: [
          {
            id: 1,
            restricted: false,
            title: 'Marketplace',
            icon: <DimondIcon />,
            link: '/admin/marketplace'
          },
          {
            id: 2,
            restricted: false,
            title: 'Inventory Management',
            icon: <InventoryManagementIcon />,
            link: '/admin/inventorymanagement'
          },
          {
            id: 3,
            restricted: false,
            title: 'Auction Management',
            icon: <AuctionManagementIcon />,
            link: '/admin/auctionManagement'
          },
          {
            id: 4,
            restricted: false,
            title: 'Contract Management',
            icon: <ContractManagement />,
            link: '/admin/contractmanagement'
          },
          {
            id: 5,
            restricted: false,
            title: 'Sales',
            icon: <Sales />,
            link: '/admin/sales'
          },
          {
            id: 6,
            restricted: false,
            title: 'Members',
            icon: <Customer />,
            link: '/admin/members'
          }
        ]
      }
    ]
  } else {
    return [
      {
        route: '/',
        data: [
          {
            id: 1,
            restricted: false,
            title: 'Marketplace',
            icon: <DimondIcon />,
            link: '/user/marketplace'
          },
          {
            id: 2,
            restricted: false,
            title: 'My Assets Inventory',
            icon: <BiddingManagementIcon />,
            link: '/user/inventorymanagement'
          },
          {
            id: 3,
            restricted: false,
            title: 'Auction & Bidding',
            icon: <InventoryManagementIcon />,
            link: '/user/biddingmanagement'
          },
          {
            id: 4,
            restricted: false,
            title: 'Contract Management',
            icon: <ContractManagement />,
            link: '/user/contractmanagement'
          },
          {
            id: 5,
            restricted: false,
            title: 'Resources',
            icon: <Resource />,
            link: '/user/resourcemanagement'
          }
        ]
      }
    ]
  }
}

export const getParamValue = (
  lastSegment: string,
  userRole: string | undefined
) => {
  if (userRole === 'admin') {
    switch (lastSegment) {
      // case 'dashboard':
      //   return 0
      case 'marketplace':
        return 0
      case 'inventorymanagement':
        return 1
      case 'auctionManagement':
        return 2
      case 'contractmanagement':
        return 3
      case 'sales':
        return 4
      case 'members':
        return 5

      default:
        return -1
    }
  } else {
    switch (lastSegment) {
      case 'marketplace':
        return 0
      case 'inventorymanagement':
        return 1
      case 'biddingmanagement':
        return 2
      case 'contractmanagement':
        return 3
      case 'resourcemanagement':
        return 4
      default:
        return -1
    }
  }
}
