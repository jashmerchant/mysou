import Head from 'next/head';
import Image from 'next/image';

const Clubs = () => {
    return (
        <>
            <Head>
                <title>My SOU : Clubs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div class="container-fluid">
                <div class="row">
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="page0">
                        <div
                            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Clubs</h1>
                        </div>
                        <div class="album py-5">
                            <div class="container">

                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <img src="/peepal.jpg" class="card-img-top"
                                                alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Peepal Club</h5>
                                                <a target="_blank"
                                                    href="https://silveroakuni.ac.in/upload/Club%20%20brochure/02-Peepal%20Tree%20Club%20leaflet.jpg"
                                                    class="card-link">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <img src="/whiteoak.jpg"
                                                class="card-img-top" alt="..." />

                                            <div class="card-body">
                                                <h5 class="card-title">White Oak Club</h5>
                                                <a href="https://silveroakuni.ac.in/upload/Club%20%20brochure/03-White%20Oak.jpg"
                                                    class="card-link">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <img src="/black.jpg" class="card-img-top"
                                                alt="..." />

                                            <div class="card-body">
                                                <h5 class="card-title">Black Cherry</h5>
                                                <a href="https://silveroakuni.ac.in/upload/Club%20%20brochure/04-Black%20Cherry.jpg"
                                                    class="card-link">Learn More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <img src="/arjuna.jpg" class="card-img-top"
                                                alt="..." />

                                            <div class="card-body">
                                                <h5 class="card-title">Arjuna Club</h5>
                                                <a href="#" class="card-link">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <img src="/teak.png" class="card-img-top"
                                                alt="..." />

                                            <div class="card-body">
                                                <h5 class="card-title">Teak Club</h5>
                                                <a href="#" class="card-link">Learn More</a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <img src="silvermaple.jpg"
                                                class="card-img-top" alt="..." />

                                            <div class="card-body">
                                                <h5 class="card-title">Silver Maple Club</h5>
                                                <a href="#" class="card-link">Learn More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <img src="/rosewood.jpg" class="card-img-top"
                                                alt="..." />

                                            <div class="card-body">
                                                <h5 class="card-title">Indian Rosewood Club</h5>

                                                <a href="#" class="card-link">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <img src="https://silveroakuni.ac.in/upload/images/club/neem/neem1.jpg" class="card-img-top"
                                                alt="..." />

                                            <div class="card-body">
                                                <h5 class="card-title">Neem Tree Club</h5>

                                                <a href="#" class="card-link">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <img src="pincherry.jpg"
                                                class="card-img-top" alt="..." />

                                            <div class="card-body">
                                                <h5 class="card-title">Pin Cherry Club</h5>
                                                <a href="#" class="card-link">Learn More</a>
                                            </div>
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

export default Clubs;