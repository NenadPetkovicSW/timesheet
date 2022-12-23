import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Outlet, useNavigate } from "react-router-dom";
import './assets/css/style.css';

function Layout() {
	const navigate = useNavigate();
	const [activPage, setActivpage] = useState(() => {
		const saved = localStorage.getItem("activPage");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
	});

	useEffect(() => {
		localStorage.setItem("activPage", JSON.stringify(activPage));
	}, [activPage])



	return (
		<>
			<head>
				{() => window.location.reload()}
				<meta charset="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="viewport" content="target-densitydpi=device-dpi" />

				<title>TimeSheet</title>
				<meta name="description" content="" />
			</head>
			<header class="header">
				<div class="top-bar"></div>
				<div class="wrapper">
					<a onClick={() => { navigate('/'); setActivpage('') }} class="logo">
						<img src="assets/img/logo.png" alt="VegaITSourcing Timesheet" />
					</a>
					<ul class="user right">
						<li>
							<a onClick={() => { navigate('/'); setActivpage(''); }} >Profile</a>
						</li>
						<li class="last">
							<a onClick={() => { navigate('/'); setActivpage(''); }} >Logout</a>
						</li>
					</ul>
					<nav>
						<ul class="menu">
							<li>
								<a onClick={() => { navigate('/TimeSheet'); setActivpage('TimeSheet'); }} className={isActive("TimeSheet") ? 'btn nav active' : 'btn nav'}>TimeSheet</a>
							</li>
							<li>
								<a onClick={() => { navigate('/Clients'); setActivpage('Clients') }} className={isActive("Clients") ? 'btn nav active' : 'btn nav'}>Clients</a>
							</li>
							<li>
								<a onClick={() => { navigate('/Projects'); setActivpage('Projects')}} className={isActive("Projects") ? 'btn nav active' : 'btn nav'}>Projects</a>
							</li>
							<li>
								<a onClick={() => { navigate('/Categories'); setActivpage('Categories'); }} className={isActive("Categories") ? 'btn nav active' : 'btn nav'}>Categories</a>
							</li>
							<li>
								<a onClick={() => { navigate('/TeamMembers'); setActivpage('TeamMembers')}} className={isActive("TeamMembers") ? 'btn nav active' : 'btn nav'}>Team members</a>
							</li>
							<li class="last">
								<a onClick={() => { navigate('/Reports'); setActivpage('Reports'); }} className={isActive("Reports") ? 'btn nav active' : 'btn nav'}>Reports</a>
							</li>
						</ul>
						<span class="line"></span>
					</nav>
				</div>
			</header>
			<body>
				<Outlet />
				{/* <Helmet >
					<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
					<script type="text/javascript" src="../assets/scripts/main/default.js"></script>
					<script type="text/javascript" src="../assets/scripts/main/accordion.js"></script>
					<script type="text/javascript" src="../assets/scripts/libs/jquery.fancybox.js"></script>
				</Helmet> */}
			</ body>
			<footer class="footer">
				<div class="wrapper">
					<ul>
						<li>
							<span>Copyright. VegaITSourcing All rights reserved</span>
						</li>
					</ul>
					<ul class="right">
						<li>
							<a href="javascript:;">Terms of service</a>
						</li>
						<li>
							<a href="javascript:;" class="last">Privacy policy</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	)
	function isActive(name) {
		if (activPage == name)
			return true
		else
			return false
	}

};

export default Layout;