class Event extends React.Component {
  render () {
    debugger
    // var parts = []
    // for (var value of this.props) {
    //   parts.append()
    // }
    return (
      <div className='agenda-block'>
        <div className='agenda-title-section'>
          <h3>{this.props.title}</h3>
          <p>{this.props.location}</p>
        </div>
        <div className='agenda-time-section'>
          <h4>{this.props.end_time}</h4>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  start_time: React.PropTypes.node,
  end_time: React.PropTypes.node
};
