<template>
  <footer class="footer">
    <nav>
      <ul>
        <li>
          <nuxt-link to="/terms-of-service">Terms of service</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/privacy-policy">Privacy policy</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
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
