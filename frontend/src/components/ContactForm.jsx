import { useContext, useState } from "react"
import { formDataDE, formDataES } from "../data/formData.js"
import { languageContext } from "../Context/Context.jsx"

export default function ContactForm() {
  const { language } = useContext(languageContext)

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [street, setStreet] = useState("")
  const [zip, setZip] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [message, setMessage] = useState("")
  const [approval, setApproval] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({ firstname, lastname, email, phone, street, zip, city, state, message, approval })
  }

  const handleCancel = () => {
    setFirstname("")
    setLastname("")
    setEmail("")
    setPhone("")
    setStreet("")
    setZip("")
    setCity("")
    setState("")
    setMessage("")
    setApproval(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        {/* <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    workcation.com/
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="pb-12 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            {language === "DE" && formDataDE.heading}
            {language === "ES" && formDataES.heading}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            {language === "DE" && formDataDE.text}
            {language === "ES" && formDataES.text}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* First Name */}
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900">
                {language === "DE" && formDataDE["firstname"].title}
                {language === "ES" && formDataES["firstname"].title}
                {formDataDE["firstname"].required && "*"}
              </label>
              <div className="mt-2">
                <input
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder={
                    (language === "DE" && formDataDE["firstname"].placeholder) ||
                    (language === "ES" && formDataES["firstname"].placeholder)
                  }
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900">
                {language === "DE" && formDataDE["lastname"].title}
                {language === "ES" && formDataES["lastname"].title}
                {formDataDE["lastname"].required && "*"}
              </label>
              <div className="mt-2">
                <input
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder={
                    (language === "DE" && formDataDE["lastname"].placeholder) ||
                    (language === "ES" && formDataES["lastname"].placeholder)
                  }
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* E-Mail */}
            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {language === "DE" && formDataDE["email"].title}
                {language === "ES" && formDataES["email"].title}
                {formDataDE["email"].required && "*"}
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    (language === "DE" && formDataDE["email"].placeholder) ||
                    (language === "ES" && formDataES["email"].placeholder)
                  }
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="sm:col-span-3">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                {language === "DE" && formDataDE["phone"].title}
                {language === "ES" && formDataES["phone"].title}
                {formDataDE["phone"].required && "*"}
              </label>
              <div className="mt-2">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={
                    (language === "DE" && formDataDE["phone"].placeholder) ||
                    (language === "ES" && formDataES["phone"].placeholder)
                  }
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Country */}
            {/* <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div> */}

            {/* Street */}
            <div className="sm:col-span-full lg:col-span-3 ">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900">
                {language === "DE" && formDataDE["street"].title}
                {language === "ES" && formDataES["street"].title}
                {formDataDE["street"].required && "*"}
              </label>
              <div className="mt-2">
                <input
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder={
                    (language === "DE" && formDataDE["street"].placeholder) ||
                    (language === "ES" && formDataES["street"].placeholder)
                  }
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* ZIP */}
            <div className="sm:col-span-2 lg:col-span-1">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900">
                {language === "DE" && formDataDE["zip"].title}
                {language === "ES" && formDataES["zip"].title}
                {formDataDE["zip"].required && "*"}
              </label>
              <div className="mt-2">
                <input
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder={
                    (language === "DE" && formDataDE["zip"].placeholder) ||
                    (language === "ES" && formDataES["zip"].placeholder)
                  }
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  pattern="\d{5}"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* City */}
            <div className="sm:col-span-2 lg:col-span-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                {language === "DE" && formDataDE["city"].title}
                {language === "ES" && formDataES["city"].title}
                {formDataDE["city"].required && "*"}
              </label>
              <div className="mt-2">
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder={
                    (language === "DE" && formDataDE["city"].placeholder) ||
                    (language === "ES" && formDataES["city"].placeholder)
                  }
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* State */}
            <div className="sm:col-span-2 lg:col-span-1">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                {language === "DE" && formDataDE["state"].title}
                {language === "ES" && formDataES["state"].title}
                {formDataDE["state"].required && "*"}
              </label>
              <div className="mt-2">
                <input
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder={
                    (language === "DE" && formDataDE["state"].placeholder) ||
                    (language === "ES" && formDataES["state"].placeholder)
                  }
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Message */}
            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900">
                {language === "DE" && formDataDE["message"].title}
                {language === "ES" && formDataES["message"].title}
                {formDataDE["message"].required && "*"}
              </label>
              <div className="mt-2">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    (language === "DE" && formDataDE["message"].placeholder) ||
                    (language === "ES" && formDataES["message"].placeholder)
                  }
                  type="text"
                  name="message"
                  id="message"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-32"
                  autoComplete="message"></textarea>
              </div>
            </div>

            {/* Approval */}
            <div className="flex gap-2 col-span-full">
              {/* Checkbox */}
              <div className="flex h-6 items-center">
                <input
                  value={approval}
                  onChange={(e) => setApproval(e.target.checked)}
                  id="approval"
                  name="approval"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  checked={approval ? true : false}
                />
              </div>
              <div className="text-sm leading-6 flex gap-2">
                <label htmlFor="approval" className="font-medium text-gray-900">
                  {language === "DE" && formDataDE["approval"].title}
                  {language === "ES" && formDataES["approval"].title}
                  {formDataDE["approval"].required && "*"}
                </label>
                <p className="text-gray-500">
                  Get notified when someones posts a comment on a posting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to
            hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    <p className="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Candidates
                    </label>
                    <p className="text-gray-500">
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p className="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Push Notifications
              </legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                These are delivered via SMS to your mobile phone.
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div> */}
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 max-w-7xl mx-auto px-6">
        <button
          onClick={handleCancel}
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900">
          {language === "DE" && formDataDE.cancel}
          {language === "ES" && formDataES.cancel}
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {language === "DE" && formDataDE.submit}
          {language === "ES" && formDataES.submit}
        </button>
      </div>
    </form>
  )
}
