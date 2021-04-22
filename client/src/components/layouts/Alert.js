import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';

const Alert = ({ alerts }) => (
  <div
    style={{
      marginTop: '450px',
      position: 'fixed',
      zIndex: '99',
      marginLeft: '10px',
    }}
  >
    {alerts !== 0 &&
      alerts.length > 0 &&
      alerts.map((alert) => (
        <Fade left duration={300}>
          <div
            key={alert.id}
            className={`alert alert-${alert.alertType}`}
            style={{ border: '2px solid ' }}
          >
            {alert.alertType === 'danger' ? (
              <span>
                <strong>Error : </strong>
                {alert.msg}
              </span>
            ) : (
              <span>
                <strong>Success : </strong>
                {alert.msg}
              </span>
            )}
          </div>
        </Fade>
      ))}
  </div>
);

alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
