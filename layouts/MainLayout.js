import Meta from '@io/components/Meta'
import Header from '@io/components/Header'
import Footer from '@io/components/Footer'

const MainLayout = ({ children, ...props }) => {
  const { tagline } = props

  return (
    <>
      <Meta {...props} />
      <Header />
      <main
        id="main-content"
        className="flex flex-col justify-center w-full mx-auto max-w-5xl pb-10 px-5 sm:px-10 mb-4"
      >
        {tagline && (
          <h1 className="pt-10 xs:pt-5 sm:pt-2 mb-8 title-font text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-left text-gray-800 dark:text-gray-100">
            <span className="decoration-clone bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-green-500">
              {tagline}
            </span>
          </h1>
        )}
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout