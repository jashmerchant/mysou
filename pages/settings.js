import Head from 'next/head';

const Settings = () => {
    return (
        <>
            <Head>
                <title>My SOU : Settings</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div class="container-fluid">
                <div class="row">
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="page0">
                        <div
                            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Settings</h1>
                        </div>

                        <form action="{% url 'student:update' %}" method="POST">
                            {/* {% csrf_token %} */}
                            <div class="mb-3 w-25">
                                <label for="currPassword" class="form-label">Current Password</label>
                                <input name="currPassword" type="password" class="form-control" id="currPassword" required />
                            </div>
                            <div class="mb-3 w-25">
                                <label for="newPassword" class="form-label">New Password</label>
                                <input name="newPassword" type="password" class="form-control" id="newPassword" required />
                                <div id="passwordHelpBlock" class="form-text">
                                    Your password must be 8-20 characters long, contain letters and numbers, and must not
                                    contain spaces, special characters, or emoji.
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Settings;