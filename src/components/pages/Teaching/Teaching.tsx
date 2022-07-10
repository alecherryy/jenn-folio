import './styles.scss';
import { Content } from "components/core/Content/Content"
import { Title } from "components/core/Title/Title"
import { Split } from "components/layouts/Split/Split"
import { Fade } from "react-awesome-reveal"

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
              <div className="">
                <h4>Wake Forest University</h4>
                <p><span className="u-txt-italic u-txt-grey">COM 110 Public Speaking</span>: A study of the theory and practice of public address.
                  Students gained experiences in the preparation, delivery, and critique of informative
                  and persuasive speeches.</p>
                <p><span className="u-txt-italic u-txt-grey">COM 113 Relational Communication.</span>: An introduction to interpersonal
                  communication theory, research, and principles. Students gained experiences in
                  conflict resolution, networking, and relationship building.</p>
                <h4>University of Maryland, College Park</h4>
                <p><span className="u-txt-italic u-txt-grey">GVPT 170 Introduction to American Government</span>: An introduction to the
                  fundamentals of American government and politics.</p>
              </div>

              <div>
                <p><span className="u-txt-italic u-txt-grey">GVPT 202 Politics, Constitutional Policy, and the Institution of the U.S. Supreme
                  Court</span>: A thorough examination of the set of norms, rules, and policymaking
                  processes influence and critically inform the Court's interpretation of the U.S.
                  Constitution. Students gained experience in the interpretation, critique, and debate of
                  mock Supreme Court decisions.</p>
                <p><span className="u-txt-italic u-txt-grey">GVPT 201 Scope and Methods for Political Science Research</span>: An introduction to
                  quantitative research in political science. Students gained experiences in the
                  preparation, distribution, analysis, and reporting of quantitative political science
                  research.</p>
                <p><span className="u-txt-italic u-txt-grey">GVPT 289O Racial and Ethnic Politics in the Obama Era</span>: This course examined
                  how Obama became the first African American president, the strategies his campaign
                  used to motivate citizens to the voting booth, the public's reaction to Obama's
                  election, racial group identity during the Obama era, and Trump's victory as a
                  response to Obama. Students gained experience in the interpretation and critique of
                  political science research on the role of race in a post-Obama American society.</p>

              </div>
            </div>
          </Content>
        </Fade>
      </Split>
    </div>
  )
}