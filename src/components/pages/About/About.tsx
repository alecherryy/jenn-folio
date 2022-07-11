import './styles.scss';
import { Content } from "components/core/Content/Content"
import { Title } from "components/core/Title/Title"
import { Split } from "components/layouts/Split/Split"
import { Fade } from "react-awesome-reveal"

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
                <a className="u-mt-6 c-button c-button--text p-about__btn u-hidden-mobile" href="../../../../../assets/files/St-Sume-CV.docx" download>Download CV</a>
              </Title>
              <p className="p-about__text">Specifically, their work examines the role of grievances in Black American political behavior. Their other work includes research on the political attitudes of non-religious people of color in a "secularizing" world. Their received her B.A.
                in Communication from Florida Atlantic University in Boca Raton, FL where they graduated a Presidential Scholar. They also received an M.A. in Communication from Wake Forest University where they specialized in race and political communication. Their work can be found at Advances in Political Psychology. A child of Haitian immigrants and south Florida native, she enjoys karaoke by the beach, Publix chicken tender subs, and cool craft beers.<br /><br />
                <a className="u-mt-6 c-button c-button--text p-about__btn u-hidden-desktop" href="../../../../../assets/files/St-Sume-CV.docx" download>Download CV</a>
              </p>
            </div>
          </Content>
        </Fade>
      </Split>
    </div>
  )
}