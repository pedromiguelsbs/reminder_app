const addButton = document.querySelector("[data-button]");
const tasksArea = document.querySelector(".tasks");

const verifyInput = () => {
  const input = document.querySelector("[data-input]");

  console.log(input.value);
  if (input.value.length == 0) {
    alert("Insira um lembrete!");
  } else {
    tasksArea.innerHTML += `<div class='task'>
            <span class='task__name'>${input.value}</span>
            <div>
                <button class="task__button check"><i class="fas fa-check"></i></button>
                <button class="task__button delete"><i class="far fa-trash-alt"></i></button>
            </div>
        </div>`;

    let allCheckButtons = document.querySelectorAll(".check");
    allCheckButtons.forEach(
      (element) =>
        (element.onclick = function () {
          const text = this.parentNode.parentNode.firstElementChild;
          text.classList.toggle("completed");
        })
    );

    let allDeleteButtons = document.querySelectorAll(".delete");
    allDeleteButtons.forEach(
      (element) =>
        (element.onclick = function () {
          this.parentNode.parentNode.remove();
        })
    );
  }
  input.value = "";
};

addButton.addEventListener("click", verifyInput);
