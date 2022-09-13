import './styles.scss';
import { Fade } from "react-awesome-reveal"
import { HOME } from 'wording';
import { Advisors, Content, Headshot, PapersGrid, Title } from 'components/core';
import { Split } from 'components/layouts';

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
                <p className="u-txt-sm">{HOME.role}, <span className="u-txt-italic">
                  {HOME.college}
                </span>
                </p>
                <p className="u-txt-black u-mt-6">
                  {HOME.intro}
                </p>
                <Advisors />
              </Title>
            </div>
            <PapersGrid cols={3} title={HOME.publications} content={HOME.publicationsList} />
          </Content>
        </Fade>
      </Split>
    </div >
  )
}