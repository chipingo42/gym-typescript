import { BenefitsType, SelectedPage } from "../../shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon  } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import GraphicsAndDescription from "./GraphicsAndDescription";


const benefits: Array<BenefitsType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolores!"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolores!"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and pro Trainers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolores!"
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void; 
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full  w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x:-50},
            visible: { opacity: 1, x: 0}
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFIT */}
        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefits: BenefitsType) => (
            <Benefit
              key={benefits.title}
              icon={benefits.icon}
              title={benefits.title}
              description={benefits.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <GraphicsAndDescription  setSelectedPage={setSelectedPage} />

      </motion.div>
    </section>
  )
}

export default Benefits;