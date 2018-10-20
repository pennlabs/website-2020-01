const Box = (props) => (
  <div class="box" style={{marginBottom: "1.5rem"}}>
    <div class="card-content">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            {props.img ? (
              <p class={props.imgClass}>
                <img src={props.img} />
              </p>) : <div></div>}
            </div>
            <div class="level-item">
              <div class="content">
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
