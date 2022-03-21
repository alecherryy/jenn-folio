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
        <Headshot />
        <Content />
      </Split>
    </div>
  )
}