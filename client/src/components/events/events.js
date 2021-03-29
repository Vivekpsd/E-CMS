import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { allEvents } from '../../actions/event';
import EventItem from './EventItem';

const Events = ({ allEvents, event: { events, loading } }) => {
  useEffect(() => {
    allEvents();
  }, [allEvents]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Events</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Browse our Events
          </p>

          <div>
            <p className=''></p>
            <Link to='/createEvent' className='btn btn-info'>
              Add Event
            </Link>
            &nbsp;
            <Link to='/dashboard' className='btn btn-dark'>
              Go Back To Dashboard
            </Link>
          </div>

          <br></br>
          <div className='events'>
            {events.length > 0 ? (
              events.map((event) => <EventItem key={event._id} event={event} />)
            ) : (
              <h4>No courses found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
    // <div>
    //   <h1>Events</h1>
    //   <Link to='/createEvent' className='btn btn-primary'>
    //     Create Event
    //   </Link>
    // </div>
  );
};

Events.propTypes = {
  event: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  event: state.event,
});

export default connect(mapStateToProps, { allEvents })(Events);
