import Head from 'next/head'
import { motion } from 'framer-motion'

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
  const siteDescription = 'Full Stack Developer and Sound Engineer based in Toronto, Canada.'
  const siteImage = `${siteURL}/og.jpg`

  const formattedPageName = pageName ? `${pageName} - ${siteName}` : siteName
  const formattedURL = slug ? `${siteURL}/${slug}` : siteURL
  const formattedDescription = description ? description : siteDescription
  const formattedImage = imageURL ? imageURL : siteImage

  return (
    <div className={className}>
      <Head>
        <title>{formattedPageName}</title>
        <meta
          name="description"
          content={formattedDescription}
          key="description"
        />

        <meta
          name="og:site_name"
          property="og:site_name"
          content={siteName}
          key="ogsitename"
        />
        <meta
          name="og:title"
          property="og:title"
          content={formattedPageName}
          key="ogtitle"
        />
        <meta
          name="og:url"
          property="og:url"
          content={formattedURL}
          key="ogurl"
        />
        <meta
          name="og:image"
          property="og:image"
          content={formattedImage}
          key="ogimage"
        />
        <meta
          name="og:description"
          property="og:description"
          content={formattedDescription}
          key="ogdescription"
        />

        <meta name="twitter:title" content={formattedPageName} key="twtitle" />
        <meta
          name="twitter:description"
          content={formattedDescription}
          key="twdescription"
        />
        <meta name="twitter:image" content={formattedImage} key="twimage" />
      </Head>
      <motion.div initial="exit" animate="enter" exit="exit">
        {children}
      </motion.div>
    </div>
  )
}