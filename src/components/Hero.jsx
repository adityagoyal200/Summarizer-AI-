import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/adityagoyal200/Summarizer-AI-", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize your Articles <br className='max-md:hidden' />
        <span className='Red_gradient '>With AI</span>
      </h1>
      <h2 className='desc'>
      Summarize is a freely available article summarizer tool.This tool aims to streamline the reading process by extracting and presenting the most important points from the original content.
      </h2>
    </header>
  );
};

export default Hero;