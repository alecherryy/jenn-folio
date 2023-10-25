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
        <div className="p-about__left" />
        <div className="p-about__right">
          <Fade duration={1000} direction="right">
            <Content>
              <div className="p-about__inner">
                <div className="p-about__text">
                  <Title singleChar="A" title="bout" />
                  <Advisors />
                  <Committee />
                  <DownloadCV modifierClasses="u-mt-3" />
                </div>
                <div className="p-about__text">
                  <p className="u-txt-black">{ABOUT.intro}</p>
                  <p className="u-txt-black">{ABOUT.text}</p>
                  <p className="u-txt-black">{ABOUT.text_2}</p>
                  <p className="u-txt-black">{ABOUT.text_3}</p>
                  <p className="u-txt-black">{ABOUT.contact}</p>
                </div>
              </div>
            </Content>
          </Fade>
        </div>
      </Split>
    </div >
  )
}