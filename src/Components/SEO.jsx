import { Helmet } from "react-helmet-async";

const SEO = ({title, description = "Consultoría cultural, investigación y gestión cultural.", keywords = "consultoría cultural, gestión cultural", image = "/og-image.jpg", url = "https://7consultoriacultural.com"}) => {

    const fullTitle = title ? `${title} | 7 Consultoría Cultural` : "7 Consultoría Cultural";

  return (
    <Helmet>
        {/* Schema.org */}
        <script type="application/ld+json">
        {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "7 Consultoría Cultural",
        "url": "https://7consultoriacultural.com",
        "logo": "https://7consultoriacultural.com/logo.png",
        "sameAs": [
            "https://www.linkedin.com/company/7-consultoria-cultural/",
            "https://www.instagram.com/7consultoriacultural/"
        ]
        })}
        </script>

        {/* Basico */}
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* canonical */}
        <link rel="canonical" href={url} />

        {/* Open graph (para redes sociales) */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="7 Consultoría Cultural"/>

        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} /> */}
    </Helmet>
  ) 
}

export default SEO;