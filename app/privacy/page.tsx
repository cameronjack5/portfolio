import React from 'react'

const PrivacyPolicy = () => {
  return (
    <article className="mt-40 max-w-[800px] lg:ml-[20%] md:mr-auto m-5">
      <div className="flex flex-col gap-2 mb-16">
        <div className="text-5xl font-bold">
          Privacy Policy
        </div>

        <div className="font-medium text-secondary text-lg">
          Last Updated: 2024-07-12
        </div>
      </div>

      <div className="md:text-lg font-medium leading-snug">
          My privacy policy is pretty simple. Your data is yours. 
          I don't collect any information other than the information you explicitly provide in areas such as 
          contact or feedback forms. There are no analytics, tracking, or monitoring on this website, including 
          the use of 3rd party cookies. In fact, this website doesn't use any cookies beyond storing dark mode 
          preferences.
        <br /><br />
        <div className="text-secondary">2024-07-12</div>
      </div>


    </article>
  )
}

export default PrivacyPolicy