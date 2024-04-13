export function closeMenu() {
  const buttonEls = document.querySelectorAll("[data-header-menu-close]")

  buttonEls.forEach((el) => {
    el.addEventListener("click", () => {
      const target = el.closest("[data-header-menu]") as HTMLDetailsElement

      if (target && target.open) {
        target.open = false
      }
    })
  })
}
