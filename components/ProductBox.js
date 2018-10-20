const ProductBox = (props) => (
  <div>
    <div class="box" style={{marginBottom: "1.5rem"}}>
      <div class="card-content">
        <div class="level" style={{marginBottom:"0.5rem"}}>
          <div class="level-left">
            <div class="level-item">
              <p class="image is-48x48">
                <img src={props.img} />
              </p>
            </div>
            <div class="level-item">
              <h1 style={{fontWeight:500, fontSize:"1.8rem"}}>
                {props.title}
              </h1>
            </div>
          </div>
        </div>
        <p>
          {props.desc}
        </p>
        <br/>
        {props.tag}
        </div>
      </div>
    </div>
  );

  export default ProductBox;
