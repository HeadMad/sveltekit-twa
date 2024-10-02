<script>
  import {
    isPopupSupported,
    isPopupOpened,
    openPopup,
    isBackButtonSupported,
    mountBackButton,
    isBackButtonMounted,
    showBackButton,
    hideBackButton,
    isBackButtonVisible,
  } from "@telegram-apps/sdk";
  mountBackButton();

  async function popupOpen() {
    const promise = openPopup({
      title: "Hello!",
      message: "Here is a test message.",
      buttons: [{ id: "my-id", type: "default", text: "Default text" }],
    });
    // isPopupOpened() -> true
    const buttonId = await promise;
  }
</script>

<h1>TWA SDK</h1>

<h2>BackButton</h2>
<button
  on:click={() => (isBackButtonVisible() ? hideBackButton() : showBackButton())}
  >Toggle</button
>
<ul>
  <li>Is Supported: {isBackButtonSupported()}</li>
  <li>Is Mounted: {isBackButtonMounted()}</li>
  <li>Is Visible: {isBackButtonVisible()}</li>
</ul>

<h2>Popup</h2>

<button on:click={popupOpen}>Open Popup</button>
