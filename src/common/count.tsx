import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

type CountProps = {
  number: number;
  text: string;
  add_style: boolean;
  style_3?: boolean;
};

const Count: React.FC<CountProps> = ({ number, text, add_style, style_3 }) => {
  const [focus, setFocus] = useState<boolean>(false);
  const visibleChangeHandler = (isVisible: boolean) => {
    if (isVisible) {
      if (!focus) {
        setFocus(true);
      }
    }
  };
  return (
    <>
      <CountUp start={focus ? 0 : null} end={number} duration={1}>
        {({ countUpRef }) => (
          <div
            className={`d-flex ${add_style ? "align-items-center" : ""} ${
              style_3 ? "" : "justify-content-center"
            }`}
          >
            <span ref={countUpRef} />
            <InView
              as="span"
              onChange={(inView) => visibleChangeHandler(inView)}
            >
              {text}
            </InView>
          </div>
        )}
      </CountUp>
    </>
  );
};

export default Count;
