import { ClassType, SelectedPage } from "../../shared/types"
import { motion } from "framer-motion"
import image1 from '../../assets/classimage1.jpg'
import image2 from '../../assets/classimage2.jpg'
import image3 from '../../assets/classimage3.jpg'
import image4 from '../../assets/classimage4.jpg'
import image5 from '../../assets/classimage5.jpg'
import image6 from '../../assets/classimage6.jpg'
import HText from "../../shared/HText";
import Class from "./Class"


const classes: Array<ClassType> = [ // this object is optional some description is not there
  {
    name: "Weight Tranining Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam facere, perspiciatis placeat rem eveniet! ",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam facere, perspiciatis placeat rem eveniet! ",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam facere, perspiciatis placeat rem eveniet! ",
    image: image4,
  },
  {
    name: "Fitnes Classes",
    image: image5,
  },
  {
    name: "Tranining Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam facere, perspiciatis placeat rem eveniet! ",
    image: image6,
  },
];


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section 
      id="ourclasses" 
      className="w-full bg-primary-500 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50},
            visible: { opacity: 1, x: 0}
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam unde enim ipsa praesentium natus laboriosam voluptatem illum quos obcaecati, repudiandae vero autem magnam sunt debitis perferendis aut corporis quam fugit.</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[300px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, idx) => (
              <Class
                key={`${item.name}-${idx}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>        
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses;




