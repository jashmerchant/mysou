import Head from 'next/head';
import styles from '../../../styles/Grades.module.css';
import { Bar } from 'react-chartjs-2';

const SPI = {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7'],
    datasets: [{
        label: 'My SPI',
        data: [9.0, 8.6, 8.4, 9.3, 8.8, 9.2, 10],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: '#f54266',
        borderWidth: 2,
        barPercentage: 0.7
    },
    {
        label: "Topper's SPI",
        data: [9.8, 9.5, 9.3, 9.3, 9.9, 10, 10],
        lineTension: 0,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: '#007bff',
        borderWidth: 2,
        barPercentage: 0.7
        // pointBackgroundColor: '#007bff'
    }]
}

const CPI = {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7'],
    datasets: [{
        label: 'My CPI',
        data: [9.0, 8.8, 8.7, 8.8, 8.82, 8.9, 9],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: '#f54266',
        borderWidth: 2,
        barPercentage: 0.7
    },
    {
        label: "Topper's CPI",
        data: [9.8, 9.65, 9.5, 9.47, 9.56, 9.63, 9.7],
        lineTension: 0,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: '#007bff',
        borderWidth: 2,
        barPercentage: 0.7
        // pointBackgroundColor: '#007bff'
    }]
}

const Grades = () => {
    return (
        <>
            <Head>
                <title>My SOU : Grades</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div class="container-fluid">
                <div class="row">
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="page0">
                        <div
                            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">My Results</h1>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md my-2">
                                    <div class="card">
                                        <div class="card-body">
                                            <h3>SPI (Semester Performance Index) </h3>
                                        </div>
                                        <div class="card-body">
                                            <Bar
                                                data={SPI}
                                                height={260}
                                                options={{
                                                    maintainAspectRatio: false,
                                                    scales: {
                                                        yAxes: [{
                                                            ticks: {
                                                                beginAtZero: false,
                                                                stepSize: 0.5
                                                            }
                                                        }]
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md my-2">
                                    <div class="card" >
                                        <div class="card-body">
                                            <h3>CPI (Cumulative Performance Index) </h3>
                                        </div>
                                        <div class="card-body">
                                            <Bar
                                                data={CPI}
                                                height={260}
                                                options={{
                                                    maintainAspectRatio: false,
                                                    scales: {
                                                        yAxes: [{
                                                            ticks: {
                                                                beginAtZero: false,
                                                                stepSize: 0.5
                                                            }
                                                        }]
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />

                        <div class="tableresponsive" className={styles.tableresponsive}>
                            <table class="table table-sm table-bordered border-dark">
                                <thead class="table-dark">
                                    <tr>
                                        <th>Subject</th>
                                        <th>Grade</th>
                                        <th>SPI</th>
                                        <th>CPI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="5" class="table-primary">1</td>
                                    </tr>
                                    <tr>
                                        <td>Physics</td>
                                        <td>AB</td>
                                        <td rowspan="5">9</td>
                                        <td rowspan="5">9</td>
                                    </tr>
                                    <tr>
                                        <td>Calculus</td>
                                        <td>AB</td>
                                    </tr>
                                    <tr>

                                        <td>Elements of Mechanical Engg.</td>
                                        <td>BB</td>
                                    </tr>
                                    <tr>
                                        <td>Elements of Electrical Engg.</td>
                                        <td>AA</td>
                                    </tr>
                                    <tr>
                                        <td>Communication Skills</td>
                                        <td>BB</td>
                                    </tr>

                                    <tr>
                                        <td colspan="5" class="table-primary">2</td>
                                    </tr>
                                    <tr>
                                        <td>CPU</td>
                                        <td>AB</td>
                                        <td rowspan="5">8.6</td>
                                        <td rowspan="5">8.8</td>
                                    </tr>
                                    <tr>
                                        <td>Calculus</td>
                                        <td>AB</td>
                                    </tr>
                                    <tr>

                                        <td>Enviornmental Sudies</td>
                                        <td>AA</td>
                                    </tr>
                                    <tr>
                                        <td>Vector Calculus</td>
                                        <td>AB</td>
                                    </tr>
                                    <tr>
                                        <td>Engineerig Graphics</td>
                                        <td>BB</td>
                                    </tr>

                                    <tr>
                                        <td colspan="5" class="table-primary">3</td>
                                    </tr>
                                    <tr>
                                        <td>AEM</td>
                                        <td>AB</td>
                                        <td rowspan="5">8.4</td>
                                        <td rowspan="5">8.7</td>
                                    </tr>
                                    <tr>
                                        <td>EEM</td>
                                        <td>AB</td>
                                    </tr>
                                    <tr>

                                        <td>Data Stuctures</td>
                                        <td>BB</td>
                                    </tr>
                                    <tr>
                                        <td>DBS</td>
                                        <td>AA</td>
                                    </tr>
                                    <tr>
                                        <td>Digital Electronics</td>
                                        <td>BB</td>
                                    </tr>

                                    <tr>
                                        <td colspan="5" class="table-primary">4</td>
                                    </tr>
                                    <tr>
                                        <td>Operating Systems</td>
                                        <td>AB</td>
                                        <td rowspan="5">9.3</td>
                                        <td rowspan="5">8.8</td>
                                    </tr>
                                    <tr>
                                        <td>C++</td>
                                        <td>AB</td>
                                    </tr>
                                    <tr>

                                        <td>NSM</td>
                                        <td>BB</td>
                                    </tr>
                                    <tr>
                                        <td>Computer Oragnization</td>
                                        <td>AA</td>
                                    </tr>
                                    <tr>
                                        <td>Computer Networks</td>
                                        <td>BB</td>
                                    </tr>

                                    <tr>
                                        <td colspan="5" class="table-primary">5</td>
                                    </tr>
                                    <tr>
                                        <td>Cyber Security</td>
                                        <td>AB</td>
                                        <td rowspan="5">8.8</td>
                                        <td rowspan="5">8.82</td>
                                    </tr>
                                    <tr>
                                        <td>ADA</td>
                                        <td>AB</td>
                                    </tr>
                                    <tr>

                                        <td>OOP using Java</td>
                                        <td>BB</td>
                                    </tr>
                                    <tr>
                                        <td>Microprocessor and Interfacing</td>
                                        <td>AA</td>
                                    </tr>
                                    <tr>
                                        <td>System Programming</td>
                                        <td>BB</td>
                                    </tr>

                                    <tr>
                                        <td colspan="5" class="table-primary">6</td>
                                    </tr>
                                    <tr>
                                        <td>Software Engineering</td>
                                        <td>AB</td>
                                        <td rowspan="5">9.2</td>
                                        <td rowspan="5">8.9</td>
                                    </tr>
                                    <tr>
                                        <td>Theory of Computation</td>
                                        <td>AB</td>
                                    </tr>
                                    <tr>

                                        <td>Advance Java</td>
                                        <td>BB</td>
                                    </tr>
                                    <tr>
                                        <td>Web Technology</td>
                                        <td>AA</td>
                                    </tr>
                                    <tr>
                                        <td>.Net Technology</td>
                                        <td>BB</td>
                                    </tr>

                                    <tr>
                                        <td colspan="5" class="table-primary">7</td>
                                    </tr>
                                    <tr>
                                        <td>Physics</td>
                                        <td>AB</td>
                                        <td rowspan="5">10</td>
                                        <td rowspan="5">9</td>
                                    </tr>
                                    <tr>
                                        <td>Calculus</td>
                                        <td>AB</td>
                                    </tr>
                                    <tr>

                                        <td>Elements of Mechanical Engg.</td>
                                        <td>BB</td>
                                    </tr>
                                    <tr>
                                        <td>Elements of Electrical Engg.</td>
                                        <td>AA</td>
                                    </tr>
                                    <tr>
                                        <td>Communication Skills</td>
                                        <td>BB</td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" class="table-primary">8</td>
                                    </tr>
                                    <tr>
                                        <td>Physics</td>
                                        <td>AB</td>
                                        <td rowspan="5">8.6</td>
                                        <td rowspan="5">8.6</td>
                                    </tr>
                                    <tr>
                                        <td>Calculus</td>
                                        <td>AB</td>
                                    </tr>
                                    <tr>

                                        <td>Elements of Mechanical Engg.</td>
                                        <td>BB</td>
                                    </tr>
                                    <tr>
                                        <td>Elements of Electrical Engg.</td>
                                        <td>AA</td>
                                    </tr>
                                    <tr>
                                        <td>Communication Skills</td>
                                        <td>BB</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Grades;