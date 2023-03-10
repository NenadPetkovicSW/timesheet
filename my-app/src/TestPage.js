import './assets/css/style.css';
import Helmet from 'react-helmet';
import { useEffect, useState } from 'react';
function TestPage(props) {

	return (
		<>
			{() => window.location.reload()}
			<head>
				<meta charset="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="viewport" content="target-densitydpi=device-dpi" />

				<title>TimeSheet</title>
				<meta name="description" content="" />

			</head>
			<body>

				<div class="container">
					<div class="wrapper">
						<section class="content">
							<h2><i class="ico clients"></i>Clients</h2>
							<div class="grey-box-wrap reports">
								<a href="#new-member" class="link new-member-popup">Create new client</a>
								<div class="search-page">
									<input type="search" name="search-clients" class="in-search" />
								</div>
							</div>
							<div class="new-member-wrap">
								<div id="new-member" class="new-member-inner">
									<h2>Create new client</h2>
									<ul class="form">
										<li>
											<label>Client name:</label>
											<input type="text" class="in-text" />
										</li>
										<li>
											<label>Address:</label>
											<input type="text" class="in-text" />
										</li>
										<li>
											<label>City:</label>
											<input type="text" class="in-text" />
										</li>
										<li>
											<label>Zip/Postal code:</label>
											<input type="text" class="in-text" />
										</li>
										<li>
											<label>Country:</label>
											<select>
												<option>Select country</option>
											</select>
										</li>
									</ul>
									<div class="buttons">
										<div class="inner">
											<a href="javascript:;" class="btn green">Save</a>
										</div>
									</div>
								</div>
							</div>
							<div class="alpha">
								<ul>
									<li>
										<a href="javascript:;">a</a>
									</li>
									<li>
										<a href="javascript:;">b</a>
									</li>
									<li>
										<a href="javascript:;">c</a>
									</li>
									<li>
										<a href="javascript:;">d</a>
									</li>
									<li>
										<a href="javascript:;">e</a>
									</li>
									<li class="active">
										<a href="javascript:;">f</a>
									</li>
									<li>
										<a href="javascript:;">g</a>
									</li>
									<li>
										<a href="javascript:;">h</a>
									</li>
									<li>
										<a href="javascript:;">i</a>
									</li>
									<li>
										<a href="javascript:;">j</a>
									</li>
									<li>
										<a href="javascript:;">k</a>
									</li>
									<li>
										<a href="javascript:;">l</a>
									</li>
									<li class="disabled">
										<a href="javascript:;">m</a>
									</li>
									<li>
										<a href="javascript:;">n</a>
									</li>
									<li>
										<a href="javascript:;">o</a>
									</li>
									<li>
										<a href="javascript:;">p</a>
									</li>
									<li>
										<a href="javascript:;">q</a>
									</li>
									<li>
										<a href="javascript:;">r</a>
									</li>
									<li>
										<a href="javascript:;">s</a>
									</li>
									<li>
										<a href="javascript:;">t</a>
									</li>
									<li>
										<a href="javascript:;">u</a>
									</li>
									<li>
										<a href="javascript:;">v</a>
									</li>
									<li>
										<a href="javascript:;">w</a>
									</li>
									<li>
										<a href="javascript:;">x</a>
									</li>
									<li>
										<a href="javascript:;">y</a>
									</li>
									<li class="last">
										<a href="javascript:;">z</a>
									</li>
								</ul>
							</div>
							<div class="accordion-wrap clients">
								<div class="item">
									<div class="heading">
										<span>ADAM Software NV</span>
										<i>+</i>
									</div>
									<div class="details">
										<ul class="form">
											<li>
												<label>Client name:</label>
												<input type="text" class="in-text" />
											</li>
											<li>
												<label>Zip/Postal code:</label>
												<input type="text" class="in-text" />
											</li>
										</ul>
										<ul class="form">
											<li>
												<label>Address:</label>
												<input type="text" class="in-text" />
											</li>
											<li>
												<label>Country:</label>
												<select>
													<option>Select country</option>
												</select>
											</li>
										</ul>
										<ul class="form last">
											<li>
												<label>City:</label>
												<input type="text" class="in-text" />
											</li>
										</ul>
										<div class="buttons">
											<div class="inner">
												<a href="javascript:;" class="btn green">Save</a>
												<a href="javascript:;" class="btn red">Delete</a>
											</div>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="heading">
										<span>Clockwork</span>
										<i>+</i>
									</div>
									<div class="details">
										<ul class="form">
											<li>
												<label>Client name:</label>
												<input type="text" class="in-text" />
											</li>
											<li>
												<label>Zip/Postal code:</label>
												<input type="text" class="in-text" />
											</li>
										</ul>
										<ul class="form">
											<li>
												<label>Address:</label>
												<input type="text" class="in-text" />
											</li>
											<li>
												<label>Country:</label>
												<select>
													<option>Select country</option>
												</select>
											</li>
										</ul>
										<ul class="form last">
											<li>
												<label>City:</label>
												<input type="text" class="in-text" />
											</li>
										</ul>
										<div class="buttons">
											<div class="inner">
												<a href="javascript:;" class="btn green">Save</a>
												<a href="javascript:;" class="btn red">Delete</a>
											</div>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="heading">
										<span>Emperor Design</span>
										<i>+</i>
									</div>
									<div class="details">
										<ul class="form">
											<li>
												<label>Client name:</label>
												<input type="text" class="in-text" />
											</li>
											<li>
												<label>Zip/Postal code:</label>
												<input type="text" class="in-text" />
											</li>
										</ul>
										<ul class="form">
											<li>
												<label>Address:</label>
												<input type="text" class="in-text" />
											</li>
											<li>
												<label>Country:</label>
												<select>
													<option>Select country</option>
												</select>
											</li>
										</ul>
										<ul class="form last">
											<li>
												<label>City:</label>
												<input type="text" class="in-text" />
											</li>
										</ul>
										<div class="buttons">
											<div class="inner">
												<a href="javascript:;" class="btn green">Save</a>
												<a href="javascript:;" class="btn red">Delete</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="pagination">
								<ul>
									<li>
										<a href="javascript:;">1</a>
									</li>
									<li>
										<a href="javascript:;">2</a>
									</li>
									<li>
										<a href="javascript:;">3</a>
									</li>
									<li class="last">
										<a href="javascript:;">Next</a>
									</li>
								</ul>
							</div>
						</section>
					</div>
				</div>
			</body>
		</>
	)
};

export default TestPage;