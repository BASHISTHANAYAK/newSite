import { useTranslation } from 'react-i18next';
import Meta from "@/components/layout/Meta";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Terms() {
  const { t } = useTranslation();

  return (
    <>
      <Meta 
        title={t('terms.meta.title')}
        description={t('terms.meta.description')}
      />
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p>
                This website, including all information, tools and services available from this site to you, the user, 
                is conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
              </p>
              <p>
                By visiting our site and/ or purchasing something from us, you engage in our "Service" and agree to be bound 
                by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions 
                and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, 
                including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
              </p>
              <p>
                Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part 
                of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions 
                of this agreement, then you may not access the website or use any services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Online Store</h2>
              <p>
                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state 
                or province of residence, or that you are the age of majority in your state or province of residence and you 
                have given us your consent to allow any of your minor dependents to use this site.
              </p>
              <p>
                You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, 
                violate any laws in your jurisdiction (including but not limited to copyright laws).
              </p>
              <p>
                You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any 
                of the Terms will result in an immediate termination of your Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">General</h2>
              <p>
                We reserve the right to refuse service to anyone for any reason at any time.
              </p>
              <p>
                You understand that your content (not including credit card information), may be transferred unencrypted and involve 
                (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting 
                networks or devices. Credit card information is always encrypted during transfer over networks.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Products and Services</h2>
              <p>
                Certain products or services may be available exclusively online through the website. These products or services 
                may have limited quantities and are subject to return or exchange only according to our Return Policy.
              </p>
              <p>
                We have made every effort to display as accurately as possible the colors and images of our products that appear 
                at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
              </p>
              <p>
                We reserve the right to limit the quantities of any products or services that we offer. All descriptions of 
                products (including garnish of the product or packaging) or product pricing are subject to change at any time 
                without notice, at the sole discretion of us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Third Party Services</h2>
              <p>
                We use Razorpay as a payment gateway. The services of Razorpay are subject to their terms and conditions which 
                can be found at their website.
              </p>
              <p>
                We may use third party delivery services like Dunzo. You may find their terms on their website.
              </p>
              <p>
                We use Servetel as a third party service provider to make calls and send text messages and by using any of our 
                services you agree and consent to receiving calls and text messages directly from us or through this third party.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
              <p>
                Our policy lasts 36 hours. If within 36 hours of your purchase you find any defects or damages to the product 
                please contact us on the store number from where the item was purchased.
              </p>
              <p>
                For items with the same day shelf life, any complaints regarding defects or damages need to be registered on 
                the same day.
              </p>
              <p>
                To verify your claim of a defect or damage, we require a receipt or proof of purchase. Please send us a copy 
                of your bill, or the online order ID along with relevant images or videos of the defective product.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Store Collection / Delivery</h2>
              <p>
                No refunds or replacements will be offered for orders or products if the items are not collected on the date 
                for which the booking has been made.
              </p>
              <p>
                If the order placed is for delivery, and you are unavailable at the location when the delivery is being attempted 
                or our agent is unable to contact you after repeated attempts or if an incorrect location has been mapped for 
                delivery your order will stand cancelled and no refund will be processed for the same.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to us via our Contact Us form on our website.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 