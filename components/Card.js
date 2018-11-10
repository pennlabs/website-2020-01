const Card = (props) => (
  <div className="column is-half">
    <div className="card">
      <div className="card-content">
        <div class="media">
          {props.img ? (
            <div class="media-left">
              <figure class={props.imgclassName}>
                <img src={props.img} alt="Placeholder image" />
              </figure>
            </div>): <div></div>}
          <div class="content">
              {props.titleChild}
              {props.desc}
          </div>
        </div>
    </div>
  </div>
</div>);

export default Card;
