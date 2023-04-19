import P from "@components/Elements/P";
import Title from "@components/Elements/Title";

export default function QuestionFour(): JSX.Element {
  return (
    <main>
      <Title>
        When would you choose to use Edge Functions, Serverless Functions, or
        Edge Middleware with Vercel?
      </Title>

      <P>
        Choosing Edge Functions, Serverless Functions, or Edge Middleware would
        be dictated by the actual requirements of the functionality. The
        following criteria are something that I would use to make those
        decisions.
      </P>

      <P>
        If the requirement is real-time modifications or enrichments to
        responses, like A/B testing, content personalization, and dynamic
        routing, I would choose Edge Functions.
      </P>

      <P>
        If the requirement is on-demand, scalable backend operations, like API
        endpoints, securely accessing a third-party API or service, or
        longer-running tasks, I would choose Serverless Functions.
      </P>

      <P>
        If the requirement is to modify the request before it gets to Next.js or
        modify the response before being sent back to the client, I would choose
        Edge Middleware.
      </P>
    </main>
  );
}
