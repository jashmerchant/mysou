import Head from 'next/head';

const Resources = () => {
    return (
        <>
            <Head>
                <title>My SOU : Resources</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div class="container-fluid">
                <div class="row">
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="page0">
                        <div
                            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Resources</h1>
                        </div>

                        <h4>Notices :</h4><br />
                        <div class="list-group">
                            {/* {% for item in resources %} */}
                            <div class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Online Mid Semester II Exam Schedule for 3rd, 5th, & 7th Semester (Winter 2020)</h5>
                                    <small>March 22, 2021, 2:35 p.m.</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <a href="" >
                                    <button style={{ float: "right" }} type="button" class="btn btn-primary btn-sm">View</button>
                                </a>
                            </div>
                            <div class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">5th CE Mid Sem II Syllabus Winter 2020</h5>
                                    <small>March 22, 2021, 2:35 p.m.</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <a href="" >
                                    <button style={{ float: "right" }} type="button" class="btn btn-primary btn-sm">View</button>
                                </a>
                            </div>
                            <div class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Webinar on “Spoofing Attacks for automatic speaker verification(ASV)”</h5>
                                    <small>March 22, 2021, 2:35 p.m.</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <a href="" >
                                    <button style={{ float: "right" }} type="button" class="btn btn-primary btn-sm">View</button>
                                </a>
                            </div>
                            <div class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">3rd CE Mid Sem II Syllabus Winter 2020</h5>
                                    <small>March 22, 2021, 2:35 p.m.</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <a href="" >
                                    <button style={{ float: "right" }} type="button" class="btn btn-primary btn-sm">View</button>
                                </a>
                            </div>
                            {/* {% endfor %} */}
                        </div>

                        <br /><h4>Module Solutions :</h4><br />
                        <div class="list-group">
                            {/* {% for item in resources %} */}
                            <div class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Python</h5>
                                    <small>March 22, 2021, 2:35 p.m.</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit</p>
                                <a href="" >
                                    <button style={{ float: "right" }} type="button" class="btn btn-primary btn-sm">View</button>
                                </a>
                            </div>

                            <div class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Artificial Intelligence</h5>
                                    <small>March 22, 2021, 2:35 p.m.</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit</p>
                                <a href="" >
                                    <button style={{ float: "right" }} type="button" class="btn btn-primary btn-sm">View</button>
                                </a>
                            </div>

                            {/* {% endfor %} */}
                        </div>

                        <br /><h4>Last Year Papers :</h4><br />
                        <div class="list-group">
                            {/* {% for item in resources %} */}
                            <div class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Python (Winter 2020)</h5>
                                    <small>March 22, 2021, 2:35 p.m.</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit</p>
                                <a href="" >
                                    <button style={{ float: "right" }} type="button" class="btn btn-primary btn-sm">View</button>
                                </a>
                            </div>

                            <div class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Artificial Intelligence (Winter 2020)</h5>
                                    <small>March 22, 2021, 2:35 p.m.</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit</p>
                                <a href="" >
                                    <button style={{ float: "right" }} type="button" class="btn btn-primary btn-sm">View</button>
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

export default Resources;