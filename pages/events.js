import Head from 'next/head';
import Image from 'next/image';

const Events = () => {
    return (
        <>
            <Head>
                <title>My SOU : Events</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div class="container-fluid">
                <div class="row">
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="page0">
                        <div
                            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Events</h1>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-6 my-2">
                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <Image
                                                src="/tedx.jpg"
                                                height={300}
                                                width={300}
                                                class="card-img-top"
                                                alt="TedX SOU"
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">TedX Silver Oak</h5>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-danger popMsg"
                                                    data-bs-toggle="popover"
                                                >
                                                    Details
              </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="col my-2">
                                        <div class="card shadow-sm">
                                            <Image
                                                src="/talash.png"
                                                height={300}
                                                class="card-img-top"
                                                width={300}
                                                alt="..."
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">Talash 2020</h5>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-danger popMsg"
                                                    data-bs-toggle="popover"
                                                >
                                                    Details
              </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 my-2">
                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <Image
                                                src="/junoon.jpg"
                                                height={300}
                                                class="card-img-top"
                                                width={300}
                                                alt="..."
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">Junoon 2020</h5>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-danger popMsg"
                                                    data-bs-toggle="popover"
                                                >
                                                    Details
              </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 my-2">
                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <Image
                                                src="/sports.jpg"
                                                height={300}
                                                class="card-img-top"
                                                width={300}
                                                alt="..."
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">Sports 2020</h5>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-danger popMsg"
                                                    data-bs-toggle="popover"
                                                >
                                                    Details
              </button>
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

export default Events;