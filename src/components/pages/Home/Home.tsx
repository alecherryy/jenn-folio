import "./styles.scss";
import { Fade } from "react-awesome-reveal";
import {
  Committee,
  Content,
  DownloadCV,
  Headshot,
  PapersGrid,
  Title,
} from "components/core";
import { Split } from "components/layouts";
import { HOME } from "wording/";

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
            <div className="p-home__inner u-mb-9">
              <Title singleChar="J" title="é St Sume">
                <p>
                  {HOME.role},{" "}
                  <span className="u-txt-italic">{HOME.college}</span>
                </p>
                <p className="u-txt-black">{HOME.intro}</p>
                <Committee />
                <DownloadCV modifierClasses="u-mt-3" />
              </Title>
            </div>
            <PapersGrid
              decorated
              cols={3}
              title={HOME.publications}
              content={HOME.publicationsList}
            />
          </Content>
        </Fade>
      </Split>
    </div>
  );
};
