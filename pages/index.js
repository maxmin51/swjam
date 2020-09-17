import React, { Component } from "react";
import Grid from "react-css-grid";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Head from "../components/head";
import Schedule from "../components/schedule";
import People from "../components/people";
import data from "./data";
import "../styles/styles.scss";

const { peoples, juries, team, partners } = data;

export default class Main extends Component {

	render() {
		return (
			<ParallaxProvider>
				<main>
					<style jsx>{`
						.header {
							padding: var(--baseline) 0;
							margin-bottom: var(--baseline);
						}
						.container-fluid {
							position: relative;
							z-index: 1;
						}
						.logo {
							width: 50rem;
							object-fit: cover;
							position: absolute;
							top: 0;
							z-index: 0;
							pointer-events: none;
							opacity: 0.25;
						}
						.brand {
							margin: var(--baseline) 0 0 0;
						}
						.btn {
							background: var(--secondary-color);
							display: table;
							text-decoration: none;
							color: var(--background-color);
							padding: 0.5rem 1.5rem;
							line-height: 1.75rem;
							border-radius: var(--radius);
							transition: 0.1s ease-in;
							margin-bottom: 10px;
						}
						.btn:hover {
							background-color: var(--primary-color);
						}
						.btn svg {
							display: inline-block;
							vertical-align: -5px;
							margin-right: 0.5rem;
						}
						.heroConf {
							color: var(--black-color);
							text-transform: uppercase;
							width: 80rem;
							font-weight: 750;
							max-width: 100%;
							margin: var(--baseline) 0;
							
						}

						.tx-gr-pink {
							background-image: linear-gradient(
								to right,
								#ee2281,
								#ffba54
							);
							color: rgba(0, 0, 0, 0);
							-webkit-background-clip: text;
							background-clip: text;
							position: relative;
						}
						.tx-gr-blue {
							background-image: linear-gradient(
								to right,
								#009cf3,
								#16d6d9
							);
							color: rgba(0, 0, 0, 0);
							-webkit-background-clip: text;
							background-clip: text;
							position: relative;
						}
						.tx-gr-green {
							background-image: linear-gradient(
								to right,
								#16d6d9,
								#96cc29
							);
							color: rgba(0, 0, 0, 0);
							-webkit-background-clip: text;
							background-clip: text;
							position: relative;
						}
						.tx-gr-orange {
							background-image: linear-gradient(
								to right,
								#ffbf02,
								#ed0082
							);
							color: rgba(0, 0, 0, 0);
							-webkit-background-clip: text;
							background-clip: text;
							position: relative;
						}

						.tx-gr-purple {
							background-image: linear-gradient(
								to right,
								#61d4c9,
								#ffba54
							);
							color: rgba(0, 0, 0, 0);
							-webkit-background-clip: text;
							background-clip: text;
							position: relative;
						}

						.description {
							color: var(--light-gray-color);
							width: 40rem;
							max-width: 100%;
						}
						.description span {
							display: inline-flex;
							margin-right: 1em;
						}
						.description span b {
							display: inline-block;
							opacity: 0.5;
							margin-right: 0.325em;
						}
					`}</style>

					<Head title="SwJam" />

					<header className="header">
						<div className="container-fluid">

							<Parallax y={[-20, 20]} tagOuter="div">
								<h1 dir="rtl" className="heroConf">
									<span className="tx-gr-purple">
										استـــارت آپ
									</span>{" "}
									{" "}
									<span className="tx-gr-orange">
										روز جــــــم
									</span>{" "}
									{" "}
									<span className="tx-gr-blue">
										پانـــــزده اسفنـــــــد 1400
									</span>
									{" "}
									<span className="tx-gr-pink">
										جــــــــم, ایــــــران
									</span>
									
								</h1>
							</Parallax>

						</div>
					</header>


					<section dir="rtl" className="section">
						<div className="container-fluid">
							<section className="Grid">
								<aside className="section__outline">
									<h3 className="heading">
										منتورها
									</h3>
								</aside>
								<section className="section__main">
									<Grid width={320} gap={"var(--gap)"}>
										{peoples.map((p, i) => (
											<People
												key={i}
												name={p.slug}
												subject={p.subject}
												avatar={p.avatar}
												socials={p.socials}
												bio={p.bio}
											/>
										))}
									</Grid>
								</section>
							</section>
						</div>
					</section>


					<section dir="rtl" className="section">
						<div className="container-fluid">
							<section className="Grid">
								<aside className="section__outline">
									<h3 style={{ color: 'white' }} className="heading">
										زمانبندی   همایش
									</h3>
									<br />

								</aside>
								<section className="section__main">
									<section className="table">
										<header className="table-row table-head_featured">
											<div className="wrap-row">
											25 اسفند 1400
											<br />
											روز اول
											</div>
										</header>
										<Schedule
											type={"other"}
											subject={`پذیرش و استقرار در سالن افتتاحیه	`}
											time={["12:00", "14:00"]}
										/>
										<Schedule
											type={"Presentation"}
											subject={`سخنرانی ابتدایی مراسم افتتاحیه`}
											time={["14:00", "14:30"]}
										/>
										<Schedule
											type={"other"}
											subject={`معرفی محورها و منتورها`}
											time={["14:30", "15:00"]}
										/>
										<Schedule
											type={"other"}
											subject={`طرح ایده های شرکت کنندگان	`}
											time={["15:00", "17:00"]}
										/>
										<Schedule
											type={"Presentation"}
											subject={`رأی گیری و انتخاب ایده های برتر`}
											time={["17:00", "17:30"]}

										/>
										<Schedule
											type={"Break"}
											subject={`پذیرایی`}
											time={["17:00", "17:45"]}
										/>
										<Schedule
											type={"Presentation"}
											subject={`اعلام ایده های برتر`}
											time={["17:45", "18:00"]}
										/>
										<Schedule
											type={"Presentation"}
											subject={`ارائه مجدد ایده های برتر و بیان نیازها`}
											time={["18:00", "19:00"]}
										/>
										<Schedule
											type={"other"}
											subject={`تیم سازی`}
											time={["19:00", "20:00"]}
										/>
										<Schedule
											type={"Break"}
											subject={`اعزام به محل همایشهای روز جم و پذیرایی شام و اسکان`}
											time={["20:00"]}
										/>

										<header className="table-row table-head_featured">
											<div className="wrap-row">
											26 اسفند 1400
											<br />
											روز دوم
											</div>
										</header>

										<Schedule
											type={"Presentation"}
											subject={`استقرار تیمها در سالن دانشکده و کار گروهی`}
											time={["08:00", "19:00"]}
										/>
										<Schedule
											type={"Break"}
											subject={`پذیرایی صبحانه`}
											time={["08:00", "09:00"]}
										/>
										<Schedule
											type={"other"}
											subject={`کارگاه آموزشی آشنایی با بوم کسب و کار	`}
											time={["10:00", "11:00"]}
										/>
										<Schedule
											type={"Break"}
											subject={`نماز و ناهار`}
											time={["12:30", "14:00"]}
										/>

										<Schedule
											type={"Presentation"}
											subject={`کارگاه آموزشی طراحی نمونه اولیه محصول	`}
											time={["15:00", "16:00"]}
										/>
										<Schedule
											type={"Break"}
											subject={`پذیرایی عصرانه`}
											time={["17:00", "18:00"]}
										/>
										<Schedule
											type={"other"}
											subject={`اعزام به محل همایشهای روز جم و پذیرایی شام و اسکان`}
											time={["19:30"]}
										/>

										<header className="table-row table-head_featured">
											<div className="wrap-row">
											27 اسفند 1400
											<br />
											روز سوم
											</div>
										</header>

										<Schedule
											type={"other"}
											subject={`استقرار در سالن دانشکده و جمع بندی نهایی`}
											time={["08:00", "14:00"]}
										/>
										<Schedule
											type={"Break"}
											subject={`پذیرایی صبحانه`}
											time={["08:00", "09:00"]}
										/>
										<Schedule
											type={"Presentation"}
											subject={`کارگاه پرزنت حرفه ای ایده و محصول	`}
											time={["10:00", "11:00"]}
										/>
										<Schedule
											type={"Break"}
											subject={`نماز و ناهار`}
											time={["12:00", "13:00"]}
										/>
										<Schedule
											type={"Presentation"}
											subject={`آمادگی تیمها برای ارائه نهایی ایده و نمونه اولیه محصول`}
											time={["13:00", "14:00"]}
										/>
										<Schedule
											type={"Presentation"}
											subject={`استقرار در سالن اختتامیه`}
											time={["14:00", "14:30"]}
										/>
										<Schedule
											type={"Break"}
											subject={`پذیرایی`}
											time={["14:30", "15:00"]}
										/>
										<Schedule
											type={"Presentation"}
											subject={`آغاز اختتامیه و سخنرانی و معرفی داوران`}
											time={["15:00", "16:00"]}
										/>
										<Schedule
											type={"Presentation"}
											subject={`ارائه نهایی تیم ها`}
											time={["16:00", "18:00"]}
										/>
										<Schedule
											type={"Presentation"}
											subject={`انتخاب تیم های برتر توسط داوران`}
											time={["18:00", "19:30"]}
										/>
										<Schedule
											type={"Break"}
											subject={`پذیرایی	`}
											time={["18:00", "18:30"]}
										/>
										<Schedule
											type={"Presentation"}
											subject={`اعلام نتایج و اهدای جوایز	`}
											time={["18:30", "19:00"]}
										/>
										<Schedule
											type={"Presentation"}
											subject={`خداحافظی و عکس دسته جمعی`}
											time={["19:00", "19:30"]}
										/>
										<Schedule
											type={"Presentation"}
											subject={`اعزام به محل همایشهای روز جم و پذیرایی شام و اسکان`}
											time={["18:45"]}
										/>
									</section>
								</section>
							</section>
						</div>
					</section>

					<section dir="rtl" className="section">
						<div className="container">
							<section className="section__main">
								<h2 className="tx-gr-heading">محل برگزاری</h2>
								<br/>
								<Parallax y={[-10, 10]} tagOuter="div">
									<div className="location">
										<div className="location__query">
											<h3>دانشکده فنی و مهندسی جم</h3>
											<p>
												  شهرک پردیس میدان صنعت
												  <br/>
												  جم, بوشهر
											</p>
											<a
												href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&oe=UTF8&msa=0&mid=1DhGbReFjClhcmvTdN8OuDAEe5h0&ll=27.791256855179153%2C52.376595921131866&z=18"
												className="btn"
												target="_blank"
											>
												آدرس در گوگل مپ
											</a>

										</div>
									</div>
								</Parallax>
							</section>
						</div>
					</section>


					<section dir="rtl" className="section">
						<div className="container-fluid">
							<section className="Grid">
								<aside className="section__outline">
									<h3 className="heading">داوران</h3>
								</aside>
								<section className="section__main">
									<Grid width={280} gap={"var(--gap)"}>
										{juries.map((p, i) => (
											<People
												key={i}
												name={p.slug}
												avatar={p.avatar}
												socials={p.socials}
											/>
										))}
									</Grid>
								</section>
							</section>
						</div>
					</section>

					<section dir="rtl" className="section">
						<div className="container-fluid">
							<section className="section__main">
								<h2 className="tx-gr-heading">حامیان و همکاران</h2>
								<br/>
								<Grid width={200} gap={"var(--gap)"}>
									{partners.map((p, i) => (
										<figure
											className="sponsors--item"
											key={i}
										>
											<a href={p.url} target="_blank">
												<img
													src={`${p.logo}`}
													alt={p.title}
													className="sponsors--item-image"
												/>
											</a>
										</figure>
									))}
								</Grid>
							</section>
						</div>
					</section>

					<section dir="rtl" className="section">
						<div className="container-fluid">
							<section className="Grid">
								<aside className="section__outline">
									<h3 className="heading">برگزار کنندگان</h3>
								</aside>
								<section className="section__main">
									<Grid width={280} gap={"var(--gap)"}>
										{team.map((p, i) => (
											<People
												key={i}
												name={p.slug}
												avatar={p.avatar}
												socials={p.socials}
												bio={p.bio}
											/>
										))}
									</Grid>
								</section>
							</section>
						</div>
					</section>

					<footer className="footer">
						<div className="container">

							<p>
								Created by <a href="https://www.instagram.com/ebi.rastgoo5/">Ebrahim Rastgoo</a>
							</p>
							<div className="socials">
								<a
									href="https://twitter.com/swjam"
									target="_blank"
								>
									<svg
										width="24"
										height="24"
										className="icon"
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
									</svg>
								</a>
								<a href="tel:989350623783" target="_blank">
									<svg
										width="24"
										height="24"
										className="icon"
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>WhatsApp icon</title>
										<path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
									</svg>
								</a>
								<a
									href="mailto:info@swjam.ir"
									target="_blank"
								>
									<svg
										width="24"
										height="24"
										className="icon"
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
									</svg>
								</a>

								<a
									href="https://www.instagram.com/sw_jam/"
									target="_blank"
								>
									<svg
										width="24"
										height="24"
										className="icon"
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
									</svg>
								</a>
								<a
									href="https://github.com/swjam"
									target="_blank"
								>
									<svg
										width="24"
										height="24"
										className="icon"
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
									</svg>
								</a>
							</div>
						</div>
					</footer>
				</main>
			</ParallaxProvider>
		);
	}
}
