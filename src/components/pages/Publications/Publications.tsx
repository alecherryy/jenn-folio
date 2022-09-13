import './styles.scss';
import { Fade } from "react-awesome-reveal"
import { Split } from "../../layouts/Split/Split"
import { PUBLICATIONS } from 'wording';
import { Content, PapersGrid, Title } from 'components/core';

/**
 * Publications page
 */
export const Publications = () => {

  return (
    <div className="p-publications">
      <Split>
        <div className="p-publications__left"></div>
        <Fade duration={1000} direction="right">
          <Content>
            <Title singleChar="P" title="ublications" />
            <PapersGrid title={PUBLICATIONS.journals} cols={3} content={PUBLICATIONS.publicationsList} />
            <PapersGrid title={PUBLICATIONS.chapters} cols={3} content={PUBLICATIONS.chaptersList} />
          </Content>
        </Fade>
      </Split>
    </div>
  )
}