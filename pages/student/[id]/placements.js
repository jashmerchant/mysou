import Head from 'next/head';

const Placements = () => {
    return (
        <>
            <Head>
                <title>My SOU : Placements</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div class="container-fluid">
                <div class="row">
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="page0">
                        <div
                            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Placements</h1>
                        </div>

                        <div class="list-group">
                            {/* {% for item in placements %} */}
                            <div class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Dell Technologies</h5>
                                    <small>March 22, 2021, 6:19 p.m.</small>
                                </div>
                                <p class="mb-1 text-muted">
                                    Profile: Remote System Engineer. Eligibility: EE EC CE IT 2020/2021 aggregate of 60% or above. Job Requirements: Clearly understand the request and provide a solution from personal knowledge assisted by local tools, product documentation, and escalation to subject matter experts within the agreed turn around time by the requester Track and report the remote presales activities conducted for a given timeframe to showcase goal achievement and differentiated outcomes . Solution orientation Expand knowledge of Dell Technologies products Hiring process: Virtual Interview Salary: Best in Industry Interested students need to register on the below link BY 23rd OF MARCH 2021 10 AM
                                </p>
                                <a href="" target="_blank">
                                    <button style={{ float: "right" }} type="button" class="btn btn-primary btn-sm mx-2">Apply</button>
                                </a>
                            </div>
                            {/* {% endfor %} */}
                        </div>

                        <br />

                        <div class="list-group">
                            {/* {% for item in placements %} */}
                            <div class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Microsoft</h5>
                                    <small>March 22, 2021, 6:19 p.m.</small>
                                </div>
                                <p class="mb-1 text-muted">
                                    Profile: Remote System Engineer. Eligibility: EE EC CE IT 2020/2021 aggregate of 60% or above. Job Requirements: Clearly understand the request and provide a solution from personal knowledge assisted by local tools, product documentation, and escalation to subject matter experts within the agreed turn around time by the requester Track and report the remote presales activities conducted for a given timeframe to showcase goal achievement and differentiated outcomes . Solution orientation Expand knowledge of Dell Technologies products Hiring process: Virtual Interview Salary: Best in Industry Interested students need to register on the below link BY 23rd OF MARCH 2021 10 AM
                                </p>
                                <a href="" target="_blank">
                                    <button style={{ float: "right" }} type="button" class="btn btn-primary btn-sm mx-2">Apply</button>
                                </a>
                            </div>
                            {/* {% endfor %} */}
                        </div>

                        <br />

                        <div class="list-group">
                            {/* {% for item in placements %} */}
                            <div class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Google</h5>
                                    <small>March 22, 2021, 6:19 p.m.</small>
                                </div>
                                <p class="mb-1 text-muted">
                                    Profile: Remote System Engineer. Eligibility: EE EC CE IT 2020/2021 aggregate of 60% or above. Job Requirements: Clearly understand the request and provide a solution from personal knowledge assisted by local tools, product documentation, and escalation to subject matter experts within the agreed turn around time by the requester Track and report the remote presales activities conducted for a given timeframe to showcase goal achievement and differentiated outcomes . Solution orientation Expand knowledge of Dell Technologies products Hiring process: Virtual Interview Salary: Best in Industry Interested students need to register on the below link BY 23rd OF MARCH 2021 10 AM
                                </p>
                                <a href="" target="_blank">
                                    <button style={{ float: "right" }} type="button" class="btn btn-primary btn-sm mx-2">Apply</button>
                                </a>
                            </div>
                            {/* {% endfor %} */}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Placements;