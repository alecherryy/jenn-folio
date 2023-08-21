import './styles.scss';
import { Fade } from "react-awesome-reveal"
import { ABOUT } from 'wording';
import { Split } from 'components/layouts';
import { Advisors, Committee, Content, DownloadCV, Title } from 'components/core';
import parse from 'html-react-parser';

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
                <p>{parse(ABOUT.intro)}</p>
              </Title>
            </div>
            <div className="p-about__inner">
              <div className="p-about__text">
                <p className="u-txt-black">{ABOUT.education}</p>
              </div>
              <div className="p-about__text">
                <p className="u-txt-black">{ABOUT.education_2}</p>
                <p className="u-txt-black">{ABOUT.contact}</p>
                <Advisors />
                <Committee />
                <DownloadCV modifierClasses="u-mt-3" />
              </div>
            </div>
          </Content>
        </Fade>
      </Split>
    </div>
  )
}