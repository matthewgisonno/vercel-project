/* eslint-disable react/no-unescaped-entities */
import Highlight from "@components/Elements/Highlight";
import P from "@components/Elements/P";
import Title from "@components/Elements/Title";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function QuestionFive(): JSX.Element {
  return (
    <main>
      <Title>
        Imagine a customer writes in, requesting help with the following
        question. Write a first response for triaging this case and helping them
        solve the issue.
      </Title>

      <div className="flex mt-10 bg-gray-200 p-5 rounded-lg">
        <ChatBubbleBottomCenterTextIcon className="w-4 h-4 lg:w-8 lg:h-8 mr-3 lg:mr-5 shrink-0" />
        <figure>
          <blockquote className="italic">
            Hi there, <br />I keep getting a build error from Vercel saying that
            "/vercel/path0/dist/routes-manifest.json" couldn't be found. Can you
            help me debug this?? I'm so frustrated. I've been trying to make
            this work for hours and I just can't figure it out. Your docs aren't
            helpful.
          </blockquote>
        </figure>
      </div>

      <div className="flex mt-10 bg-gray-200 p-5 rounded-lg">
        <ChatBubbleBottomCenterTextIcon className="w-4 h-4 lg:w-8 lg:h-8 mr-3 lg:mr-5 shrink-0" />
        <figure>
          <blockquote className="italic">
            <P>Hello,</P>

            <P>
              I'm sorry to hear you're experiencing issues with your Vercel
              build and that our documentation hasn't been helpful for your
              specific issue. I'm a Senior Customer Success Engineer here at
              Vercel, and I'll do my best to help you resolve the problem.
            </P>

            <P>
              The error message you're encountering suggests that the{" "}
              <Highlight>/vercel/path0/dist/routes-manifest.json</Highlight>{" "}
              file is missing. This file is essential for Next.js to function
              properly as it contains information about your application's
              routes. Let's go through a few steps to identify and resolve the
              issue:
            </P>

            <ol className="list-decimal ml-5 lg:ml-10 mb-5">
              <li className="mb-3">
                <strong>Check your next.config.js file:</strong> Ensure that you
                have a <Highlight>next.config.js</Highlight> file in the root of
                your project and that it's correctly configured. If you're using
                a custom build output directory, make sure it's specified in the{" "}
                <Highlight>distDir</Highlight> option. <br />
                You can find more information about this in the{" "}
                <Link
                  className="text-cyan-600 hover:underline"
                  href="https://nextjs.org/docs/api-reference/next.config.js/setting-a-custom-build-directory"
                >
                  Setting a custom build directory
                </Link>{" "}
                section of the Next.js documentation.
              </li>
              <li className="mb-3">
                <strong>Review your build output:</strong> When you run{" "}
                <Highlight>next build</Highlight>, pay close attention to the
                build output. If there are any errors or warnings, they may be
                related to the missing{" "}
                <Highlight>routes-manifest.json</Highlight> file.
              </li>
              <li>
                <strong>Inspect your Vercel deployment settings:</strong> Log in
                to your Vercel account, navigate to the project settings, and
                verify that the build command and output directory are correctly
                configured. The build command should be set to next build, and
                the output directory should match the one specified in your
                next.config.js file (or the default dist directory).
                <br />
                You can find more information about this in the{" "}
                <Link
                  className="text-cyan-600 hover:underline"
                  href="https://vercel.com/docs/concepts/deployments/configure-a-build#build-and-development-settings"
                >
                  Build and Development Settings
                </Link>{" "}
                section of the Vercel documentation.
              </li>
            </ol>

            <P>
              If you're still experiencing issues after trying these steps,
              please provide more information about your project setup, such as
              a copy of your next.config.js file, the complete build log, and
              any other relevant configuration files. This will help me better
              understand your issue and offer more targeted assistance.
            </P>

            <P>
              Thank you for your patience, and don't hesitate to reach out with
              any further questions or concerns.
            </P>

            <P>
              Best regards,
              <br />
              Matthew Gisonno
              <br />
              Senior Customer Success Engineer, Vercel
            </P>
          </blockquote>
        </figure>
      </div>
    </main>
  );
}
