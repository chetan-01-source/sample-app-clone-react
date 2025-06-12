(function () {
  const launcher = document.createElement("div");
  launcher.id = "cometchat-launcher";
  launcher.innerText = "💬 Chat";
  launcher.style.position = "fixed";
  launcher.style.bottom = "20px";
  launcher.style.right = "20px";
  launcher.style.backgroundColor = "#005fff";
  launcher.style.color = "white";
  launcher.style.padding = "12px 16px";
  launcher.style.borderRadius = "999px";
  launcher.style.cursor = "pointer";
  launcher.style.fontFamily = "sans-serif";
  launcher.style.fontSize = "16px";
  launcher.style.zIndex = "9999";
  document.body.appendChild(launcher);

  const iframe = document.createElement("iframe");
  iframe.id = "cometchat-iframe";
  iframe.style.position = "fixed";
  iframe.style.bottom = "80px";
  iframe.style.right = "20px";
  iframe.style.width = "400px";
  iframe.style.height = "600px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "12px";
  iframe.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
  iframe.style.zIndex = "9998";
  iframe.style.display = "none";

  // Load your deployed widget inside iframe
  const appId = "271964da8b8ba220";
  const region = "in";
  const authKey = "579aa42c6af39517baac0babcd539c5f56bfd04c";
  const uid = "uid1"; // Optional: You can dynamically replace this

  const query = new URLSearchParams({ appId, region, authKey, uid }).toString();
  iframe.src = `https://sample-app-clone-react-hhb2atqsn-chetan-01-sources-projects.vercel.app/widget?${query}`;
  document.body.appendChild(iframe);

  launcher.onclick = () => {
    iframe.style.display = iframe.style.display === "none" ? "block" : "none";
  };
})();
