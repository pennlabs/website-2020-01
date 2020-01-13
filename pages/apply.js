import Layout from '../components/Layout'
import Link from 'next/link'

const info = {
  isOpen: true,
  applicationUrl: 'https://airtable.com/shrvvvrVR4E2VZDUo',
  season: 'Spring',
  year: '2020',
  sessions: [
    {
      'location': 'JMHH XXX',
      'date': 'Thursday 1/25',
      'time': '6-7pm'
    },
    {
      'location': 'JMHH XXX',
      'date': 'Monday 1/25',
      'time': '6-7pm'
    }
  ],
  writtenDueDate: ''
}

const CallToAction = ({season, year, applicationUrl}) => (
  <div>
    <h1 className="title" style={{ color: 'azure', fontSize: '2.8rem' }}>
      Come build with us!
    </h1>
    <h2 className="subtitle">
      Join the Penn Labs community this {season}.
    </h2>
    <a class="button is-large is-info is-rounded is-inverted is-focused" 
        href={applicationUrl}>
          Apply Now
          <span class="icon is-small" style={{marginLeft: "0.1rem"}}>
          <i class="fa fa-angle-double-right"></i></span>
    </a>
  </div>
)

const ComeBackLater = ({season, year}) => (
  <div>
    <h1 className="title" style={{ color: 'azure', fontSize: '2.8rem' }}>
      Thanks for your interest in Penn Labs!
    </h1>
    <h2 className="subtitle">
      We're no longer accepting {season} {year} applications.
    </h2>
  </div>
)

const Apply = () => (
  <Layout>
    <section className="hero is-info is-small">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              {info.isOpen ? <CallToAction {...info} /> : <ComeBackLater {...info} />}
            </div>
            <div className="column">
              <figure className="image" style={{ width: '100%' }}>
                <img
                  src="https://pennlabs.org/static/img/1labs-group.jpg"
                  style={{ borderRadius: '5px' }}
                ></img>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <h1 className="title" style={{ fontSize: '2.4rem' }}>
              Why Penn Labs?
            </h1>
            <h2 className="subtitle" style={{ fontSize: '1.2rem' }}>
              Because we{' '}
              <span
                className="icon is-small"
                style={{
                  color: '#F56F71',
                  marginLeft: '0.3rem',
                  marginRight: '0.3rem',
                }}
              >
                <i className="fa fa-heart"></i>
              </span>{' '}
              creators.
            </h2>

            <p>
              Penn Labs builds products that help students navigate life at
              Penn. All Penn students are eligible to apply for any position,
              regardless of major or year.
              <br />
              <br /> Some Penn Labs products that you may be familiar with
              include Penn Course Review, Penn Mobile, and Penn Course Alert.
              We’ve had more than 100,000 total users of our products. Through
              the Common Funding Application we build and maintain, we've helped
              processed over $930,000 in grants for student organizations.
              <br />
              <br /> Our mission is to build tech products to serve all Penn
              students, and we recognize that goal requires a decent amount of
              commitment and technical experience. We meet for 4 hours each week
              to work on projects, discuss future product roadmaps, and learn
              more about the technologies we use. Members are also expected to
              work outside of meetings to meet product goals. While technical
              ability varies when joining Penn Labs and our members are always
              learning, our commitment to building quality products means that
              we seek candidates with sufficient technical ability, which we
              evaluate through the technical challenge phase of the application
              process.
              <br />
              <br /> Come out to our info sessions to learn more
              and meet our members! And feel free to reach out to
              contact@pennlabs.org anytime.
              <div className="content">
                <br />
                <h4>Info Sessions</h4>
                <ul>
                  {info.sessions.map(session => (
                  <li>When: <b>{session.date} {session.time}</b> <br />Where: <b>{session.location}</b></li>
                  ))}
                </ul>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      className="section"
      style={{ backgroundColor: '#209CEE', color: 'azure' }}
    >
      <div className="container" style={{ width: '75%' }}>
        <h1 className="title" style={{ fontSize: '2.4rem', color: 'azure' }}>
          Open Roles
        </h1>
        <div className="columns" style={{ marginTop: '2rem' }}>
          <div className="column is-half">
            <div className="box">
              <div className="card-content">
                <div className="content">
                  <h3>
                    <strong>Software Engineering</strong>
                  </h3>
                  <p style={{ paddingTop: '0px' }}>
                    Build products and implement new features to solve problems
                    with tech. Whether you’re interested in front-end web dev,
                    iOS programming, or data science, there’s a project that
                    you’ll find interesting.
                    <br />
                    <br /> While many of our developers have multiple interests
                    and responsibilities, here are the categories that we find
                    useful to get to know you by:
                    <ul>
                      <li>Back-end web</li>
                      <li>Front-end web</li>
                      <li>Fullstack web</li>
                      <li>Android</li>
                      <li>iOS</li>
                    </ul>
                  </p>

                  <p>
                    <Link href="https://stackshare.io/penn-labs">
                      <a>
                        Check out our stack
                      </a>
                    </Link>{' '}
                    to find out more about the frameworks and tools we use in
                    our products.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-half">
            <div className="box">
              <div className="card-content">
                <div className="content">
                  <h3>
                    <strong>Product Design</strong>
                  </h3>
                  <p style={{ paddingTop: '0px' }}>
                    Connect function with form to reach users and meet their
                    needs through UI/UX and graphic design. Designers create
                    mockups, prototypes, and graphic assets. They also manage
                    the visual language of the organization. Our toolkit
                    includes Sketch, Invision, Zeplin, and Adobe Suite.
                  </p>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="card-content">
                <div className="content">
                  <h3>
                    <strong>Business Development</strong>
                  </h3>
                  <p style={{ paddingTop: '0px' }}>
                    Our products need to be taken from "lab" to real world.
                    BizDev spearheads marketing, events, and collaborations to
                    ensure that Penn Labs reaches real users and meets their
                    needs. If you want to be in the tech industry and help grow
                    an organization in all capacities (strategy, user
                    acquisition, finance, etc), this is the role for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container" style={{ width: '75%' }}>
        <h1 className="title" style={{ fontSize: '2.4rem' }}>
          Application Process
        </h1>
        <p>
          If any of that gets you excited, we’d love for you to apply to Penn
          Labs! After the written application, we invite qualified candidates to
          our second round. This takes place in two parts:
        </p>
        <br />
        <ol style={{ marginLeft: '2rem' }}>
          <li>
            <b>Casual chat</b> with a current member, because we want to get to
            know you in person! Community and culture are very important to us.
            This conversation also gives you the chance to learn more about what
            being in Penn Labs is really like.
          </li>
          <br />
          <li>
            <b>Technical challenge</b> where you can show off your skills.
            You'll be given a few days to complete a take-home challenge. We
            hold an office hours event and are always available via email for
            questions.
          </li>
        </ol>
      </div>
    </section>

    <section
      className="section"
      style={{ backgroundColor: '#209CEE', color: 'azure' }}
    >
      <div className="container" style={{ width: '75%' }}>
        <h1 className="title" style={{ fontSize: '2.4rem', color: 'azure' }}>
          More about Us
        </h1>
        <div className="columns" style={{ marginTop: '2rem' }}>
          <div className="column is-half">
            <div className="box">
              <div className="card-content">
                <div className="content">
                  <h3>
                    <strong>Iconic Products</strong>
                  </h3>
                  <p style={{ paddingTop: '0px' }}>
                    From Penn Course Review to the Common Funding Application,
                    we build software that improves the lives of every Penn
                    student. Watching your friends use the products that you
                    helped build is incredibly rewarding way to make an impact
                    at Penn.
                  </p>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="card-content">
                <div className="content">
                  <h3>
                    <strong>Modern Engineering</strong>
                  </h3>
                  <p style={{ paddingTop: '0px' }}>
                    We use exclusively open source modern frameworks that are
                    commonly used in the software industry (i.e. React.js,
                    Django, Swift). Our engineers keep up to date with good
                    coding/deployment practices and we always place an emphasis
                    on becoming better programmers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-half">
            <div className="box">
              <div className="card-content">
                <div className="content">
                  <h3>
                    <strong>Hone Your Skills</strong>
                  </h3>
                  <p style={{ paddingTop: '0px' }}>
                    Skill levels vary when joining Labs, but building and
                    maintaining production-quality products used by thousands of
                    students every day is great real-world experience that's
                    hard to get anywhere else on campus. Our members are highly
                    sought after, becoming teaching assistants, working for
                    prestigious companies around the world, and launching their
                    own startups.
                  </p>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="card-content">
                <div className="content">
                  <h3>
                    <strong>Lots of Fun</strong>
                  </h3>
                  <p style={{ paddingTop: '0px' }}>
                    We're proud of the community we've built inside Penn Labs.
                    Outside of working on all our products, we're a group of
                    friends who support each other. We have a co-ed rec
                    basketball team (2018-19 champions!), board game nights,
                    study sessions, and also just hang out. It's always great to
                    get away with friends to avoid thinking about bugs for a
                    while.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Apply
