const newButton = document.querySelector("#new_note");
const popupContainer = document.querySelector("#new_note_popup_container");
const newForm = document.querySelector("#new_note_popup_form");
const cancle = document.querySelector("#new_note_cancle");

class useOutsideClick {
  ref = null;
  onClickOutside = null;

  constructor(ref, onClickOutside) {
    this.ref = ref;
    this.onClickOutside = onClickOutside;

    document.addEventListener("mouseup", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.ref && !this.ref?.contains?.(event.target)) {
      this.onClickOutside(this);
    }
  };

  removeClickListener = () => {
    document.removeEventListener("mouseup", this.handleClickOutside);
  };
}

newButton.addEventListener("click", () => {
  popupContainer.classList.remove("hidden");
});

cancle.addEventListener("click", () => {
  popupContainer.classList.add("hidden");
});

const outsideClick = new useOutsideClick(newForm, () => {
  popupContainer.classList.add("hidden");
});
