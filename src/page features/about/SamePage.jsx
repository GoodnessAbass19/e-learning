import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const animationOrder = {
  initial: 0,
  textEnd: 0.1,
  textOpacity: 0.12,
  fadeInEnd: 0.15,
  showParagraphOne: 0.25,
  hideParagraphOne: 0.3,
  showParagraphTwoStart: 0.35,
  showParagraphTwoEnd: 0.4,
  hideParagraphTwo: 0.5,
  showLoadingScreenStart: 0.53,
  showLoadingScreenEnd: 0.58,
  createBranchStart: 0.65,
  createBranchEnd: 0.7,
  createBranchFadeInStart: 0.78,
  createBranchFadeInEnd: 0.85,
  endTextFadeInStart: 0.95,
  endTextFadeInEnd: 1,
};

export const SamePage = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.createBranchEnd,
      animationOrder.endTextFadeInStart,
    ],
    [0, 0.8, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchStart,
    ],
    [3, 1, 1, 0.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchStart,
    ],
    [1, 1.5, 2, 3]
  );
  const x = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
      animationOrder.showLoadingScreenStart,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchEnd,
    ],
    ["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"]
  );

  const loadingScreenOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showLoadingScreenStart,
      animationOrder.showLoadingScreenEnd,
    ],
    [0, 1]
  );
  const loadingScreenX = useTransform(
    scrollYProgress,
    [animationOrder.createBranchStart, animationOrder.createBranchEnd],
    ["0%", "40%"]
  );
  const loadingScreenscale = useTransform(
    scrollYProgress,
    [animationOrder.createBranchStart, animationOrder.createBranchEnd],
    [1, 0.5]
  );

  const paragraph1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeInEnd + 0.02,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
    ],
    [0, 1, 0]
  );
  const paragraph1TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeInEnd + 0.02,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
    ],
    ["4rem", "0rem", "-4rem"]
  );

  const paragraph2Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
    ],
    [0, 1, 0]
  );
  const paragraph2TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
    ],
    ["4rem", "0rem", "-4rem"]
  );

  const newBranchOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.createBranchFadeInStart,
      animationOrder.createBranchFadeInEnd,
    ],
    [0, 1]
  );

  const endTextOpacity = useTransform(
    scrollYProgress,
    [animationOrder.textEnd, animationOrder.textOpacity],
    [0, 1]
  );

  const endTexty = useTransform(
    scrollYProgress,
    [animationOrder.textEnd, animationOrder.textOpacity],
    ["4rem", "0rem"]
  );

  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  return (
    <section ref={targetRef}>
      <div className="relative h-[800vh] mt-20 text-xl font-['Orbitron'] font-semibold capitalize">
        <div className="sticky top-1/2 flex origin-center -translate-y-1/2 justify-center">
          <motion.div
            className="translate-x-centered-offset absolute left-1/2 top-1/2 h-[75vh] max-h-[48vw] -translate-y-1/2 scale-[var(--scale)] "
            style={{
              opacity,
              "--x": x,
              "--scale": scaleY,
            }}
          >
            <img src="/cyber.jpg" className="h-[75vh] max-h-[48vw] w-auto" />
          </motion.div>
         

          <motion.p
            className="translate-y-centered-offset absolute top-1/2 text-white left-[calc(50%-25rem)] w-[50rem] pl-16 pr-5 text-xl leading-tight"
            style={{
              opacity: endTextOpacity,
              "--y": endTexty,
            }}
          >
            <span>
              Our mission is to empower individuals and organizations with the
              skills and knowledge <br />
            </span>
            <span className="text-orange-500">
              required to safeguard their digital assets in an increasingly
              connected world .
            </span>
            <span>
              That's why we've developed a comprehensive training program
              designed to equip you with the latest tools,
            </span>
            <span className="text-orange-500">
              techniques, and best practices in the field of cybersecurity.
            </span>
            <span className="text-orange-500">
              Our team of experienced trainers boasts a diverse range of
              expertise in various aspects of cybersecurity,
            </span>
            <br />
            including Cybersecurity engineering, data privacy, risk management,
            and incident response. Our mission is to empower individuals and
            organizations with the skills and knowledge
            <br />
            <span className="text-orange-500">
              required to safeguard their digital assets in an increasingly
              connected world.
            </span>
          </motion.p>
        </div>
        {/* <motion.p
          style={{
            opacity: paragraph1Opacity,
            "--y": paragraph1TranslateY,
            position,
          }}
          className="translate-x-centered-offset text-center top-1/2 left-1/4 text-white w-[500px] pl-16 text-3xl leading-tight"
        >
          Our mission is to empower individuals and organizations with the
          skills and knowledge
          <br />
          <span className="text-orange-500">
            required to safeguard their digital assets in an increasingly
            connected world .
          </span>
        </motion.p>
        <motion.p
          style={{
            opacity: paragraph2Opacity,
            "--y": paragraph2TranslateY,
            position,
          }}
          className="translate-x-centered-offset top-1/2 left-1/4 text-white w-[500px] pr-16 text-3xl leading-tight"
        >
          That's why we've developed a comprehensive training program designed
          to equip you with the latest tools,
          <br />
          <span className="text-orange-500">
            techniques, and best practices in the field of cybersecurity.
          </span>
        </motion.p> */}
      </div>
    </section>
  );
};

export default SamePage;
