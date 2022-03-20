import { Headshot } from "../../core/Headshot/Headshot"
import { Split } from "../../layouts/Split/Split"
import { FeaturedWork } from "./components/FeaturedWork/FeaturedWork"
import { Title } from "./components/Title/Title"

/**
 * Home page
 */
export const Home = () => {

  return (
    <div className="p-home">
      <Split>
        <Headshot />
        <div className="p-home__inner">
          <Title />
          <FeaturedWork />
        </div>
      </Split>
    </div>
  )
}