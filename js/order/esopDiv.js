const updateEsopDiv = () => {
  let orderEsopDiv = document.getElementById("order-esop-type");
  let typeSelect = document.getElementById("order-type");

  let newELement = ` 
    <label for="order-esop-type">Esop Type</label>
    <select name="order-esop-type" id="order-esop-type">
        <option value="NON_PERFORMANCE">NON_PERFORMANCE</option>
        <option value="PERFORMANCE">PERFORMANCE</option>
    </select>
    `;

  if (typeSelect.value === "SELL") {
    orderEsopDiv.innerHTML = newELement;
  } else {
    orderEsopDiv.innerHTML = "";
  }
};
