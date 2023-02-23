export const updateEsopDiv = () => {
  let orderEsopDiv = document.getElementById("order-esop-type-div");
  let typeSelect = document.getElementById("order-type");

  let newELement = ` 
    <label for="order-esop-type">Esop Type</label>
    <select name="order-esop-type" id="order-esop-type">
        <option value="NON_PERFORMANCE">Non Performance</option>
        <option value="PERFORMANCE">Performance</option>
    </select>
    `;

  if (typeSelect.value === "SELL") {
    orderEsopDiv.innerHTML = newELement;
  } else {
    orderEsopDiv.innerHTML = "";
  }
};
