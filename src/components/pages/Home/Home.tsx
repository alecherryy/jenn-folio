import './styles.scss';
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
        <Fade duration={1000} direction="left" className="p-home__headshot">
          <Headshot />
        </Fade>
        <Fade duration={1000} direction="right">
          <Content>
            {/* <h6>Recent Publications</h6> */}
            {/* <Grid numOfCols={3}>
              {FEATURED_WORK.map((item: TeaserItem, index: number) => (
                <Teaser key={index} {...item} />
              ))}
            </Grid> */}
            <div className="p-home__inner">
              <Title singleChar="J" title="é St Sume">
                <p>PhD Student<br />
                  <span className="u-txt-italic">
                    University of Maryland, College Park, MD
                  </span><br />
                  <a className="u-mt-6 u-button u-button--text p-home__btn u-hidden-desktop-down" href="./files/St-Sume-CV.docx" download>Download CV</a>
                </p>
              </Title>
              <p className="p-home__text">
                Jé St Sume is a PhD student in <a href="https://gvpt.umd.edu/landing/Graduate" target="_blank" rel="noreferrer">Government and Politics</a> at
                the University of Maryland, College Park focusing on race and American politics.<br /> <br />
                Specifically, their work examines the role of grievances in Black American political behavior. Their other work includes research on the political attitudes of non-religious people of color in a "secularizing" world. Their received her B.A. in Communication from Florida Atlantic University in Boca Raton, FL where they graduated a Presidential Scholar. They also received an M.A. in Communication from Wake Forest University where they specialized in race and political communication. Their work can be found at Advances in Political Psychology. A child of Haitian immigrants and south Florida native, she enjoys karaoke by the beach, Publix chicken tender subs, and cool craft beers.<br /><br />
                Contact me via email at stsumej [at] umd dot edu.
                <a className="u-button u-button--text p-home__btn u-hidden-desktop-up" href="./files/St-Sume-CV.docx" download>Download CV</a>
              </p>
            </div>
          </Content>
        </Fade>
      </Split>
    </div>
  )
}