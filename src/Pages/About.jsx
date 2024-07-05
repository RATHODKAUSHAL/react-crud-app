import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
                  <section className="timeline-section section-padding" id="section_3">
                <div className="section-overlay"></div>

                <div className="container">
                    <div className="row">

                        <div className="col-12 text-center">
                            <h2 className="text-white mb-4">How does it work?</h2>
                        </div>

                        <div className="col-lg-10 col-12 mx-auto">
                            <div className="timeline-container">
                                <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
                                    <div className="list-progress">
                                        <div className="inner"></div>
                                    </div>

                                    <li>
                                        <h4 className="text-white mb-3">Search your favourite topic</h4>

                                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam numquam aliquam? Voluptas, accusamus omnis?</p>

                                        <div className="icon-holder">
                                        <span>1</span>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <h4 className="text-white mb-3">Bookmark &amp; Keep it for yourself</h4>

                                        <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi necessitatibus aperiam repudiandae nam omnis est vel quo, nihil repellat quia velit error modi earum similique odit labore. Doloremque, repudiandae?</p>

                                        <div className="icon-holder">
                                        <span>2</span>
                                        </div>
                                    </li>

                                    <li>
                                        <h4 className="text-white mb-3">Read &amp; Enjoy</h4>

                                        <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi vero quisquam, rem assumenda similique voluptas distinctio, iste est hic eveniet debitis ut ducimus beatae id? Quam culpa deleniti officiis autem?</p>

                                        <div className="icon-holder">
                                          <span>3</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 text-center mt-5">
                            <p className="text-white">
                                Want to learn more?
                                <Link to="#" className="btn custom-btn custom-border-btn ms-3">Check out Youtube</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default About
