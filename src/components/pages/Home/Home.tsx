import { Content } from "components/core/Content/Content"
import { Teaser } from "components/core/Teaser/Teaser"
import { Title } from "components/core/Title/Title"
import { Grid } from "components/layouts/Grid/Grid"
import { FEATURED_WORK } from "content/featured-work"
import { Fade } from "react-awesome-reveal"
import { TeaserItem } from "types"
import { Headshot } from "../../core/Headshot/Headshot"
import { Split } from "../../layouts/Split/Split"

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
          <Content>
            <Title singleChar="J" title="é St Sume">
              <p>Ph.D. Government and Politics<br />
                <span className="u-txt-italic">
                  University of Maryland, College Park, MD
                </span>
              </p>
            </Title>
            <h6>Recent Publications</h6>
            <Grid numOfCols={3}>
              {FEATURED_WORK.map((item: TeaserItem, index: number) => (
                <Teaser key={index} {...item} />
              ))}
            </Grid>
          </Content>
        </Fade>
      </Split>
    </div>
  )
}