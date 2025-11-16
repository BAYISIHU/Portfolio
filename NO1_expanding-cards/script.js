// 这会返回一个 NodeList (节点列表)，包含所有匹配的元素
const allPanels = document.querySelectorAll('.panel');
function removeActiveClasses() {
  allPanels.forEach(panel => {
    panel.classList.remove('active');
  });
}
allPanels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});   