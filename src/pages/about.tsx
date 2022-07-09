/* eslint-disable max-len */
const AboutPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-5xl mb-4">Twitch Security</h1>

      <p className="mb-4">
        Twitch Security is responsible for creating the systems that protect the millions of streamers and stream viewers that use our platform. If that sounds interesting to you, consider checking out our
        {' '}
        <a href="https://twitch.tv/jobs">jobs page</a>
        {' '}
        for open positions.
      </p>

      <p className="mb-4">
        While Twitch Security’s main goal is protecting those on our platform, we primarily act in a technical capacity, designing and securing Twitch’s systems. If someone else has logged into your account without your permission or someone is breaking our rules,
        {' '}
        <a href="https://help.twitch.tv/">Twitch Support</a>
        {' '}
        will be able to help.
      </p>

      <p className="mb-4">
        If you think you have technical details of a security flaw in Twitch, you can notify us with the
        {' '}
        <a href="#rdform">Responsible Disclosure</a>
        {' '}
        form toward the bottom of this page.
      </p>

      <h2 className="text-3xl mb-4">Protecting Your Account</h2>

      <h3 className="text-2xl mb-4">Keep your login safe!</h3>

      <p className="mb-4">Anyone with your username and password can get into your Twitch account. Never tell anyone your password, not even someone at Twitch. We will never ask for your password.</p>

      <p className="mb-4">We recommend you use a password on Twitch that you don’t use anywhere else. It might be hard to remember lots of passwords so it might be worth finding a good password manager to keep all your passwords in a safe place where you don’t have to remember all of them.</p>

      <h3 className="text-2xl mb-4">Two Factor Authentication (2FA)</h3>

      <p className="mb-4">
        Two factor authentication is one of the best things you can do to protect your Twitch account from the bad guys out there. You can enable it from your
        {' '}
        <a href="https://www.twitch.tv/settings/security">security settings page</a>
        . Now, even if someone steals your password, they will have to also steal a code from your phone to log in. This will make it much harder for bad people to get into your account.
      </p>

      <h3 className="text-2xl mb-4">Verify your Email</h3>

      <p className="mb-4">If you forget your password you will need a verified email to get back into your account. Make sure to verify your account via the steps we sent you.</p>

      <h3 className="text-2xl mb-4">Staying Safe</h3>

      <p className="mb-4">It doesn’t hurt to be a little cautious when protecting yourself online. Avoid clicking links or downloading files from suspicious strangers and keep your devices up to date with the latest updates.</p>

      <h2>Responsible Disclosure</h2>

      <p className="mb-4">
        If you believe you’ve discovered a vulnerability in Twitch that puts our users at risk and can give technical details, please use the below form.
      </p>

      <p className="mb-4">
        If you believe that such security issue exists but cannot give technical details, please instead contact
        {' '}
        <a href="https://help.twitch.tv/">Twitch Support</a>
        , who will handle the issue appropriately.
      </p>

      <p className="mb-4">If, by your technical description we are able to replicate and eventually fix your security issue, you can claim credit at Bugcrowd which will contribute toward your position on Bugcrowd’s global leaderboard.</p>
    </div>
  );
};

export default AboutPage;
