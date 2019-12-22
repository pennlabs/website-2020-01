import Layout from '../components/Layout'
import MemberCard from '../components/MemberCard'

import fetch from 'isomorphic-fetch'

const Members = ({ teams }) => (
  <Layout>
    <section className="section">
      <div className="container">
        <h3
          className="title is-3"
          style={{ marginBottom: '0.5rem', fontWeight: 800 }}
        >
          Meet the Team
        </h3>
        <p>
          The brilliant minds behind the products that tens of thousands of
          students use.
        </p>

        <br />
        {teams.map(({ name, description, members }) => (
          <div key={name}>
            <h4
              className="title is-4"
              style={{ fontWeight: 800, marginBottom: '0.3rem' }}
            >
              {name}
            </h4>
            <p> {description} </p>
            <br />
            <div className="columns is-multiline">
              {members &&
                members.map(member => (
                  <MemberCard
                    {...member}
                    key={member.student && member.student.name}
                  />
                ))}
            </div>
            <br />
          </div>
        ))}
      </div>
    </section>
  </Layout>
)

Members.getInitialProps = async ({}) => {
  const res = await fetch(
    'https://platform.pennlabs.org/org/teams/?format=json'
  )
  const teams = await res.json()
  return { teams }
}

export default Members
