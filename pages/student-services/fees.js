import Head from 'next/head';

const Fees = () => {
	return (
		<>
			<Head>
				<title>My SOU : Tuition and Fees</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div class="container-fluid">
				<div class="row">
					<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="page0">
						<div
							class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
							<h1 class="h2">Tuition and Fees</h1>
						</div>
						<div class="container">
							<div class="row g-3">
								<div class="col-md-6 col-lg-6">
									<div class="card">
										<h4 class="mt-2 mb-3 card-title text-center">Billing details</h4>
										<div class="card-body">
											<form class="needs-validation" novalidate />
											<div class="row g-3">
												<div class="col-sm-6">
													<label for="firstName" class="form-label">First name</label>
													<input type="text" class="form-control" id="firstName" placeholder="" value=""
														required />
													<div class="invalid-feedback">
														Valid first name is required.
                                                            </div>
												</div>

												<div class="col-sm-6">
													<label for="lastName" class="form-label">Last name</label>
													<input type="text" class="form-control" id="lastName" placeholder="" value=""
														required />
													<div class="invalid-feedback">
														Valid last name is required.
                                    					</div>
												</div>


												<div class="col-12">
													<label for="email" class="form-label">Email <span class="text-muted"></span></label>
													<input type="email" class="form-control" id="email"
														placeholder="johndoe@socet.edu.in" />
													<div class="invalid-feedback">
														Please enter a valid email address.
                                    					</div>
												</div>

												<div class="col-12">
													<label for="address" class="form-label">Enrollment No.</label>
													<input type="text" class="form-control" id="address" placeholder="170770107XXX"
														required />
													<div class="invalid-feedback">
														Please enter your Enrollment No.
                                   						 </div>
												</div>

												<div class="col-12">
													<label for="address2" class="form-label">Department <span
														class="text-muted"></span></label>
													<input type="text" class="form-control" id="address2" placeholder="Department Name" />
												</div>

												<div class="col-md-5">
													<label for="country" class="form-label">Semester</label>
													<select class="form-select" id="country" required>
														<option value="">Choose</option>
														<option>Sem 7 + Sem 8</option>
														<option>Sem 7</option>
														<option>Sem 8</option>
													</select>
													<div class="invalid-feedback">
														Please select a valid country.
                                                        </div>
												</div>


												<div class="col-md-4">
													<label for="zip" class="form-label">Amount</label>
													<input type="text" class="form-control" id="zip" placeholder="" value="₹70,000"
														disabled />

												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-6 col-lg-6">
									<div class="card">
										<h4 class="mt-2 card-title text-center">Payment</h4>
										<div class="card-body">
											<div class="my-3">
												<div class="form-check-inline">
													<input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked
														required />
													<label class="form-check-label" for="credit">Credit card</label>
												</div>
												<div class="form-check-inline">
													<input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
													<label class="form-check-label" for="debit">Debit card</label>
												</div>
											</div>

											<div class="row gy-3">
												<div class="col-md-6">
													<label for="cc-name" class="form-label">Name on card</label>
													<input type="text" class="form-control" id="cc-name" placeholder="" required />
													<small class="text-muted">Full name as displayed on card</small>
													<div class="invalid-feedback">
														Name on card is required
                                </div>
												</div>

												<div class="col-md-6">
													<label for="cc-number" class="form-label">Credit card number</label>
													<input type="text" class="form-control" id="cc-number" placeholder="" required />
													<div class="invalid-feedback">
														Credit card number is required
                                </div>
												</div>

												<div class="col-md-3">
													<label for="cc-expiration" class="form-label">Expiration</label>
													<input type="text" class="form-control" id="cc-expiration" placeholder="XX/20XX"
														required />
													<div class="invalid-feedback">
														Expiration date required
                                </div>
												</div>

												<div class="col-md-3">
													<label for="cc-cvv" class="form-label">CVV</label>
													<input type="text" class="form-control" id="cc-cvv" placeholder="***" required />
													<div class="invalid-feedback">
														Security code required
                                </div>
												</div>
											</div>
											<button class="mt-3 btn btn-primary" type="submit">Checkout</button>
											{/* </form> */}
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

export default Fees;