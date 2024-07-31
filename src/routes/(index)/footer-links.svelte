<footer class="footer">
	<nav>
		<ul>
			<li>
				<a href="/terms-of-service">Terms of service</a>
			</li>
			<li>
				<a href="/privacy-policy">Privacy policy</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</footer>

<style>
	.footer {
		width: 100%;
		height: 8em;
		border-top: 1px solid var(--color-footer-border);
	}

	.footer nav,
	.footer ul {
		height: 100%;
	}

	.footer nav {
		padding-bottom: env(safe-area-inset-bottom);
		padding-left: calc(env(safe-area-inset-left) + 1em);
		padding-right: calc(env(safe-area-inset-right) + 1em);
	}

	.footer ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	.footer li {
		height: 30%;
	}

	.footer a {
		height: 100%;
		padding: 0 20px;
		display: inline-flex;
		align-items: center;
		color: unset;
	}

	@media (min-width: 600px) {
		.footer {
			height: 3em;
		}

		.footer ul {
			margin: auto;
			flex-direction: row;
		}

		.footer li {
			height: 100%;
		}
	}
</style>
