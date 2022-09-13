import './styles.scss';
import { Fade } from "react-awesome-reveal"
import { Split } from 'components/layouts';
import { Content, Title } from 'components/core';
import { TEACHING } from 'wording';

/**
 * Teaching page
 */
export const Teaching = () => {

  return (
    <div className="p-teaching">
      <Split>
        <div className="p-teaching__left"></div>
        <Fade duration={1000} direction="right">
          <Content>
            <Title singleChar="T" title="eaching" />
            <div className="p-teaching__inner">
              <h3 className="u-txt-md">{TEACHING.marylandTitle}</h3>
              <ul>
                {TEACHING.maryland.map((course) => (
                  <li>
                    <span className="u-txt-italic">{course.name}: </span>
                    <span className="u-txt-grey ">{course.description}</span>
                  </li>
                ))}
              </ul>
              <h3 className="u-txt-md">{TEACHING.wakeForesTitle}</h3>
              <ul>
                {TEACHING.wakeForest.map((course) => (
                  <li>
                    <span className="u-txt-italic">{course.name}: </span>
                    <span className="u-txt-grey ">{course.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Content>
        </Fade>
      </Split>
    </div>
  )
}