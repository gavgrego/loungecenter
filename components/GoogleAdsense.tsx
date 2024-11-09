import Script from "next/script"

type Props = {
  pId: string
}

const GoogleAdsense = ({ pId }: Props) => {
  return (
    <Script
      async
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
      strategy="afterInteractive"
    />
  )
}

export default GoogleAdsense
