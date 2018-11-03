const Table = (props) => (
<div className="container" style={props.style}>
      <div className="levels">
        <div className="level-left">
          <div className="level-item">
            <h3 className="title is-3" style={{marginBottom:"0.5rem"}}>
              {props.title}
            </h3>
          </div>
          <div className="level-item">
            <p className="image">
              <img src={props.img} style={{height:"10rem", width:"auto"}}/>
            </p>
          </div>
        </div>
      </div>
      <p>{props.desc}</p>
      <br/>
      <div></div>
      <table className="table">
        <thead>
          <tr>
            <th>{props.col1}</th>
            <th>{props.col2}</th>
          </tr>
        </thead>
        <tbody>
        {props.data.map((entry) => (
          <tr>
            <td>{entry.col1.text}</td>
            <td><a href={entry.col2.link}>{entry.col2.text}</a></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>);

export default Table;
