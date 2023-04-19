/* eslint-disable react/no-unescaped-entities */
import P from "@components/Elements/P";
import Title from "@components/Elements/Title";

export default function QuestionOne(): JSX.Element {
  return (
    <main>
      <Title>What do you want to learn or do more of at work?</Title>

      <P>
        Over the years, I've learned that I never want to stop learning new
        things. One thing that has remained constant in life is that learning
        new things brings opportunities. Those opportunities extend beyond my
        life and into the lives of the people I share them with.
      </P>

      <P>
        One recent example of this is TypeScript. I work at Merkle on a large
        project using Sitecore 10.1 Headless CMS and Next.js. Sitecore 10.1 only
        allows for Next.js 10. The original project was built in JavaScript
        using the prop-types package. It has been comfortable because JavaScript
        is what I know. When you're comfortable, you're not growing.
      </P>

      <P>
        I recently started a side-project in TypeScript, which at first felt
        weird. I can tell you, after spending a couple of weeks with it, I love
        it! The prop-types package is cumbersome and a list of types at the
        bottom of the document is not helpful. My plan is to take this learning
        and report it back to my team in our bi-weekly UI Team meeting.
      </P>

      <P>
        So when I think of the question: "What do I want to learn or do more of
        at work" ... My answer will always be to learn and share. If I don't
        know how to do something, I take it upon myself to learn it. The second
        piece of that is sharing it with others.
      </P>
    </main>
  );
}
