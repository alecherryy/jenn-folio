import './styles.scss';
import { Content } from "components/core/Content/Content"
import { Teaser } from "components/core/Teaser/Teaser"
import { Title } from "components/core/Title/Title"
import { Grid } from "components/layouts/Grid/Grid"
import { FEATURED_WORK } from "content/featured-work"
import { Fade } from "react-awesome-reveal"
import { TeaserItem } from "types"
import { Split } from "../../layouts/Split/Split"

/**
 * Publications page
 */
export const Publications = () => {

  return (
    <div className="p-publications">
      <Split>
        <div className="p-publications__left"></div>
        <Fade duration={1000} direction="right">
          <Content>
            <Title singleChar="P" title="ublications" />
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