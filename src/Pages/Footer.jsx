import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className="site-footer section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-12 mb-4 pb-2">
                        <Link className="navbar-brand mb-2" to="/">
                            
                            <span>Edu.</span>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                        <h6 className="site-footer-title mb-3">Resources</h6>

                        <ul className="site-footer-links">
                            <li className="site-footer-link-item">
                                <Link to="/" className="site-footer-link">Home</Link>
                            </li>

                            <li className="site-footer-link-item">
                                <Link to="/topic-details" className="site-footer-link">Browse Topics</Link>
                            </li>

                            <li className="site-footer-link-item">
                                <Link to="/about" className="site-footer-link">About</Link>
                            </li>

                            <li className="site-footer-link-item">
                                <Link to="/contact" className="site-footer-link">Contact</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="/students" className="site-footer-link">Student</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                        <h6 className="site-footer-title mb-3">Information</h6>

                        <p className="text-white d-flex mb-1">
                            <a href="tel: 305-240-9671" className="site-footer-link">
                                305-240-9671
                            </a>
                        </p>

                        <p className="text-white d-flex">
                            <a href="mailto:info@company.com" className="site-footer-link">
                                info@company.com
                            </a>
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            English</button>

                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Thai</button></li>

                                <li><button className="dropdown-item" type="button">Myanmar</button></li>

                                <li><button className="dropdown-item" type="button">Arabic</button></li>
                            </ul>
                        </div>

                        <p className="copyright-text mt-lg-5 mt-4"/>Copyright © 2048. All rights reserved.
                        
                        
                    </div>

                </div>
            </div>
        </footer>

    </div>
  )
}

export default Footer
