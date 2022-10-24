import { Container } from '@/Atoms/Container';
import { NextPage } from 'next';
import { PageProps } from '@/@Types';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { BLACK_ICON, COLOR_ICON, DARK_COLOR_THEME } from '@/Constants';
import brain from '@/Public/assets/brain.png';

type IconProps = {
	src: string;
	alt: string;
};

const SkillsPage: NextPage<PageProps> = ({ refNode }) => {
	const { theme } = useTheme();
	const [icons, setIcons] = useState<Array<IconProps>>();

	useEffect(() => {
		if (theme) {
			setIcons(theme === DARK_COLOR_THEME ? COLOR_ICON : BLACK_ICON);
		}
	}, [theme]);

	return (
		<Container ref={refNode} id={'skills'}>
			<div className="flex flex-col md:flex-row lg:flex-row">
				<div className="w-full md:w-2/5 lg:w-w-2/5 m-auto">
					<h1 className="headline mb-6 text-3xl md:text-5xl lg:text-4xl">
						Technologys 🥷
					</h1>

					<p className="mb-4">
						I’m a self-taught web developer with experience developing web
						applications, building websites and actively learning. I have strong
						knowledge of JavaScript and React Js - the technology I am
						interested in working with.
					</p>
				</div>

				<div className="w-full md:w-3/5 lg:w-w-3/5">
					<Image
						className="rounded-full"
						priority
						alt="brain picture"
						src={brain}
						placeholder="blur"
						quality={100}
					/>
				</div>
			</div>
			<div className="flex flex-row mt-20">
				{icons &&
					icons.map((icon, index) => (
						<div
							className="w-10 mx-2 md:w-20 lg:w-20 md:mx-10 lg:mx-10"
							key={index}
						>
							<Image priority alt={icon.alt} src={icon.src} quality={75} />
						</div>
					))}
			</div>
		</Container>
	);
};

export default SkillsPage;
