import styles from './Footer.module.css';

const Footer = () => (
	<footer className={styles.footer}>
		<a
			href="https://github.com/TempoJC"
			target="_blank"
			rel="noopener noreferrer"
		>
			Powered by <span className={styles.name}>@TempoJC</span>
		</a>
	</footer>
);

export { Footer };
