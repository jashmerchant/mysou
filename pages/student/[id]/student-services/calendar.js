import Head from 'next/head';

const Calendar = () => {
    return (
        <>
            <Head>
                <title>My SOU : Calendar</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div class="container-fluid">
                <div class="row">
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="page0">
                        <div
                            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Calendar</h1>
                        </div>
                        <iframe src="https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/uploads/AC_19-20_Odd_Vacation_458601.pdf"
                            width="100%" height="800px">
                        </iframe>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Calendar;