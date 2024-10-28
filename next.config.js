/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  webpack: config => {
    config.resolve.alias.canvas = false

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.thewitslab.com',
        port: '',
        pathname: '/api/getFileAccess/**'
      }
    ],
    unoptimized: true
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/marketplace': { page: '/marketplace' },
      '/hosting': { page: '/hosting' },
      '/contact': { page: '/contact' },
      '/signin': { page: '/signin' },
      '/signup': { page: '/signup' },
      // '/forgetpassword': { page: '/forgetpassword' },
      // '/admin/dashboard': { page: '/admin/dashboard' },
      '/admin/marketplace': { page: '/admin/marketplace' },
      '/admin/inventorymanagement': { page: '/admin/inventorymanagement' },
      '/admin/auctionManagement': { page: '/admin/auctionManagement' },
      '/admin/members': { page: '/admin/members' },
      '/admin/addProduct': { page: '/admin/addProduct' },
      '/admin/productDetails': {
        page: '/admin/productDetails'
      },
      '/user/productDetails': {
        page: '/user/productDetails'
      },
      '/admin/contractmanagement': {
        page: '/admin/contractmanagement'
      },
      // '/admin/members/[memberId]': {
      //   page: '/admin/members/[memberId]'
      // },
      '/admin/sales': { page: '/admin/sales' },
      // '/admin/product/[productId]': { page: '/admin/product/[productId]' },
      '/user/marketplace': {
        page: '/user/marketplace'
      },
      '/user/inventorymanagement': {
        page: '/user/inventorymanagement'
      },
      '/user/terms': {
        page: '/user/terms'
      },
      '/user/biddingmanagement': {
        page: '/user/biddingmanagement'
      },
      '/user/resourcemanagement': {
        page: '/user/resourcemanagement'
      },
      '/user/contractmanagement': {
        page: '/user/contractmanagement'
      },
      // '/user/sales': { page: '/user/sales' },
      '/admin/auctionManagement/machine': {
        page: '/admin/auctionManagement/machine'
      },
      '/admin/members/memberDetails': {
        page: '/admin/members/memberDetails'
      }

      // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },admin/customers
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },admin/addProduct
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  }
}

module.exports = nextConfig
