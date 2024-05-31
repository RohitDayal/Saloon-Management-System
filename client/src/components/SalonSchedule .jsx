import React from "react";

const SalonSchedule = () => {
  return (
    <div className="schedule-container">
      <div className="left-column">
        <h2>Salon Working Hours</h2>
        <div className="schedule">
          <div className="day">Mon - Wed</div>
          <div className="time">10:00 AM - 9:00 PM</div>
          <div className="day">Thursday</div>
          <div className="time">10:00 AM - 7:30 PM</div>
          <div className="day">Friday</div>
          <div className="time">10:00 AM - 9:00 PM</div>
          <div className="day">Sat - Sun</div>
          <div className="time">10:00 AM - 5:00 PM</div>
        </div>
      </div>
      <div className="right-column">
        <div className="time-schedule">
          <h3>TIME SCHEDULE</h3>
          <h4>Working Hours</h4>
          <p>
            Nemo ipsam egestas volute turpis varius ipsum egestas purus diam
            ligula sapien ultrice sapien tempor aliquam tortor ipsum and augue
            turpis quaerat aliquet congue and molestie magna in congue undo
            aliquet congue ultrices quaerat
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalonSchedule;
