import { useIntl } from 'react-intl';
import Accordion from 'ui/Accordion';

const FaqPage: React.FC = () => {
  const intl = useIntl();

  return (
    <div className="space-y-2">
      <Accordion
        label={intl.formatMessage({ id: 'faq.question.what_is_for', defaultMessage: 'What is for?' })}
        className="text-xl mb-4"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Iure, quia sit. Reprehenderit dignissimos nam laborum reiciendis, illo similique impedit.
        Minima?
      </Accordion>

      <Accordion
        label={intl.formatMessage({ id: 'faq.question.yeah_but_why', defaultMessage: 'Yeah, but why?' })}
        className="text-xl mb-4"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Accordion>

      <Accordion
        label={intl.formatMessage({ id: 'faq.question.how_to', defaultMessage: 'How to collect prizes?' })}
        className="text-xl mb-4"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cum tenetur sint perferendis aut sapiente, cumque vitae molestias!
        Sequi esse iusto laboriosam temporibus ipsam a alias asperiores dolorem iure mollitia
        excepturi cum ullam, vel, obcaecati eius accusantium optio
        praesentium soluta, voluptatibus ipsa sit. Rerum magnam ipsa dolore nisi similique eos voluptatem.
      </Accordion>
    </div>
  );
};

export default FaqPage;
