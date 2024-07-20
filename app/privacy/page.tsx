import React from 'react'

const PrivacyPolicy = () => {
  return (
    <article className="mt-40 max-w-[800px] lg:ml-[20%] md:mr-auto m-5">
      <div className="flex flex-col gap-2 mb-16">
        <div className="text-5xl font-bold">
          Privacy Policy
        </div>

        <div className="font-medium text-secondary text-lg">
          Last Updated: 2024-07-20
        </div>
      </div>

      <div className="md:text-lg font-medium leading-snug">
        <div className="text-2xl font-bold pb-3 mb-3 border-projectCard-secondary border-b">Introduction</div>
        Welcome to the personal portfolio website of Cameron Jack. This privacy policy outlines how I collect, use, and protect your information when you visit 
        this website.
        <br /><br />



        <div className="text-2xl font-bold pb-3 mb-3 border-projectCard-secondary border-b">Information I Collect</div>
        There are no cookies or similar tracking technologies on this website. We don&apos;t collect or monitor analytics or user behaviour metrics. 
        I only collect information that you, the user, explicity and voluntarily provide through feedback and bug report forms.

        <div className="pl-2 mt-6">
          <div className="font-bold pb-2">Feedback and Bug Report Forms</div>
          When you submit a feedback or bug report form, the following information is collected:
          <ul className="list-disc pl-10">
            <li>Your Name</li>
            <li>Your experience (either for providing feedback or accurately reporting a bug)</li>
            <li>Email address (optional opt-in, for follow-up communication)</li>
          </ul>
        </div>

        <div className="pl-2 mt-6">
          <div className="font-bold pb-2">Contact Information</div>
          This website includes links to GitHub and LinkedIn, and my email address for direct communication. If you choose to contact me through these methods, 
          any information you provide will be governed by the privacy policies and terms of use of the respective platforms.
        </div>
        <br /><br />



        <div className="text-2xl font-bold pb-3 mb-3 border-projectCard-secondary border-b">Use of Information</div>
        I use the information collected through feedback and bug report forms solely for the purpose of responding to your comments, specifically:
        <ul className="list-disc pl-10">
          <li>To address any issues, concerns, or questions you have raised</li>
          <li>To follow up on feedback or bug reports, given you have provided your email address</li>
        </ul>
        <br /><br />



        <div className="text-2xl font-bold pb-3 mb-3 border-projectCard-secondary border-b">Sharing of Information</div>
        I don&apos;t sell, trade, or transfer any information to other parties. This does not include trusted third parties who assist in operating this 
        website, conducting business, or serving users, so long as those parties agree to keep this information confidential.
        <br /><br />



        <div className="text-2xl font-bold pb-3 mb-3 border-projectCard-secondary border-b">Data Security</div>
        There are a number of security measures in place to protect your information. Any information you provide will be stored in a secure database only accessible by me.
        <br /><br />



        <div className="text-2xl font-bold pb-3 mb-3 border-projectCard-secondary border-b">Your Consent</div>
        By using this website, you consent to this privacy policy.
        <br /><br />



        <div className="text-2xl font-bold pb-3 mb-3 border-projectCard-secondary border-b">Changes to The Privacy Policy</div>
        This policy is subject to change at any time. Any changes will be posted on this page with an updated revision date.
        <br /><br />



        <div className="text-2xl font-bold pb-3 mb-3 border-projectCard-secondary border-b">Contact</div>
        If you have any questions or concerns regarding the Privacy Policy, please contact me directly, ensuring that the words &quot;Privacy Policy&quot; are included in the subject line:
        <br /><br />
        <p className="pl-10 font-semibold">Cameron Jack</p>
        <p className="pl-10 text-secondary">cameronjack@protonmail.com</p>
        <br /><br />
        <div className="text-secondary">2024-07-20</div>
      </div>

    </article>
  )
}

export default PrivacyPolicy