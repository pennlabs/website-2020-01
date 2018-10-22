const Members = (props) => (
  <div class="columns is-multiline">
    <div class="column is-one-third">
      {props.members.map((member) =>
        (<a href={"/team/" + member.user.name}>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src={"/img/members/" + member.user.name + ".png"}
                style={{maxWidth:"100%", objectFit: "cover"}}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <h1 style={{fontWeight:500, fontSize:"1.5rem", marginBottom: "1rem"}}>
              {member.user.name}
            </h1>
            <div class="tags">
              <span class="tag is-rounded">{member.user.major}</span>
              <span class="tag is-rounded">{member.role}</span>
            </div>
          </div>
        </div>
      </a>)
    )}
  </div>
</div>
);

export default Members;
