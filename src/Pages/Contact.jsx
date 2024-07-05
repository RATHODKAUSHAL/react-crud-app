import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
                 <section class="contact-section section-padding section-bg" id="section_5">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12 text-center">
                            <h2 class="mb-5">Get in touch</h2>
                        </div>

                        

                        <div class="col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto">
                            <h4 class="mb-3">Head office</h4>

                            <p>Bay St &amp;, Larkin St, San Francisco, CA 94109, United States</p>

                            <hr />

                            <p class="d-flex align-items-center mb-1">
                                <span class="me-2">Phone</span>

                                <Link href="tel: 305-240-9671" class="site-footer-link">
                                    305-240-9671
                                </Link>
                            </p>

                            <p class="d-flex align-items-center">
                                <span class="me-2">Email</span>

                                <Link href="mailto:info@company.com" class="site-footer-link">
                                    info@company.com
                                </Link>
                            </p>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12 mx-auto">
                            <h4 class="mb-3">Dubai office</h4>

                            <p>Burj Park, Downtown Dubai, United Arab Emirates</p>

                            <hr />

                            <p class="d-flex align-items-center mb-1">
                                <span class="me-2">Phone</span>

                                <Link href="tel: 110-220-3400" class="site-footer-link">
                                    110-220-3400
                                </Link>
                            </p>

                            <p class="d-flex align-items-center">
                                <span class="me-2">Email</span>

                                <Link href="mailto:info@company.com" class="site-footer-link">
                                    info@company.com
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </section>
    </div>
  )
}

export default Contact
