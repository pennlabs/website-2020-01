
const Contact = (props) => (
  <div>
    <section class="section">
      <div class="container">
        <div class="levels">
          <div class="level-left">
            <div class="level-item">
            <h1 class="title" style={{fontSize:"2.8rem"}}>
             Get In Touch:
            </h1>
          </div>
            <div class="level-item">
              <p class="image">
                <img src="/static/img/undraw_mailbox.png" style={{height:"10rem", width:"auto"}}/>
              </p>
            </div>
          </div>
        </div>
        <p>
          We build tools for Penn students. Your feedback as users means everything to us. <br/> Is there something we can do better? Want to learn more about Labs? Submit bug fixes, new feature suggestions, questions, and comments here!
        </p>
        <br/>
        <div style={{width:"60%"}}>
          <form action="https://formspree.io/contact@pennlabs.org" method="POST">
            <div class="field">
              <label class="label has-text-weight-semibold">
                Name (optional)
              </label>
              <div class="control">
                  <input class="input" type="text" placeholder="Hi there!" name="name" />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-weight-semibold">
                Email (optional)
              </label>
              <div class="control">
                  <input class="input" type="email" placeholder="We'll send our response to this email" name="email"/>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-weight-semibold">
                Message
              </label>
              <div class="control">
                <textarea class="textarea" placeholder="What's up?" name="message"></textarea>
              </div>
            </div>
            <div class="field" style={{width:"100%"}}>
              <div class="control clear" style={{textAlign:"left"}}>
                <button class="button is-medium">
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
