import useMediaQuery from '../../hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid' 
import Link from './Link'
import { useState } from 'react';
import ActionButton from '../../shared/ActionButton';

type Props = {
  isTopPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void; 
}

const navbar = ({ isTopPage, selectedPage, setSelectedPage } : Props) => {

  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggle, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopPage ?  ""  : "bg-primary-100 drop-shadow";
  

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-40 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <div>
              <div className='flex items-center gap-1 text-red-900 text-50 font-[900]'>EVOGYM <div className='w-[18px] h-[18px] rounded-full bg-primary-500'></div></div>
            </div>

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <ul className={`${flexBetween} gap-8 text-sm`}>
                  <li>
                    <Link
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    /> 
                  </li>
                  <li>
                    <Link
                      page="Benefits"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    /> 
                  </li>
                  <li>
                    <Link
                      page="Our Classes"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    /> 
                  </li>
                  <li>
                    <Link
                      page="Contact Us"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    /> 
                  </li>
                </ul>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign Up</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
              </div>)
              : (
              <button
                className=' rounded-full bg-seconary-500 p-2'
                onClick={() => setIsMenuToggled(!isMenuToggle)}
              >
                <Bars3Icon className='h-6 w-6 text-white' />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggle && (
        <div className='fixed bottom-0 z-40 right-0 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
          {/* CLOSE ICON */}
          <div className='flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggle)}>
              <XMarkIcon className='h-6 w-6 text-gray-400' />
            </button>
          </div>
          {/* MENI ITEMS */}
          <ul className="ml-[33%] flex flex-col gap-10 text-2xl">
            <li>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> 
            </li>
            <li>
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> 
            </li>
            <li>
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> 
            </li>
            <li>
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> 
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default navbar;

