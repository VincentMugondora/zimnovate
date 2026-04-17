import React from 'react'
import { Helmet } from 'react-helmet-async'

/**
 * SEOHead Component - Comprehensive SEO meta tags for all pages
 * @param {Object} props
 * @param {string} props.title - Page title (will append "| Zimnovate")
 * @param {string} props.description - Page meta description (150-160 chars recommended)
 * @param {string} props.keywords - Comma-separated keywords
 * @param {string} props.canonical - Canonical URL (full URL)
 * @param {string} props.ogType - Open Graph type (default: "website")
 * @param {string} props.ogImage - Open Graph image URL
 * @param {Object} props.schema - JSON-LD structured data object
 * @param {boolean} props.noindex - Set to true to prevent indexing
 */
const SEOHead = ({
  title = 'Zimnovate — Web Development & Digital Solutions in Zimbabwe',
  description = 'Zimnovate is a Zimbabwean digital agency specializing in website development, e-commerce, mobile apps, branding, and custom software solutions that help businesses grow in Harare and across Zimbabwe.',
  keywords = 'web development Zimbabwe, digital agency Zimbabwe, website design Harare, e-commerce website Zimbabwe, custom software development Zimbabwe, affordable website design Zimbabwe, mobile app development Zimbabwe, branding agency Zimbabwe, SEO Zimbabwe, digital marketing Zimbabwe',
  canonical,
  ogType = 'website',
  ogImage = 'https://zimnovate.co.zw/images/og-cover.jpg',
  schema,
  noindex = false,
}) => {
  const fullTitle = title.includes('Zimnovate') ? title : `${title} | Zimnovate`
  const siteUrl = 'https://zimnovate.co.zw'
  const fullCanonical = canonical || siteUrl

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zimnovate" />
      <meta property="og:locale" content="en_ZW" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@zimnovate" />
      <meta name="twitter:creator" content="@zimnovate" />

      {/* Additional SEO tags */}
      <meta name="author" content="Zimnovate Digital Agency" />
      <meta name="publisher" content="Zimnovate" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="ZW-HA" />
      <meta name="geo.placename" content="Harare" />
      <meta name="geo.position" content="-17.8292;31.0522" />
      <meta name="ICBM" content="-17.8292, 31.0522" />

      {/* Mobile Web App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zimnovate" />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOHead
