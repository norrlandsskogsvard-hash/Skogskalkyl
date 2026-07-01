export function initRouter() {
  const menuItems = document.querySelectorAll("[data-view]");
  const views = document.querySelectorAll(".view");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const viewId = item.dataset.view;

      menuItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      views.forEach((view) => {
        view.classList.toggle("active", view.id === viewId);
      });
    });
  });
}
