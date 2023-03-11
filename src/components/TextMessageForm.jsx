import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowRight } from './icons/Arrows'
import { ModeToggle } from './ModeToggle'
import { ActionAbleButton } from '@/components/Button'
export const TextMessageForm = ({ toggleModal }) => {
  // const { register, errors, handleSubmit } = useForm();

  const intialform = [
    { label: 'Message', value: 'Send us a message' },
    { label: 'Full name', value: 'Albert H. Wiggin' },
    { label: 'Email address', value: 'awiggin@chase.com' },
  ]

  const [messageFormData, setMessageFormData] = useState(intialform)
  const [showSendingBtn, setShowSendingBtn] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }
  // const onSubmit = async (data) => {
  //     const fields = { fields: data };
  //   };
  const handleSubmit = (event) => {
    event.preventDefault()
    // let timerId = setInterval(() => setTimeout(setShowSendingBtn(true), 2000), 5000);
    let timerId = setInterval(() => setShowSendingBtn(true), 1400)

    // after 5 seconds stop
    setTimeout(() => {
      console.log('Clearing Interval')
      clearInterval(timerId)
      setShowSendingBtn(false, toggleModal(true))
    }, 4000)
    // Clear Form
  }

  return (
    <React.Fragment>
      {/* <h1 className="text-center text-4xl font-semibold mt-0">Message Us</h1> */}
      <form
        className="bg-whiteisIpadMargin ispadPadding mt-2 flex-auto rounded-t-2xl "
        onSubmit={() => handleSubmit()}
      >
        {/* <label className="text-sm text-gray-500 block mt-4">
            Description
          </label> */}
        <textarea
          className="w-full rounded border border-solid border-gray-300 py-2 px-2 text-gray-700"
          name="description"
          rows={2}
          cols={2}
          placeholder="Tell us a bout it"
          autoFocus
          // ref={register({
          //   required: "Please enter a job description",
          // })}
        />
        <label className="block text-sm text-gray-500 md:mx-0 md:mt-3">
          Name
        </label>
        <input
          className="w-full rounded border border-solid border-gray-300 px-2 text-gray-700 md:py-2"
          name="name"
          placeholder="Massi .."

          // ref={register({
          //   required: "Please enter a job title",
          // })}
        />
        {/* {errors.title && (
            <div className="mb-3 text-normal text-red-500">
              {errors.title.message}
            </div>
          )} */}

        <label className="mt-3 block text-sm text-gray-500 md:mx-0">
          Email
        </label>
        <input
          className="w-full rounded border border-solid border-gray-300 text-gray-700 md:w-full md:py-2 md:px-2"
          name="email"
          type="email"
          placeholder="koko@miraworks.com"
          // ref={register({
          //   required: "Please enter a location",
          // })}
        />
        {/* {errors.location && (
            <div className="mb-3 text-normal text-red-500 ">
              {errors.location.message}
            </div>
          )} */}

        {/* {errors.description && (
            <div className="mb-3 text-normal text-red-500 ">
              {errors.description.message}
            </div>
          )} */}

        {/* <label className="text-gray-600 font-medium block mt-4">
            Link to floor plans or site photos
          </label>
          <input
            className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
            name="link"
            type="text"
            placeholder="https://miraprojectsnyc.com/"
            // ref={register({
            //   required: "Please enter a link",
            // })}
          /> */}
        {/* {errors.link && (
            <div className="mb-3 text-normal text-red-500 ">
              {errors.link.message}
            </div>
          )}
   */}
        <label className="sr-only md:not-sr-only md:mx-4 md:mt-4 md:block md:text-sm md:text-gray-500">
          Time Sensitivity
        </label>
        <div className="sr-only flex justify-center md:not-sr-only md:mt-2">
          <label className="inline-block text-slate-800">
            <input
              className="mt-4 mr-1 text-slate-800"
              name="jobtype"
              type="radio"
              //   ref={register({
              //     required: "Please select a job type",
              //   })}
            />
            urgent
          </label>

          <label className="ml-8 inline-block text-slate-800">
            <input
              className="mt-4 mr-1 text-slate-800"
              name="jobtype"
              type="radio"
              //   ref={register({
              //     required: "Please select a job type",
              //   })}
            />
            flexible
          </label>
        </div>

        {/* {errors.jobtype && (
            <div className="mb-3 text-normal text-red-500 ">
              {errors.jobtype.message}
            </div>
          )} */}
        {/* <div className="rounded-lg   bg-black mt-8 text-center mx-2"> */}
        <ActionAbleButton
          handleSubmit={handleSubmit}
          showSendingBtn={showSendingBtn}
          btnText={'send'}
          fetchingBtnText={''}
        />
        {/* <div className="mt-6 flex items-center justify-center">
          {!showSendingBtn && (
            <button
              type="button"
              className="inline-flex w-32 items-center rounded-md bg-slate-900 px-10 py-2 text-center text-sm font-semibold leading-6 text-white shadow hover:bg-black"
              disabled={showSendingBtn && true}
              onClick={() => handleSubmit(event)}
            >
              Send <ArrowRight color="text-white" />
            </button>
          )}
          {showSendingBtn && (
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-slate-700 px-4 py-2 text-sm font-semibold leading-6 text-white shadow hover:bg-slate-900"
              disabled={true}
            >
              <svg
                className="-ml-1 mr-3 h-5 w-5 animate-spin text-orange-400 motion-reduce:hidden"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
              <ArrowRight color="text-white" />
            </button>
          )}
        </div> */}
        {/* <div className="flex justify-center">   
             <button type="button" className="text-center inline-flex bg-black hover:bg-slate-700 py-2 px-3 text-center text-sm font-semibold text-white" type="submit" onClick={handleSubmit}>
            Send  <span classname="px-4 py-0"></span></button>
           
             </div> */}
        {/* </div> */}

        {/* <div className="mt-6 bg-black rounded-lg text-center">
           <button className="py-2 px-0 text-center text-sm font-semibold text-white hover:bg-slate-700"  >Invite person</button> 
          </div> */}
        {/* <button
            className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
            type="submit"
          >
            Submit
          </button> */}
      </form>
    </React.Fragment>
  )
}

//         <form onSubmit={this.handleSubmit}>

//           <label>
//             {/* Name: */}
//             <input type="text" className="border-blue-300 rounded-lg"value={this.state.value} onChange={this.handleChange} />
//           </label>
//             <input type="submit" value="Submit" />
//         </form>

//   }
