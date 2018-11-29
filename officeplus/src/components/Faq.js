import React, { Component } from "react";

import { Accordion, Icon } from "semantic-ui-react";

//import { faqData } from "./alldata/AllData";
import faqData from "./alldata/faq.json";

class Faq extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <h3 className="ui header" align="left">
          <span style={{ fontSize: "1.5em" }}>Frequently Asked Questions</span>
          <div className="sub header">
            Our team's always here to talk it out, just reach out by phone or
            email.
          </div>
        </h3>

        <Accordion fluid styled>
          {faqData.length > 0
            ? faqData.map((faq, i) =>
                faq.active ? (
                  <div align="left">
                    <Accordion.Title
                      active={activeIndex === i}
                      index={i}
                      onClick={this.handleClick}
                      style={{ fontSize: "1.3em" }}
                    >
                      <Icon name="dropdown" />
                      {faq.question}
                    </Accordion.Title>

                    <Accordion.Content active={activeIndex === i}>
                      <div
                        style={{ fontSize: "1.3em" }}
                        dangerouslySetInnerHTML={{
                          __html: faq.answer
                        }}
                      />
                    </Accordion.Content>
                  </div>
                ) : (
                  ""
                )
              )
            : ""}
        </Accordion>
      </div>
    );
  }
}

export default Faq;
