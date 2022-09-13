import './styles.scss';
import { Content } from "components/core/Content/Content"
import { Title } from "components/core/Title/Title"
import { Fade } from "react-awesome-reveal"
import { Headshot } from "../../core/Headshot/Headshot"
import { Split } from "../../layouts/Split/Split"
import { Grid } from 'components/layouts/Grid/Grid';
import { TeaserItem } from 'types';
import { Teaser } from 'components/core/Teaser/Teaser';
import { Advisors } from 'components/core/Advisors/Advisors';
import { RECENT_PUBLICATIONS } from 'content/recent-publications';

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
            <div className="p-home__inner">
              <Title singleChar="J" title="é St Sume">
                <p className="u-txt-sm">PhD Student, <span className="u-txt-italic">
                  University of Maryland, College Park, MD
                </span>
                </p>
                <p className="u-txt-black">
                  Jé St Sume is a PhD student in <a href="https://gvpt.umd.edu/landing/Graduate" target="_blank" rel="noreferrer">Government and Politics</a> focusing on race and American politics. Specifically,
                  their work examines the role of grievances in Black American political behavior. Their other work includes research on the political attitudes of non-religious people of color in a "secularizing" world.
                </p>
                <Advisors />
              </Title>
              {/* <div>
                <DownloadCV modifierClasses="u-mt-3 u-mb-6" isMobile />
              </div> */}
            </div>
            <h6 className="u-mt-3">Recent Publications</h6>
            <Grid numOfCols={3}>
              {RECENT_PUBLICATIONS.map((item: TeaserItem, index: number) => (
                <Teaser align="left" key={index} {...item} />
              ))}
            </Grid>
          </Content>
        </Fade>
      </Split>
    </div >
  )
}