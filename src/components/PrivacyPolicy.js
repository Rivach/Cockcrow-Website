import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
function PrivacyPolicy() {
  return (
    <>
      <div className='join-us'>
        <Header />
        <div
          class='container px-2 pl-6 py-0 mx-auto'
          style={{ paddingTop: '10%' }}
        >
          <div class='flex px-8 flex-col text-left w-full mb-12'>
            <h2
              class=' text-4xl text-center mb-6 font-medium '
              style={{ fontWeight: 'bold' }}
            >
              {' '}
              Privacy Policy{' '}
            </h2>
            <h1 class='text-2xl mb-2' style={{ fontWeight: 'bold' }}>
              Log Files
            </h1>
            <p class='text-xl mb-3'>
              www.cockcrow.in follows a standard procedure of using log files.
              These files log visitors when they visit websites. All hosting
              companies do this and a part of hosting services’ analytics. The
              information collected by log files include internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users’ movement on the
              website, and gathering demographic information.
            </p>
            <h1 class='text-2xl mb-2' style={{ fontWeight: 'bold' }}>
              Privacy Policies
            </h1>
            <p class='text-xl mb-3'>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of www.cockcrow.in . Third-party ad
              servers or ad networks uses technologies like cookies, JavaScript,
              or Web Beacons that are used in their respective advertisements
              and links that appear on www.rivach.com, which are sent directly
              to users’ browser. They automatically receive your IP address when
              this occurs. These technologies are used to measure the
              effectiveness of their advertising campaigns and/or to personalize
              the advertising content that you see on websites that you visit.
              Note that www.rivach.com has no access to or control over these
              cookies that are used by third-party advertisers.
            </p>
            <h1 class='text-2xl mb-2' style={{ fontWeight: 'bold' }}>
              Third Party Privacy Policies
            </h1>
            <p class='text-xl mb-3'>
              Thus, we are advising you to consult the respective Privacy
              Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options. You may find a complete list of
              these Privacy Policies and their links here: Privacy Policy Links.
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers’
              respective websites.
            </p>
            <h1 class='text-2xl mb-2' style={{ fontWeight: 'bold' }}>
              Children's Information
            </h1>
            <p class='text-xl mb-3'>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity. www.cockcrow.in does not knowingly collect any Personal
              Identifiable Information from children under the age of 10. If you
              think that your child provided this kind of information on our
              website, we strongly encourage you to contact us immediately and
              we will do our best efforts to promptly remove such information
              from our records.
            </p>
            <h1 class='text-2xl mb-2' style={{ fontWeight: 'bold' }}>
              Online Privacy Policy Only
            </h1>
            <p class='text-xl mb-3'>
              This privacy policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in www.cockcrow.in . This policy
              is not applicable to any information collected offline or via
              channels other than this website. By using our website, you hereby
              consent to our Privacy Policy and agree to its Terms and
              Conditions.
            </p>
            <p class='text-xl mb-4'>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us through email at
              cockcrowevents@gmail.com
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default PrivacyPolicy
