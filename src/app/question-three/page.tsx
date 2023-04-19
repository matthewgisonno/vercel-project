/* eslint-disable react/no-unescaped-entities */
import P from "@components/Elements/P";
import Title from "@components/Elements/Title";

export default function QuestionThree(): JSX.Element {
  return (
    <main>
      <Title>
        How would you compare Next.js with another framework? Feel free to
        compare with a framework of your choice.
      </Title>

      <P>
        For this comparison, I will examine Next.js and Gatsby, both popular
        React frameworks. Gatsby is primarily focused on Static Site Generation,
        whereas Next.js offers Static Site Generation, Server-Side Generation,
        and Client-Side Rendering. Gatsby employs GraphQL for data querying,
        while Next.js allows developers to choose their preferred data-fetching
        approach.
      </P>

      <P>
        Both frameworks support TypeScript; however, Next.js offers native
        support, whereas Gatsby necessitates additional configuration. They also
        both support Progressive Web Apps, optimization for performance, and
        performance enhancements for images, CSS, and resource prefetching.
      </P>

      <P>
        Gatsby depends on a plugin ecosystem for extended feature support, while
        Next.js includes some opinionated out-of-the-box features that can be
        customized through NPM packages or tailored functionality. Next.js
        promotes a more comprehensive development approach, eschewing reliance
        on plugins but potentially requiring more initial work for integrations.
      </P>

      <P>
        Given its beta support for React Server Components, ongoing updates,
        thriving ecosystem, and status as the most downloaded framework, Next.js
        emerges as the top choice for many developers.
      </P>

      <P>
        Finally, let's consider the pricing for deploying web applications.
        Although not directly tied to Next.js or Gatsby, both can be deployed
        elsewhere. However, both frameworks also allow app deployment within
        their respective ecosystems. While both offer a "free" tier, the
        similarities end there. In terms of monthly fees and add-ons, Vercel,
        associated with Next.js, has a noticeably lower price and should be the
        primary consideration.
      </P>
    </main>
  );
}
