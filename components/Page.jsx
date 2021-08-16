import Head from 'next/head'

export const Wrapper = (props) => {
  const name = 'Scott MacDonnell'
  const url = 'https://scottmacdonnell.com'
  const description = 'Full Stack Developer and Sound Engineer based in Toronto, Canada.'
  const img = `${url}/og.png`

  const meta = {
    title: props.title ? `${props.title} - ${name}` : name,
    url: props.slug ? `${url}/${props.slug}` : url,
    description: props.description ? props.description : description,
    img: props.img ? props.img : img
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} key="description" />

        <meta name="og:site_name" property="og:site_name" content={name} key="og:sitename" />
        <meta name="og:title" property="og:title" content={meta.title} key="og:title" />
        <meta name="og:url" property="og:url" content={meta.url} key="og:url" />
        <meta name="og:image" property="og:image" content={meta.img} key="og:image" />
        <meta name="og:description" property="og:description" content={meta.description} key="og:description" />

        <meta name="twitter:card" property="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} key="twitter:title" />
        <meta name="twitter:image" content={meta.img} key="twitter:image" />
        <meta name="twitter:description" content={meta.description} key="twitter:description" />
      </Head>

      <div className={props.className} key={props.className}>
        {props.children}
      </div>
    </>
  )
}