import styles from './Header.module.css';

const Header = () => (
	<h1 className={styles.title}>
		Welcome to{' '}
		<a href="https://github.com/TempoJC/nextjs-starter-skeleton">
			Next Skeleton!
		</a>
	</h1>
);

export { Header };
