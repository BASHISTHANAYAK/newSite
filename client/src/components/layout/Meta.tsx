import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function Meta({
  // Using a smaller optimized image for better performance in meta tags
  image = "https://connectapp.fra1.digitaloceanspaces.com/uploads/eatoes_logo_small.png",
  url = "https://eatoes.com",
}: MetaProps) {
  const { t, i18n } = useTranslation();

  const title = t('meta.title');
  const description = t('meta.description');
  const currentUrl = `${url}${i18n.language === 'fr' ? '/fr' : ''}`;

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Eatoes" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Social Media Profiles */}
      <meta property="og:see_also" content="https://www.instagram.com/eatoesofficial/" />
      <meta property="og:see_also" content="https://www.facebook.com/eatoesofficial" />
      <meta property="og:see_also" content="https://www.linkedin.com/company/eatoes" />
      <meta property="og:see_also" content="https://x.com/eatoesofficial" />
      
      {/* Twitter Username */}
      <meta name="twitter:site" content="@eatoesofficial" />
      <meta name="twitter:creator" content="@eatoesofficial" />

      {/* Additional SEO tags */}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={`restaurant management, digital menu, QR code menu, WhatsApp integration, table booking, restaurant technology, Eatoes, ${i18n.language === 'fr' ? 'gestion restaurant, menu numérique, réservation' : ''}`} />
      
      {/* Alternate language versions */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="fr" href={`${url}/fr`} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/png" href={image} />
      <link rel="apple-touch-icon" href={image} />

      {/* Additional Meta */}
      <meta name="application-name" content="Eatoes" />
      <meta name="theme-color" content="#000000" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Eatoes" />
    </Helmet>
  );
} 