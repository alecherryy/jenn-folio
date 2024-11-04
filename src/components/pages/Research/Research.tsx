import './styles.scss';
import { Fade } from "react-awesome-reveal"
import { Split } from "../../layouts/Split/Split"
import { Content, PapersGrid, Title } from 'components/core';
import { RESEARCH } from 'wording';

/**
 * Research page
 */
export const Research = () => {

  return (
    <div className="p-publications">
      <Split>
        <div className="p-publications__left"></div>
        <Fade duration={1000} direction="right">
          <Content>
            <Title singleChar="P" title="ublications" />
            <PapersGrid decorated title={RESEARCH.journals} cols={3} content={RESEARCH.publicationsList} />
            {/* <PapersGrid title={PUBLICATIONS.chapters} cols={3} content={PUBLICATIONS.chaptersList} /> */}
          </Content>
        </Fade>
      </Split>
    </div>
  )
}