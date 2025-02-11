import * as React from "react";

import { useState } from "react";
import Counter2 from "./Counter2";
import Header from "./Header";
import { useGetAlbumsQuery } from "../reduxstore/AlbumsQuery";
export default function Albums() {
	let [page, setPage] = useState(1);
	const { data, isFetching } = useGetAlbumsQuery(page);

	React.useEffect(() => {
		const onScrollChange = (e) => {
			const currentScroll = window.innerHeight + window.scrollY;
			const bodyHeight = document.body.offsetHeight;
			if (currentScroll >= bodyHeight) {
				if (!isFetching) {
					setPage(page + 1);
				}
			}
		};
		window.addEventListener("scroll", onScrollChange);

		return () => {
			window.removeEventListener("scroll", onScrollChange);
		};
	}, [page, isFetching]);

	return (
		<div>
			{isFetching && `Loading...`}
			{data &&
				data.map((alb) => {
					return (
						<div key={alb.id}>
							<h3>{alb.title}</h3>
						</div>
					);
				})}
			{/* <Counter2/>
        <Header/> */}
		</div>
	);
}
