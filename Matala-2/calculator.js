const calcBtn = document.getElementById("calcBtn");
const resetBtn = document.getElementById("resetBtn");
const priceOutput = document.getElementById("priceOutput");

calcBtn.addEventListener("click", () => {
  let basePrice = 0;

  const siteType = document.querySelector('input[name="siteType"]:checked');
  if (!siteType) return alert("Choose a site type :(");

  if (siteType.value === "business") basePrice = 1000;
  if (siteType.value === "store") basePrice = 2000;
  if (siteType.value === "blog") basePrice = 1500;

  const pages = parseInt(document.getElementById("pageCount").value);
  if (isNaN(pages) || pages < 1 || pages > 10) return alert("Pages must be 1–10");

  const extraPages = pages > 1 ? (pages - 1) * 200 : 0;

  const custom = document.querySelector('input[name="customDesign"]:checked');
  const designFee = custom && custom.value === "yes" ? 1000 : 0;

  const total = basePrice + extraPages + designFee;
  priceOutput.textContent = `₪${total}`;
});

resetBtn.addEventListener("click", () => {
  priceOutput.textContent = "₪0";
  document.getElementById("pageCount").value = 1;
  document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);

  const noRadio = document.querySelector('input[name="customDesign"][value="no"]');
  if (noRadio) noRadio.checked = true;
});
