const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto justify-between w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className='flex items-center gap-1 text-red-900 text-50 font-[900]'>EVOGYM <div className='w-[18px] h-[18px] rounded-full bg-primary-500'></div></div>
          <p className="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus facilis, voluptatum temporibus consectetur qui sed corporis, nisi error magnam rerum dolorem voluptate natus. Facere? </p>
          <p>@ EVOGYM All Right Reserverd.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravoda id et etiam</p>
          <p>Ullamcorper Vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Massa orci senectus</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
