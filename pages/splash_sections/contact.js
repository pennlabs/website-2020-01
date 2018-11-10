
const Contact = (props) => (
  <div>
    <section className="section">
      <div className="container">
        <div className="levels">
          <div className="level-left">
            <div className="level-item">
            <h1 className="title" style={{fontSize:"2.8rem"}}>
             Contact
            </h1>
          </div>
          </div>
        </div>
        <p>
        Your feedback as users means everything to us. <br/> Is there something we can do better? Want to learn more about Labs?
        <br/>
        <br/>Submit bug fixes, new feature suggestions, questions, and comments here!
        </p>
        <br/>
        <div style={{width:"60%"}}>
          <form action="https://formspree.io/contact@pennlabs.org" method="POST">
            <div className="field">
              <label className="label has-text-weight-semibold">
                Name (optional)
              </label>
              <div className="control">
                  <input className="input" type="text" placeholder="Hi there!" name="name" />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-weight-semibold">
                Email (optional)
              </label>
              <div className="control">
                  <input className="input" type="email" placeholder="We'll send our response to this email" name="email"/>
              </div>
            </div>
            <div className="field">
              <label className="label has-text-weight-semibold">
                Message
              </label>
              <div className="control">
                <textarea className="textarea" placeholder="What's up?" name="message"></textarea>
              </div>
            </div>
            <div className="field" style={{width:"100%"}}>
              <div className="control clear" style={{textAlign:"left"}}>
                <button className="button is-medium">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
</div>
);

export default Contact;
