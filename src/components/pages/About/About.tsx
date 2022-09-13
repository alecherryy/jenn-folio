import './styles.scss';
import { Content } from "components/core/Content/Content"
import { Title } from "components/core/Title/Title"
import { Split } from "components/layouts/Split/Split"
import { Fade } from "react-awesome-reveal"
import { DownloadCV } from 'components/core/DownloadCV/DownloadCV';
import { Committee } from 'components/core/Committee/Committee';
import { Advisors } from 'components/core/Advisors/Advisors';

/**
 * About page
 */
export const About = () => {

  return (
    <div className="p-about">
      <Split>
        <div className="p-about__left"></div>
        <Fade duration={1000} direction="right">
          <Content>
            <div className="p-about__inner">
              <Title singleChar="A" title="bout">
                <p>Jé St Sume is a PhD student in <a href="https://gvpt.umd.edu/landing/Graduate" target="_blank" rel="noreferrer">Government and Politics</a> at
                  the University of Maryland, College Park focusing on race and American politics.</p>
                <Advisors />
                <Committee />
              </Title>
              <div className="p-about__text">
                <p>Jé St Sume's work examines the role of grievances in Black American political behavior. Their other work includes research on the political attitudes of non-religious people of color in a "secularizing" world.</p>
                <h3 className="u-txt-md">Education</h3>
                <p>They received their B.A. in Communication from Florida Atlantic University in Boca Raton, FL where they graduated a Presidential Scholar. They also received an M.A. in Communication from Wake Forest University where they specialized in race and political communication. Their work can be found at Advances in Political Psychology. A child of Haitian immigrants and south Florida native, she enjoys karaoke by the beach, Publix chicken tender subs, and cool craft beers.<br /><br />
                  Contact them via email at stsumej [at] umd dot edu.</p>
                <DownloadCV modifierClasses="u-mt-3" />
              </div>
            </div>
          </Content>
        </Fade>
      </Split>
    </div>
  )
}