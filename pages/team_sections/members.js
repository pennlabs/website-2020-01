

const Members = (props) => (
  <div className="columns is-multiline">
    <div className="column is-one-third">
      {props.members.map((member) =>
        (<a href={"/member?name=" + member.url}>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={member.photo}
                style={{maxWidth:"100%", objectFit: "cover"}}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <h1 style={{fontWeight:500, fontSize:"1.5rem", marginBottom: "1rem"}}>
              {member.user.name}
            </h1>
            <div className="tags">
              <span className="tag is-rounded">{member.user.major}</span>
              {member.teams.map((team) =>
                <span className="tag is-rounded">{team.name}</span>
              )}
              {member.roles.map((role) =>
                <span className="tag is-rounded">{role.name}</span>
              )}
            </div>
          </div>
        </div>
      </a>))}
  </div>
</div>
);

export default Members;
