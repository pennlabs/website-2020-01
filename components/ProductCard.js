const ProductCard= (props) => (
  <div className="column is-half">
    <a href={props.href}>
    <div className="card">
      <div className="card-content">
        <div class="media">
          <div class="media-left">
            {props.img ? (
              <figure class="image is-64x64" >
                <img src={props.img} alt="Placeholder image" />
              </figure> ): <div></div>}
          </div>
          <div class="media-content">
            <div className="content">
              <div style={{paddingBottom: "0.5rem"}}>
                {props.titleChild ? props.titleChild : (<p class="title is-4">{props.title}</p>)}
                {props.tag}
              </div>
              {props.descChild ? props.descChild : props.desc}
            </div>
          </div>
        </div>
      </div>
    </div>
    </a>
  </div>
);

  export default ProductCard;
