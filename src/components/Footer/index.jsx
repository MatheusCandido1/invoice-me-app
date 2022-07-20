
import { GrInstagram, GrLinkedin } from 'react-icons/gr';
export default function Footer() {
  return (
    <footer className="text-gray-600 body-font -bottom-7 relative w-full ">
  <div className="container px-4 py-4 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-center">
      <p className="flex title-font font-medium items-center md:justify-center justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-primary-main rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">QSiA</span>
      </p>
      <p className="mt-2 text-sm text-gray-500">Software Development</p>
    </div>
  </div>
  <div className="bg-primary-main">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center sm:text-left">© 2022 SQiA —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@candin</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-2 text-white">
        <GrInstagram size={24} />
        <GrLinkedin size={24} />
      </span>
    </div>
  </div>
</footer>
  )
}