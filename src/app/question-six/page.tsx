/* eslint-disable react/no-unescaped-entities */
import P from "@components/Elements/P";
import Title from "@components/Elements/Title";

export default function QuestionSix(): JSX.Element {
  return (
    <main>
      <Title>
        What do you think is one of the most common problems which customers ask
        Vercel for help with? How would you help customers to overcome common
        problems, short-term and long-term?
      </Title>

      <P>
        I believe the most common problems that customers ask Vercel for help
        with are related to build and deployment-related issues. The issues most
        likely stem from a lack of understanding or familiarity with the Vercel
        platform, Next.js framework, or specific project configurations.
      </P>

      <P>
        To help customers overcome these problems, I would recommend the
        following short-term and long-term responses:
      </P>

      <P>
        <strong>Short-term:</strong>
      </P>

      <ol className="list-decimal ml-5 lg:ml-10 mb-5">
        <li className="mb-3">
          <strong>Provide excellent customer-centric support:</strong>{" "}
          Responding to customers quickly while providing clear and concise
          instructions on how they can resolve the issue is key. I believe
          Vercel has provided ample documentation related to their problem.
          Either the customer can't find it or has misinterpreted the
          information.
        </li>
        <li className="mb-3">
          <strong>Tailor the guidance:</strong> I will take the time to
          understand each customer's specific use case and provide personalized
          assistance to help them overcome their issue. In some cases, this
          could involve an in-depth investigation of their project, offering
          best practices, or suggesting alternative solutions to meet their
          requirements.
        </li>
      </ol>

      <P>
        <strong>Long-term:</strong>
      </P>

      <ol className="list-decimal ml-5 lg:ml-10 mb-5">
        <li className="mb-3">
          <strong>Improve documentation:</strong> Continuously monitor customer
          issues and needs compared to our provided documentation. Identify any
          gaps in documentation and work with the appropriate teams to get it
          updated or update it myself. These updates could include missing
          sections, adding a missing example, fixing an error, or even
          tutorials.
        </li>
        <li className="mb-3">
          <strong>Educate customers:</strong> I believe Vercel is working on
          this. I took part in a beta training session and test with Sebastion
          and the team from Vercel related to Next.js. We can keep fostering
          this by offering webinars, workshops, and training sessions to help
          customers become more familiar with the inner workings of the Vercel
          platform and Next.js framework.
        </li>
        <li className="mb-3">
          <strong>Enhance the platform:</strong> By engaging directly with
          customers facing issues, I'm in a unique situation to identify gaps in
          the current platform experience. It should be a top priority for all
          Customer Success Engineers to identify gaps in the experience or
          platform and properly log/communicate those with the appropriate
          teams.
        </li>
      </ol>
    </main>
  );
}
