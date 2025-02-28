import { useTranslation } from 'react-i18next';
import Meta from "@/components/layout/Meta";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <Meta 
        title={t('privacy.meta.title')}
        description={t('privacy.meta.description')}
      />
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            
            <section className="mb-8">
              <p className="text-lg">
                This Privacy Policy describes how your personal information is collected, used, and shared 
                when you visit or make a purchase from the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Personal Information Collected</h2>
              <p>
                When you visit the Site, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Information about your web browser</li>
                <li>IP address</li>
                <li>Time zone</li>
                <li>Cookies installed on your device</li>
              </ul>
              <p>
                Additionally, as you browse the Site, we collect information about:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Individual web pages or products that you view</li>
                <li>Websites or search terms that referred you to the Site</li>
                <li>How you interact with the Site</li>
              </ul>
              <p>We refer to this automatically-collected information as "Device Information."</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Collection Technologies</h3>
              <p>We collect Device Information using the following technologies:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Cookies:</strong> Data files placed on your device that often include an anonymous unique identifier. 
                  <a href="http://www.allaboutcookies.org" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    Learn more about cookies
                  </a>
                </li>
                <li>
                  <strong>Log files:</strong> Track actions on the Site, collecting data including IP address, browser type, 
                  Internet service provider, referring/exit pages, and date/time stamps
                </li>
                <li>
                  <strong>Web beacons, tags, and pixels:</strong> Electronic files used to record information about how you browse the Site
                </li>
                <li>Order information and website usage data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Usage of Personal Information</h2>
              <p>We use Order Information to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Fulfill orders placed through the Site</li>
                <li>Process payments</li>
                <li>Arrange shipping</li>
                <li>Provide invoices and order confirmations</li>
                <li>Communicate with you</li>
                <li>Screen orders for potential risk or fraud</li>
                <li>Provide information about our products or services (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Sharing Personal Information</h2>
              <p>We share your Personal Information with trusted third parties:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Google Analytics:</strong> To understand how customers use the Site. 
                  <a href="https://www.google.com/intl/en/policies/privacy/" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>Razorpay:</strong> For payment processing. 
                  <a href="https://razorpay.com/privacy/" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    Razorpay Privacy Policy
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p>
                We maintain your Order Information for our records unless and until you ask us to delete this information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes to our practices or for other 
                operational, legal or regulatory reasons.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                For more information about our privacy practices, if you have questions, or if you would like to make a 
                complaint, please contact us via our Contact Us form on our website.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 