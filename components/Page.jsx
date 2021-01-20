import Head from 'next/head'

export default function Page({
  children,
  className,
  pageName,
  slug,
  description,
  imageURL,
}) {
  const siteName = 'Scott MacDonnell'
  const siteURL = 'https://scottmacdonnell.com'
  const siteDescription = 'I am a Full Stack Developer based in Toronto, Canada, specializing in building digital products that resonate.'

  const formattedPageName = (pageName) ? `${pageName} - ${siteName}` : siteName
  const formattedURL = (slug) ? `${siteURL}/${slug}` : siteURL
  const formattedDescription = (description) ? description : siteDescription

  return (
    <div className={className}>
      <Head>
        {/* Main */}
        <title>{formattedPageName}</title>
        <meta name="description" content={formattedDescription} key="description" />

        {/* Open Graph */}
        <meta name="og:title" property="og:title" content={formattedPageName} key="ogtitle" />
        <meta name="og:url" property="og:url" content={formattedURL} key="ogurl" />
        <meta name="og:image" property="og:image" content={imageURL} key="ogimage" />
        <meta name="og:description" property="og:description" content={formattedDescription} key="ogdescription" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content={formattedPageName} key="twtitle" />
        <meta name="twitter:description" content={formattedDescription} key="twdescription" />
        <meta name="twitter:image" content={imageURL} key="twimage" />
      </Head>
      {children}
    </div>
  )
}