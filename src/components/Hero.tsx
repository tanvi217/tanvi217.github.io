import Button from "./Button"

interface Props {
  scrollToAbout: () => void
}

const Hero = ({ scrollToAbout = () => {} }: Props) => {
  return (
    <section className="bg-white dark:bg-neutral-900 py-20 lg:py-48">
      <div className="relative grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mx-auto place-self-center lg:col-span-7">
          <h1 className="lg:max-w-2xl mb-4 text-4xl font-normal tracking-normal md:text-5xl xl:text-6xl">
            I'm Tanvi Agarwal
          </h1>
          <p className="lg:max-w-2xl mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
          👋 Hi, I’m a passionate Software Engineer and grad student at UMass Amherst.
          I’ve worked across backend systems and cloud infrastructure at Microsoft and Amazon, building scalable and secure services in C++, C#, Java, and Azure.
          <br></br>
          🔍 My interests lie in AI, systems and privacy. I love solving hard problems and making tech more responsible and efficient.
          </p>
        </div>
        <div className="lg:order-first lg:mt-0 lg:col-span-5 relative">
          <img src="/images/sticker.webp" width="200%" height="auto" alt="hero" className="transition-all duration-700 opacity-0 animating-image" />
          <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
        </div>
        <Button runFunc={scrollToAbout} classNames="lg:absolute w-24 h-24" />
      </div>
    </section>
  )
}

export default Hero