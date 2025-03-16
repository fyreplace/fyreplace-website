<svelte:head>
	<title>Privacy policy</title>
</svelte:head>

<main>
	<h1>Fyreplace Privacy policy</h1>
	<p>
		TL;DR: your data is stored securely, and is never sold to third parties for profit or targeted
		advertising.
	</p>
	<h2 id="collection">Information collected</h2>
	<p>
		Fyreplace collects and stores some information in order to function. The following information
		is asked directly upon registration:
	</p>
	<ul>
		<li>
			<strong>Email address</strong>
			<br />
			An email will be sent to your email address during registration, as well as on each login attempt.
			Your address is sent to
			<a href="http://mailgun.com">Mailgun</a>, which is the service used for sending the emails.
			<br />
			Additionally,
			<a href="https://en.wikipedia.org/wiki/Hash_function"
				>a digital signature of the email (known as a "hashed" version of the address)</a
			>
			is sent upon registration to <a href="http://gravatar.com">Gravatar</a> in order to retrieve
			an initial profile picture, if available.
			<br />
			Your email address is not shared with any other third party.
		</li>
		<li>
			<strong>Username</strong>
			<br />
			A username is used to identify yourself while using the platform. It is presented to other users,
			and never shared with any third party.
		</li>
		<li>
			<strong>Personal bio</strong>
			<br />
			Optionally, a personal bio can be entered in your profile. It is presented to other users, and
			never shared with any third party.
		</li>
	</ul>
	<p>The following information is collected automatically upon login:</p>
	<ul>
		<li>
			<strong>Device type and operating system</strong>
			<br />
			For each connection, the type of device and the operating system used are stored. This will be
			used in the future for listing currently logged in devices, and allowing remote disconnection of
			a device.
		</li>
	</ul>
	<h2 id="third-parties">Third parties</h2>
	<p>
		Aside from <a href="http://mailgun.com">Mailgun</a> and
		<a href="http://gravatar.com">Gravatar</a>, your information is not sent to any other third
		party. Fyreplace is not made for profit, and thus no conflict of interest gets in the way of
		your privacy.
	</p>
	<h2 id="security">Security</h2>
	<p>
		Data security is two-fold. Firstly, your data is transmitted in a secure manner. Secondly, it is
		stored in a secure place.
	</p>
	<h3>Transmission</h3>
	<p>
		Your data is handled using the widely used standard of <a
			href="https://en.wikipedia.org/wiki/Transport_Layer_Security">TLS encryption</a
		>. Communications between the client and server applications never occur in clear text, and thus
		cannot be intercepted and read/tampered with by a malicious actor.
	</p>
	<h3>Storage</h3>
	<p>
		Access to the database requires a secure, random password, and is restricted to a private
		network, making it inaccessible to potential attackers.
	</p>
	<h2 id="rights">Your rights</h2>
	<p>
		Your data belongs to you, and you only. Your account information may be deleted automatically at
		your request, without human intervention. The deletion process starts as soon as the request is
		made, and is not cancellable.
		<br />
		All your personal information, as well as all of the content you have created on Fyreplace, will
		be removed.
	</p>
</main>
