"use client";
import { useEffect, useState } from "react";
import qs from "qs";
import React from "react";
import Tools from "./Tools";
import Testimonials from "./Testimonials";
import CaseStudies from "./CaseStudies";
import ComparisonBox from "./ComparisonBox";
import Banner from "@/components/global/Banner";

export default function ComparisonSection({ data }) {
	const [caseStudies, setCaseStudies] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCaseStudies = async () => {
			try {
				const query = qs.stringify(
					{
						populate: {
							casestudy_section: {
								populate: {
									case_studies: {
										populate: {
											main_image: true,
											client_feedback: {
												fields: ["name", "designation", "feedback"],
											},
										},
										fields: ["headline", "slug", "state_1", "state_description1", "video_url"],
									},
								},
							},
						},
					},
					{ encodeValuesOnly: true }
				);

				const url = `${process.env.NEXT_PUBLIC_API_URL}/api/home?${query}`;
				const res = await fetch(url);

				if (!res.ok) throw new Error("Failed to fetch case studies");

				const json = await res.json();
				setCaseStudies(json?.data?.casestudy_section);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchCaseStudies();
	}, []);

	
	return (
		<div
			className={`${
				data?.caseStudies ? "py-[100px] lg:py-[140px]" : "pt-[100px] lg:pt-[140px]"
			}bg-white  bg-[url('/pages/home/papertexture.png')] bg-[length:240px_240px] bg-repeat`}
		>
			<Testimonials data={data?.testimonials} />
			<Banner data={data?.banner} />
			<div className="pt-[100px] lg:pt-[140px]">
				<ComparisonBox data={data?.comparison} />
			</div>
			<Tools data={data?.tools} />

			{caseStudies && <CaseStudies data={caseStudies} />}
		</div>
	);
}
