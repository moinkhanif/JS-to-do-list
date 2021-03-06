import domchange from './dom-change';
import Projects from './Projects';
import './styles.css';
import toDoPage from './todo';

const importedProject = Projects();
const importedtoDoPage = toDoPage();

window.onload = () => {
  const projects = importedProject.getList('projectList');
  domchange.projectOptions(projects);
  domchange.projectListNav(projects);
  importedProject.addProject();
  domchange.addListeners();
  importedtoDoPage.addTodoLogic();
};
