import HText from '../../shared/HText'
import image from '../../assets/wave1.png'
import { SelectedPage } from "../../shared/types"
import ActionButton from "../../shared/ActionButton";
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}



const GraphicsAndDescription = ({ setSelectedPage }: Props) => {
  return (
    <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
      {/* GRAPHIC */}
      <img
        className='mx-auto'
        alt='benefit-page-graphics'
        src={image}
      />

      {/* DESCRIPTION */}
      <div>
        {/* TITLE */}
        <div className='relative'>
          <div className='before:absolute before:-top-10 before:-left-20 before:z-[1] before:content-abstractwave '>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50},
                visible: { opacity: 1, x: 0}
              }}
            >
              <HText>
                MILLONS OF HAPPY MEMBERS GETTING{"  "}
                <span className='text-primary-500'>FIT.</span>
              </HText>
            </motion.div>
          </div>
        </div>

        {/* DESCRPT */}
        <motion.div
          className='sm:mt-20 '
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50},
            visible: { opacity: 1, x: 0}
          }}
        >
          <p className='my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ullam quibusdam. Dolorum voluptate molestias laboriosam?</p>
          <p className='my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ullam quibusdam. Dolorum voluptate molestias laboriosam?</p>
        </motion.div>

        {/* BUTTON */}
        <div className='relative mt-16'>
          <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-abstractwave'>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraphicsAndDescription


// before:content-envole