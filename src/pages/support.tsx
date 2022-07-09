import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import Button from 'ui/Button';

const SupportPage: React.FC = () => {
  return (
    <div className="
      block p-6 rounded-lg shadow-lg bg-bg-light dark:bg-bg-dark max-w-md
      text-text-light dark:text-text-dark"
    >
      <form>
        <div className="form-group mb-6">
          <input
            type="text"
            className={classNames(
              `form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              
              bg-white/50 dark:bg-white/20 bg-clip-padding
              border border-solid border-black/25 dark:border-white/25
              rounded
              transition
              ease-in-out
              m-0
              focus:dark:bg-white/20 focus:border-primary-500 dark:focus:border-primary-500
              focus:bg-white/50 focus:outline-none`,
            )}
            placeholder="Name"
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal

        bg-white/50 dark:bg-white/20 bg-clip-padding
        border border-solid border-black/25 dark:border-white/25
        rounded
        transition
        ease-in-out
        m-0
        focus:dark:bg-white/20 focus:border-primary-500 dark:focus:border-primary-500
        focus:bg-white/50 focus:outline-none"
            id="exampleInput8"
            placeholder="Email address"
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal

        bg-white/50 dark:bg-white/20 bg-clip-padding
        border border-solid border-black/25 dark:border-white/25
        rounded
        transition
        ease-in-out
        m-0
        focus:dark:bg-white/20 focus:border-primary-500 dark:focus:border-primary-500
        focus:bg-white/50 focus:outline-none
      "
            id="exampleFormControlTextarea13"
            rows={3}
            placeholder="Message"
          />
        </div>
        <div className="form-group form-check text-center mb-6">
          <input
            type="checkbox"
            className={classNames(
              'form-check-input appearance-none h-4 w-4 border border-black/25 dark:border-white/25 rounded-sm',
              'bg-white/50 dark:bg-white/20',
              'focus:outline-none transition duration-200',
              'mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer',
            )}
            id="exampleCheck87"
            checked
          />
          <label
            className="form-check-label inline-block"
            htmlFor="exampleCheck87"
          >
            Send me a copy of this message
          </label>
        </div>

        <Button type="submit" className="w-full">
          <FormattedMessage
            id="support.submit"
            defaultMessage="Submit"
          />
        </Button>
      </form>
    </div>
  );
};

export default SupportPage;
