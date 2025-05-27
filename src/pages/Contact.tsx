import { useState } from 'react'
import AnimatedLink from '../components/AnimatedLink'
import ArrowTopRight from '../components/ArrowTopRight'
import socialLinks from '../../socialLinks.json'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')

  const submitForm = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col">
      <section className="bg-white dark:bg-neutral-900 py-20 lg:py-32">
        <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
          <div className="place-self-start lg:col-span-6">
            <h1 className="mb-4 text-4xl font-medium tracking-normal md:text-5xl">
              Lets Connect!
            </h1>
            <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl my-5">
            I’d love to hear from you! Whether you have a question, a project idea, or just want to chat about the latest tech trends, feel free to reach out. Your thoughts and feedback are always welcome!
            </p>
            <div className="grid auto-cols-fr max-w-scree-xl sm:grid-cols-2 grid-cols-1 gap-10">
              {
                socialLinks.map((link) => <AnimatedLink key={link.link} download={''} title={link.title} link={link.link} isExternal={true} />)
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact