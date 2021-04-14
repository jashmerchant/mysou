import Head from 'next/head';
import { Doughnut } from 'react-chartjs-2';
import getConfig from 'next/config';
import { parseCookies } from 'nookies';

const data = {
    labels: [
        'Present %',
        'Absent %'
    ],
    datasets: [{
        data: [77, 23],
        backgroundColor: [
            '#FF6384',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#FFCE56'
        ]
    }]
};

export default function Dashboard({ studentProfiles }) {
    return (
        <>
            <Head>
                <title>My SOU</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div class="container-fluid">
                <div class="row">
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="page0">
                        <div
                            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">My Profile</h1>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-5">
                                    <div class="card">
                                        <h4 class="text-center card-title mt-1">Academic Info</h4>
                                        <div class="card-body">
                                            <table class="table table-hover table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Name</th>
                                                        <td>{studentProfiles.Name}</td>
                                                        {/* <td>Jash</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Enrollment No.</th>
                                                        <td>{studentProfiles.Enrollment_Number}</td>
                                                        {/* <td>170770107080</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Course</th>
                                                        <td>{studentProfiles.Course}</td>
                                                        {/* <td>BE</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Branch</th>
                                                        <td>{studentProfiles.Branch}</td>
                                                        {/* <td>CE</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">College</th>
                                                        <td>{studentProfiles.College}</td>
                                                        {/* <td>SOCET</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Academic Status</th>
                                                        <td>{studentProfiles.Academic_Status}</td>
                                                        {/* <td>Studying</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Current Sem</th>
                                                        <td><span class="badge bg-success">{studentProfiles.Current_Sem}</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">CPI</th>
                                                        <td>{studentProfiles.CPI}</td>
                                                        {/* <td>9</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">CGPA</th>
                                                        <td>{studentProfiles.CGPA}</td>
                                                        {/* <td>10</td> */}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-7">
                                    <div class="alert alert-danger" role="alert">
                                        <strong>Everybody!</strong> fill in this <a href="#" class="alert-link">Google Form</a> to enroll for Crash Course.
										</div>
                                    <div class="alert alert-success" role="alert">
                                        <h4 class="alert-heading">Well done!</h4>
                                        <p>Aww yeah, you successfully read this important alert message. This example text is
                                        going to run a bit longer so that you can see how spacing within an alert works with
                        					this kind of content.</p>
                                        <hr />
                                        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things
                        					nice and tidy.</p>
                                    </div>
                                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div class="alert alert-info" role="alert">
                                        <h4 class="alert-heading">Lorem Ipsum</h4>
                                        <p>Aww yeah, you successfully read this important alert message. This example text is
                                        going to run a bit longer so that you can see how spacing within an alert works with
                        						this kind of content.</p>
                                        <hr />
                                        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things
                        						nice and tidy.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-5">
                                    <div class="card">
                                        <h4 class="text-center card-title mt-1">Attendance</h4>
                                        <div class="card-body">
                                            <Doughnut
                                                data={data}
                                                width={220}
                                                height={220}
                                                options={{
                                                    maintainAspectRatio: false

                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {

    const jwt = parseCookies(context).jwt
    const { id } = context.query

    const res = await fetch(`${publicRuntimeConfig.API_URL}/student-profiles/${id}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
    const studentProfiles = await res.json()

    return {
        props: {
            studentProfiles: studentProfiles,
        }
    }
}
