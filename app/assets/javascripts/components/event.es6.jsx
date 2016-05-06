class Event extends React.Component {
  render () {
    // var parts = []
    // for (var value of this.props) {
    //   parts.append()
    // }
    return (
      <div>
        <div>title: {this.props.title}</div>
        <div>start: {this.props.start_time}</div>
        <div>end: {this.props.end_time}</div>
      </div>
    );
  }
}

Event.propTypes = {
  start_time: React.PropTypes.node,
  end_time: React.PropTypes.node
};
