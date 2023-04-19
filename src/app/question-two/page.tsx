/* eslint-disable react/no-unescaped-entities */
import P from "@components/Elements/P";
import Title from "@components/Elements/Title";

export default function QuestionTwo(): JSX.Element {
  return (
    <main>
      <Title>
        Describe how you solved a challenge that one of your previous support
        teams faced. How did you determine your solution was successful?
      </Title>

      <P>
        Although my professional experience doesn't include a traditional
        "customer support" role, my daily interactions with clients and
        addressing their needs are central to my current position. To
        illustrate, I'll share a work-related example.
      </P>

      <P>
        The situation entailed collaborating with a particular client who
        possessed a well-defined concept for their project, yet faced
        difficulties in articulating it proficiently to the engineering team.
        This lack of transparency led to friction within the group, as the
        client's feedback often came across as harsh.
      </P>

      <P>
        Upon closer examination, I identified two key issues. First, the client
        would disengage from the project for extended periods, leading to
        significant changes upon their return. Secondly, they failed to clearly
        convey their expectations to the engineering team, causing confusion and
        misalignment. The way I approached the two issues was both internally
        with my team and externally with the client.{" "}
      </P>

      <P>
        In line with our internal strategy, it was crucial to align our approach
        when engaging with the client. Recognizing that extended periods without
        client interaction were counterproductive, we decided to modify our
        approach. Consequently, I encouraged my team to request and facilitate
        more frequent reviews with the client to avoid any surprises.
      </P>

      <P>
        To address the situation externally, I arranged a meeting with the
        client. I began by soliciting his thoughts on the project's progress.
        When he shared his concerns, I empathized with his perspective and
        outlined our internal plan to rectify the issues. Additionally, I
        provided constructive feedback regarding his lack of communication with
        the engineering team and his level of engagement. The client
        acknowledged these points and expressed a willingness to improve his
        communication and involvement moving forward.
      </P>
    </main>
  );
}
