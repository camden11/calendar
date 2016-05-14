class Event extends React.Component {
  render () {
    endTime = moment(this.props.end_time).format("h:mm A")
    startTime = moment(this.props.start_time).format("h:mm A")
    return (
      <div className='agenda-block'>
        <div className='agenda-title-section'>
          <h3>{this.props.title}</h3>
          <p>{this.props.location}</p>
        </div>
        <div className='agenda-time-section'>
          <h4>{startTime}</h4>
          <h4>{endTime}</h4>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  start_time: React.PropTypes.node,
  end_time: React.PropTypes.node
};
