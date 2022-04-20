import { Fade } from "react-awesome-reveal"
import { Wrapper } from "./components/Wrapper/Wrapper"

/**
 * About page
 */
export const About = () => {

  return (
    <div className="p-home">
      <Fade direction="right" cascade>
        <Wrapper />
      </Fade>
    </div>
  )
}