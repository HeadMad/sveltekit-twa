<script>
  import { init, isBackButtonSupported , mountBackButton, isBackButtonMounted, showBackButton,
  hideBackButton,
  isBackButtonVisible, } from '@telegram-apps/sdk';
init();
  mountBackButton();

</script>

<h1>TWA SDK</h1>

<h2>BackButton</h2>
<button on:click={() => isBackButtonVisible() ? hideBackButton() : showBackButton()}>Toggle</button>
<ul>
  <li>Is Supported: {isBackButtonSupported()}</li>
  <li>Is Mounted: {isBackButtonMounted()}</li>
  <li>Is Visible: {isBackButtonVisible()}</li>
</ul>
