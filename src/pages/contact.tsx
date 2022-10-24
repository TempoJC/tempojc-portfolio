import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '@/Atoms/Container';
import { PageProps } from '@/@Types';
import { SOCIAL_NETWORKS } from '@/Constants';

const ContactPage: NextPage<PageProps> = ({ refNode }) => {
	return (
		<Container ref={refNode} id={'contact'}>
			<h1 className="headline text-3xl md:text-5xl lg:text-6xl text-center">
				Connect with Me
			</h1>
			<div className="flex justify-center mt-8 px-4">
				<ul className="flex gap-6">
					<li className="w-6 h-6 opacity-70 hover:opacity-100 transition mr-8">
						Resume
					</li>
					{SOCIAL_NETWORKS.map(({ url, name, icon }) => (
						<li
							className="w-6 h-6 opacity-70 hover:opacity-100 transition"
							key={name}
						>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								title={name}
							>
								<FontAwesomeIcon
									size="3x"
									icon={icon}
									className={'fill-current'}
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
		</Container>
	);
};

export default ContactPage;
