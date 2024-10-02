<script>
  import { backButton, init } from "@telegram-apps/sdk";
  init();
  backButton.mount();
</script>

<h1>TWA SDK</h1>

<h2>BackButton</h2>
<button on:click={() => backButton.isVisible() ? backButton.hide() : backButton.show()}>Toggle</button>
<ul>
  <li>Is Supported: {backButton.isSupported()}</li>
  <li>Is Mounted: {backButton.isMounted()}</li>
  <li>Is Visible: {backButton.isVisible()}</li>
</ul>
