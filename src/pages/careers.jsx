import Head from 'next/head'

import { Footer } from '@/components/Footer'

import { StandardNav } from '@/components/StandardNav'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { Stats } from '@/components/dashboard/Stats'
import { Developer } from '@/components/dashboard/Developer'
import { useEffect } from 'react'

import { Image } from 'next/image'

export default function Careers() {
  /*
        Code to check if onboarding has been complete
      */

  {/* Each person will be an object in an array team */ }
  const team = [

    {
      personName: "Pranav Ramesh",
      position: "CEO",
      image: "../pranavCTF.jpeg",
      width: "200",
      height: "200"
    },

    {
      personName: "Raymond Yan",
      position: "Co-Founder",
      image: "../Raymond.jpeg",
      width: "195"
    },
    {
      personName: "Abhinav Byreddy",
      position: "Systems Architect",
      image: "../abhi.jpeg",
      width: "200",
      height: "200"
    },
    
  ]



  useEffect(() => {
    fetch("api.ctfguide.com/dashboard")
      .then((res) => res.json())

      .then((data) => {
        if (data.onboardingComplete == false) {
          //      window.location.replace("http://localhost:3000/onboarding?part=1")
        }
      }
      )
    //  .catch((error) => window.location.replace("http://localhost:3000/onboarding?part=1"))
  })


  return (
    <>
      <Head>
        <title>Careers - CTFGuide</title>
        <meta
          name="description"
          content="Cybersecurity made easy for everyone"
        />
        <style>
          @import url(&apos;https://fonts.googleapis.com/css2?family=Poppins&display=swap&apos;);
        </style>
      </Head>



      <StandardNav />
      <main>

        <div className='mx-auto text-center w-full mt-20 mb-20 max-w-6xl'>
  
              <p className="mt-2 text-4xl font-bold text-white sm:text-4xl">Meet the team behind <span className='mt-2 text-4xl font-bold tracking-tight text-blue-600 sm:text-4xl'>CTFGuide</span></p>
              <p className="mt-2 text-2xl font-bold  text-white ">A group of students dedicated to providing a space where students can learn, teachers can teach, and professionals can compete in the ever-emerging field of Cybersecurity</p>
      
        </div>


        {
          /*
         sm is for "smaller" devices
         */
        }
        <div className='grid grid-cols-3 gap-4 mx-auto text-center max-w-7xl'>
          {
            team.map((person) => {
              return (
                <div className='text-white py-8 '>
                  <img className={' rounded-full mx-auto '} width={person.width} height={person.width} src={person.image}></img>
                  <h1 className={'font-bold text-xl text-blue-500 text-xl mt-4'}>{person.personName}</h1>
                  <h2>{person.position}</h2>
                </div>
              )
            })
          }
        </div>


        <div className="overflow-hidden  py-24 sm:py-32" style={{ backgroundColor: "#212121" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">


            <div className="mx-auto grid grid-cols-2 gap-6">

              <div id="entity1">
                <div>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Looking for a Job?</p>

                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      style={{ backgroundColor: "#161716", borderWidth: "0px" }}
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="email"
                      required
                      className="text-white block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>

                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      style={{ backgroundColor: "#161716", borderWidth: "0px" }}
                      id="FirstName"
                      name="FirstName"
                      type="text"
                      autoComplete="FirstName"
                      required
                      className="text-white block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      style={{ backgroundColor: "#161716", borderWidth: "0px" }}
                      id="LastName"
                      name="LastName"
                      type="text"
                      autoComplete="LastName"
                      required
                      className="text-white block w-full appearance-none rounded-md border border-gray-300 px-3 py- placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

              </div>

              <div id="entity2">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl py-3">Tell us about yourself!</h1>
                <textarea className='w-full h-full rounded-md px-4 py-3 text-white' style={{ backgroundColor: "#161716", borderWidth: "0px" }}></textarea>

              </div>


            </div>



          </div>
        </div>


      </main>

      <Footer />

    </>




  ); {/* End of return */ }

}