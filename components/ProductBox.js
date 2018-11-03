const ProductBox = (props) => (
  <div>
    <div className="box" style={{marginBottom: "1.5rem"}}>
      <div className="card-content">
        <div className="level" style={{marginBottom:"0.5rem"}}>
          <div className="level-left">
            <div className="level-item">
              <p className="image is-48x48">
                <img src={props.img} />
              </p>
            </div>
            <div className="level-item">
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
