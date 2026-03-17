import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        
        {/* Profile Summary */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">
              A bit about myself
            </h3>
          </Col>

          <Col lg="7">
            {/* 🔥 Tambahin edu-row di sini */}
            <div className="about-box edu-row">
              <p className="about-text">
                {dataabout.aboutme}
              </p>
            </div>
          </Col>
        </Row>

        {/* --- EDUCATION --- */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-1">Education</h3>
          </Col>
          <Col lg="7">
            <table
              className="table caption-top"
              style={{ tableLayout: "fixed", width: "100%" }}
            >
              <tbody>
                {dataabout.education && dataabout.education.map((data, i) => {
                  return (
                    // <tr key={i}>
                    <tr key={i} className="edu-row">
                      <th scope="row" style={{ width: "25%" }}>
                        {data.degree}
                      </th>

                      <td style={{ width: "20%" }}>
                        {data.institution}
                      </td>

                      <td style={{ width: "40%", wordBreak: "break-word" }}>
                        {data.education_education}
                      </td>

                      <td
                        className="text-end"
                        style={{ width: "15%", whiteSpace: "nowrap" }}
                      >
                        {data.year}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

          {/* --- TRAINING --- */}
          <Row className="sec_sp edu-section">
            <Col lg="5">
              <h3 className="color_sec py-2">Training</h3>
            </Col>

            <Col lg="7">
              {dataabout.training && dataabout.training.map((data, i) => (
                <div className="service_ py-1 edu-row training-card" key={i}>
                  <h5 className="service__title">{data.title}</h5>

                  <p className="service_desc">
                    Organized by {data.organizer}
                  </p>

                  <p className="service_desc text-end" style={{ whiteSpace: "nowrap" }}>
                    {data.year}
                  </p>
                </div>
              ))}
            </Col>
          </Row>

        {/* {/* --- ACHIEVEMENTS/} */}
        <Row className="sec_sp edu-section">
          <Col lg="5">
            <h3 className="color_sec py-4">Achievements</h3>
          </Col>
          <Col lg="7">
            <hr className="t_border my-3" />
            {dataabout.achievements && dataabout.achievements.map((data, i) => (
                <div className="service_ py-1 edu-row achievements" key={i}>              
                <h5 className="service__title">🏅 {data.title}</h5>
                <p className="service_desc">{data.Note_Desc}</p>                
                <p className="service_desc">{data.year}</p>
              </div>
            ))}
          </Col>
        </Row>        

        {/* Work Timeline */}
        <Row className=" sec_sp edu-section">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    // <tr key={i}>
                    <tr key={i} className="work-row">
                      <th scope="row" style={{ width: "25%", verticalAlign: "top", paddingTop: "15px" }}>
                        {data.jobtitle}
                      </th>
                      <td style={{ verticalAlign: "top", paddingTop: "15px" }}>
                        <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{data.where || data.company}</div>
                        <div style={{ fontSize: "0.85rem", color: "#888", marginBottom: "10px" }}>{data.date || data.period}</div>
                        {data.description && (
                          <ul style={{ paddingLeft: "20px", marginTop: "10px", listStyleType: "disc" }}>
                            {data.description.map((item, index) => (
                              <li key={index} style={{ marginBottom: "5px", fontSize: "0.95rem" }}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        {/* Skills */}
        <Row className="sec_sp edu-section">
          <Col lg="5">
            <h3 className="color_sec py-4">Technical Skills</h3>
          </Col>
          <Col lg="7" className="d-flex flex-wrap">
            {skills.map((data, i) => {
              return (
                // <div key={i} className="service_ py-1">
                <div className="service_ py-1 edu-row skills" key={i}> 
                  <h5 className="service__title" style={{ 
                    border: "1px solid #333", 
                    padding: "10px 20px", 
                    borderRadius: "5px", 
                    marginRight: "10px",
                    fontSize: "1rem" 
                  }}>
                    {data.name}
                  </h5>
                </div>
              );
            })}
          </Col>
        </Row>

        {/* Services */}
        <Row className="sec_sp edu-section">
          <Col lg="5">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                  <div className="service_ py-1 edu-row service" key={i}> 
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};