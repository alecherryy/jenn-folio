import { Fade } from "react-awesome-reveal"
import { Headshot } from "../../core/Headshot/Headshot"
import { Split } from "../../layouts/Split/Split"
import { Content } from "./components/Content/Content"

/**
 * Home page
 */
export const Home = () => {

  return (
    <div className="p-home">
      <Split>
        <Fade duration={1000} direction="left">
          <Headshot />
        </Fade>
        <Fade duration={1000} direction="right">
          <Content />
        </Fade>
      </Split>
    </div>
  )
}