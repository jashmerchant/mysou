import Link from 'next/link';
import React from 'react';
import { parseCookies } from 'nookies';

// const Sidebar = ({ ctx }) => 
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: parseCookies().id
        }
    }

    render() {
        return (
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="position-sticky pt-3">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <Link href={`/student/${this.state.id}/dashboard`}>
                                <a class="nav-link" aria-current="page">
                                    <span data-feather="home"></span>
              				Dashboard
            			</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href={`/student/${this.state.id}/grades`}>
                                <a class="nav-link">
                                    <i data-feather="file"></i>
              				Grades
            			</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href={`/student/${this.state.id}/resources`}>
                                <a class="nav-link">
                                    <span data-feather="shopping-cart"></span>
              				Resources
            		    </a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href={`/student/${this.state.id}/events`}>
                                <a class="nav-link">
                                    <span data-feather="users"></span>
              				    Events
            			        </a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href={`/student/${this.state.id}/clubs`}>
                                <a class="nav-link">
                                    <span data-feather="file"></span>
              				Clubs
            			</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href={`/student/${this.state.id}/placements`}>
                                <a class="nav-link">
                                    <span data-feather="layers"></span>
              				Placements
            			</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href={`/student/${this.state.id}/settings`}>
                                <a class="nav-link">
                                    <span data-feather="layers"></span>
              				Settings
            			</a>
                            </Link>
                        </li>
                    </ul>

                    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Student Services</span>
                        <a class="link-secondary" aria-label="Student Services">
                            <span data-feather="plus-circle"></span>
                        </a>
                    </h6>
                    <ul class="nav flex-column mb-2">
                        <li class="nav-item">
                            <Link href={`/student/${this.state.id}/student-services/calendar`}>
                                <a class="nav-link">
                                    <span data-feather="file-text"></span>
              				Calendar
            			</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href={`/student/${this.state.id}/student-services/certificate-request`}>
                                <a class="nav-link">
                                    <span data-feather="file-text"></span>
              				Certificate Request
            			</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href={`/student/${this.state.id}/student-services/fees`}>
                                <a class="nav-link">
                                    <span data-feather="file-text"></span>
              				Tuition and Fees
            			</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href={`/student/${this.state.id}/student-services/help`}>
                                <a class="nav-link">
                                    <span data-feather="file-text"></span>
              				Help
            			</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Sidebar;