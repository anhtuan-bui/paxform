import React, { Fragment } from "react";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";
import "./FrequentlyAsked.scss";
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
const faqs = [
  {
    title: "what are data credits?",
    content: " Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
  },
  {
    title: "Can I cancel my plan any time?",
    content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
  },
  {
    title: "Is there a free trial for the paid plans?",
    content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
  },

  {
    title: "We are a medium-sized company. Which plan is right for us?",
    content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
  },
]
const faqs2 = [
  {
    title: "I want to store my information and share it with others. Which plan is right for me?",
    content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
  },
  {
    title: "Is there a free trial for the paid plans?",
    content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
  },
  {
    title: "I want to store my information and share it with others. Which plan is right for me?",
    content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
  },
  {
    title: "I want to store my information and share it with others. Which plan is right for me?",
    content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
  },
];

export default function FrequentlyAsk() {
  const { loading, data } = useQuery(GET_FAQS)
  if (loading) return 'loading';
  const faqCategories = data.faqCategories.nodes;
  console.log(faqCategories)
  const handleAccordionItemClick = (e) => {
    const accordionItems = document.querySelectorAll(
      ".frequently_ask__accordion-item"
    );

    const closeAccordionItem = (item) => {
      item.lastElementChild.style.maxHeight = null;
      item.querySelector("svg").style.transform = "rotate(360deg)";
      item.lastElementChild.style.marginTop = 0;
    };

    const openAccordionItem = (item) => {
      item.lastElementChild.style.maxHeight =
        item.lastElementChild.scrollHeight + "px";
      item.lastElementChild.style.marginTop = "0.825rem";
      item.querySelector("svg").style.transform = "rotate(180deg)";
    };

    accordionItems.forEach((item) => {
      if (item.contains(e.target)) {
        if (item.lastElementChild.style.maxHeight) {
          closeAccordionItem(item);
        } else {
          openAccordionItem(item);
        }
      } else {
        closeAccordionItem(item);
      }
    });
  };

  return (
    <div className="frequently_ask__wrapper">
      <h1 className="frequently_ask__title section_title" id="section0">
        Section One
      </h1>
      <div className="frequently_ask__accordion">
        {faqs.map((faq, index) => (
          <div
            //className="frequently_ask__accordion-item"
            //key={`frequently_ask__accordion-item-${index}`}
          >
            {/* following div needs to be deleted in order to get rid of the box at the beginnig */}
            <div
              //className="frequently_ask__accordion-box"
              //onClick={(e) => handleAccordionItemClick(e)}
            >
              <h2 className="frequently_ask__accordion-title">
                {/* {faq.title} */}
                {/* <ExampleTitle /> */}
              </h2>
              {/* <ArrowDown className="frequently_ask__accordion-arrow" /> */}
            </div>
            <p className="frequently_ask__accordion-content">
              {/* {faq.content} */}
              <ExampleContent />
            </p>
          </div>
        ))}
      </div>
      {faqCategories.map((category, index) => (
        <Fragment>
          <h1 className="frequently_ask__title section_title" id="section1">
            {category.name}
          </h1>
          <div className="frequently_ask__accordion">
            {category.faqs.nodes.map((faq, index) => (
              <div
                className="frequently_ask__accordion-item"
                key={`frequently_ask__accordion-item-${index}`}
              >

                <div
                  className="frequently_ask__accordion-box"
                  onClick={(e) => handleAccordionItemClick(e)}
                >
                  <h2 className="frequently_ask__accordion-title">
                    {faq.title}
                    {/* <ExampleContent/> */}
                    {/* <ExampleTitle /> */}
                  </h2>
                  <ArrowDown className="frequently_ask__accordion-arrow" />
                </div>
                <p className="frequently_ask__accordion-content" dangerouslySetInnerHTML={{__html: faq.content}}>
                  {/* {faq.content} */}
                  {/* <ExampleContent /> */}
                </p>
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

//need to migrate the code for getting gql data in this component. 

const GET_FAQS = gql`
query NewQuery {
    faqCategories {
      nodes {
        faqs {
          nodes {
            content
            title
          }
        }
        name
      }
    }
  }
`

const ExampleTitle = () => {
  const { loading, data } = useQuery(GET_FAQS)
  if (loading) return 'loading';
  const faqCategories = data.faqCategories.nodes;
  // if (loading) return 'loading';
  //const faqs = data.faqCategories.nodes[1].faqs.nodes;
  return (
    <div>
      {faqCategories.map((category, index) => (
        <div key={index}>
          <h2 style={{ fontFamily: 'Arial', fontSize: '15px', fontWeight: 'bold' }}>{category.name}</h2>
        </div>
      ))}
    </div>
  );

};

const ExampleContent = () => {
  const query = useQuery(GET_FAQS)
  // if (loading) return 'loading';
  console.log(query.data);
  //const faqs = data.faqCategories.nodes[1].faqs.nodes;
  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index}>
          {/* <h2>{faq.content}</h2> */}
          <div dangerouslySetInnerHTML={{ __html: faq.content }}></div>
        </div>
      ))}
    </div>
  )

}