import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PrivacyPolicy(params) {
  return (
    <>
      <Navbar />
      <h1>Privacy&Policy</h1>
      <h2>Effective Date: [Insert Date]</h2>
      <p>
        At Art Culture, your privacy is important to us. This Privacy Policy
        explains how we collect, use, store, and protect the personal
        information of our users when they access or use our platform. By using
        Art Culture, you agree to the practices described in this policy.
      </p>
      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information from users:</p>
      <ol type="a">
        <li>
          {" "}
          Personal Information:
          <ul>
            <li>Name, email address, username, and password.</li>
            <li>
              Profile information, including artist biographies, portfolio, and
              cultural background.
            </li>
          </ul>
        </li>
        <li>
          Usage Information:
          <ul>
            <li>
              Data on how you interact with the website, such as pages visited,
              content viewed, and features used.
            </li>
            <li>
              Device and browser information, IP address, and login times.
            </li>
          </ul>
        </li>
        <li>
          Submitted Content:
          <ul>
            <li>
              Art, images, videos, music, and other creative content that you
              upload to the platform.
            </li>
            <li>
              Comments, messages, or any communication you make through the
              site.
            </li>
          </ul>
        </li>
      </ol>
      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect for purposes including:</p>
      <ul>
        <li>To provide and maintain the Art Culture platform.</li>
        <li>
          To allow you to create, manage, and display your profile and content.
        </li>
        <li>
          To communicate with you about updates, notifications, or
          platform-related news.
        </li>
        <li>
          To improve user experience, website functionality, and services.
        </li>
        <li>
          To protect our platform, prevent fraud, and ensure compliance with
          legal obligations.
        </li>
        <li>
          To showcase user content (with your consent) and promote cultural
          initiatives.
        </li>
      </ul>
      <h2>3. Sharing of Information</h2>
      <p>
        We respect your privacy and do not sell personal information to third
        parties. However, we may share information in the following cases:
      </p>
      <ul>
        <li>
          With other users, if you choose to make your content or profile
          public.
        </li>
        <li>
          With service providers who help operate our platform, such as hosting
          services or analytics providers, under strict confidentiality.
        </li>
        <li>
          When required by law or to protect the rights, safety, or property of
          Art Culture or its users.
        </li>
        <li>
          In connection with a merger, acquisition, or sale of assets, provided
          that your personal information remains protected.
        </li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to
        protect your personal information from unauthorized access, disclosure,
        alteration, or destruction. However, no online platform is completely
        secure, and we cannot guarantee absolute security.
      </p>

      <h2>5. Cookies and Tracking</h2>
      <ul>
        <li>
          Art Culture may use cookies, web beacons, and similar technologies to
          enhance your experience, track usage, and provide personalized
          content.
        </li>
        <li>
          You can manage your cookie preferences through your browser settings.
        </li>
      </ul>
      <h2>6. User Rights</h2>
      <ul>
        <li>
          You have the right to access, update, or delete your personal
          information by logging into your account or contacting us.
        </li>
        <li>You can choose to make your content public or private.</li>
        <li>You may opt out of marketing communications at any time.</li>
      </ul>

      <h2>7. Children’s Privacy</h2>
      <p>
        Art Culture is not intended for children under 13 years of age. We do
        not knowingly collect personal information from children. If we learn
        that personal data of a child has been collected, we will delete it
        immediately.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        Our platform may include links to external websites. We are not
        responsible for the privacy practices or content of these third-party
        sites. We encourage users to read the privacy policies of any linked
        websites.
      </p>

      <h2>9. Retention of Data</h2>
      <p>
        We retain your personal information for as long as your account is
        active or as needed to provide our services. We may also retain data as
        required for legal compliance or dispute resolution.
      </p>

      <h2>10. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated “Effective Date.” Continued use of
        Art Culture after changes constitutes acceptance of the updated policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy, please contact us at: Email: [Insert Email] Address: [Insert
        Address]
      </p>

      <Footer />
    </>
  );
}
