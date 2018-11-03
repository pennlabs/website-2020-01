const Box = (props) => (
  <div className="box" style={{marginBottom: "1.5rem"}}>
    <div className="card-content">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            {props.img ? (
              <p className={props.imgclassName}>
                <img src={props.img} />
              </p>) : <div></div>}
            </div>
            <div className="level-item">
              <div className="content">
                {props.titleChild ? props.titleChild : (
                  <h3 style={props.titleStyle}>
                    {props.title}
                  </h3>
                )}
                <p style={{paddingTop:0}}>
                  {props.desc}{props.descChild}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  export default Box;
