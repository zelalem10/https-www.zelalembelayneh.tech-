import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Experience = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h4 className="title" data-aos="fade-down">
            WHAT I HAVE DONE SO FAR
          </h4>
        </div>
        <section id="resume" className="grey-section">
          <div className="row resume-timeline">
            <div className="col-twelve resume-header">
              <h4 className="subtitle">Work Experience</h4>
            </div>

            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap"></i>
                  </div>

                  <div className="timeline-header">
                    <h6 className="my-3">Junior Software Engineer</h6>
                    <p>Jan 2018 - Jan 2019</p>
                  </div>

                  <div className="timeline-content">
                    <h6 className="my-3">ETHIOPIAN AIRLINES</h6>
                    <ul class="list-disc">
                      <li>
                        Contributed to the development of both the backend and
                        front-end applications
                      </li>
                      <li>
                        Created an online job application system for Ethiopian
                        Aviation Academy jobs and training
                      </li>
                      <li>
                        Developed corporate website and automated online
                        performance management system.
                      </li>
                      <li>
                        Designed Windows service to fetch employee data from
                        SALP and import it to SQL database
                      </li>
                      <li>
                        Writing code for simple to moderately complex software
                        applications
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap"></i>
                  </div>

                  <div className="timeline-header">
                    <h6 className="my-3">Senior Software Engineer</h6>
                    <p>Jan 2019 - Jan 2021</p>
                  </div>

                  <div className="timeline-content">
                    <h6 className="my-3">ETHIOPIAN AIRLINES</h6>
                    <ul class="list-disc">
                      <li>
                        Redesigned Cargo System to increase interoperability by
                        using RESTful Web Services.
                      </li>
                      <li>
                        Created Ethiopian Airports website and e-booking system
                        to streamline flight schedule
                      </li>
                      <li>
                        Provided maintenance and support by removing bugs and
                        adding functionality to existing systems
                      </li>
                      <li>
                        Implemented troubleshooting, debugging, and software
                        upgrades
                      </li>
                      <li>
                        Streamlined integration of software components with
                        3rd-party programs
                      </li>
                      <li>
                        Designing and implementing complex software systems
                      </li>
                      <li>
                        Participating in architecture and design decisions
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap"></i>
                  </div>

                  <div className="timeline-header">
                    <h6 className="my-3">Senior I Software Engineer</h6>
                    <p>Jan 2021 - April 2022</p>
                  </div>

                  <div className="timeline-content">
                    <h6 className="my-3">ETHIOPIAN AIRLINES</h6>
                    <ul class="list-disc">
                      <li>
                      Acquired more than $300,000 for Ethiopian Airlines by developing Ethiopian Passport system.
                      </li>
                      <li>
                      Increased access to state contracts, open/closed bids, pre-authorized contract catalogs, and
electronic responses to pricing requests by creating Ethiopian airline's e-procurement system to
optimize purchasing channels
                      </li>
                      <li>
                      Implemented new functionalities to the booking website
                      </li>
                      <li>
                      Enhanced application usability and performance by redesigning and modifying numerous software
applications and websites
                      </li>
                      <li>
                      Enhanced application interoperability by implementing RESTful Web Services
                      </li>
                      <li>
                      Identified and resolved technical issues by maintaining and upgrading enterprise systems
                      </li>
                      <li>
                      Mentoring and leading junior engineers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row resume-timeline">
            <div className="col-twelve resume-header">
              <h4 className="subtitle">Education</h4>
            </div>

            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico-edu-miu">
                    <i className="fa fa-briefcase"></i>
                  </div>

                  <div className="timeline-header">
                    <h6 className="my-3">Master Degree</h6>
                    <p>may 2022 - Present</p>
                  </div>

                  <div className="timeline-content">
                    <h6 className="my-3">Maharishi International University</h6>
                    <ul class="list-disc">
                      <li>
                      In progress via distance education; expected completion Dec 2024
                      </li>
                      <li>
                      Key Courses: Fundamental Programming Practices, Modern Programming Practices, 
Enterprise Architecture, Web Application Programming, 
Web Application Architecture, Software Architecture
                      </li>
                   
                    </ul>

                  </div>
                </div>


                <div className="timeline-block">
                  <div className="timeline-ico-edu-wollo">
                    <i className="fa fa-briefcase"></i>
                  </div>

                  <div className="timeline-header">
                    <h6 className="my-3">Bachelor  Degree</h6>
                    <p>may 2022 - Present</p>
                  </div>

                  <div className="timeline-content">
                    <h6 className="my-3">Wollo University</h6>
                    <ul class="list-disc">
                      <li>
                      Completed in 2028
                      </li>
                   
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experience;
