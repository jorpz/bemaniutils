/** @jsx React.DOM */

var Slider = React.createClass({
    render: function() {
        return (
            <div
                className={"slider " + (this.props.value ? "on" : "off")}
                onClick={function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (this.props.onChange) {
                        this.props.onChange(!this.props.value);
                    }
                }.bind(this)}
            >{ this.props.value ?
                <span>
                    <span className="ball on"></span>
                    <span className="label on">{this.props.on}</span>
                </span> :
                <span>
                    <span className="label off">{this.props.off}</span>
                    <span className="ball off"></span>
                </span>
            }</div>
        );
    },
});