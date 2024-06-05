import './App.css';
import { useRoutes, Navigate } from 'react-router-dom';
import { MainPage } from './components/pages/MainPage';
import { LoadError } from './components/pages/LoadError';
import { TaskPage } from './components/pages/TaskPage';

export const App = () => {
	const routes = useRoutes([
		{ path: '/', element: <MainPage/> },
		{ path: '/task/:id', element: <TaskPage/>},
		{ path: "/404", element: <LoadError message="This page doesn't exist in this version of the universe"/> },
		{ path: "*", element: <Navigate to="/404" /> },
		{ path: "/task-load-error", element: <LoadError message="Task could not be loaded"/> },
		{ path: "/task-not-exist", element: <LoadError message="Task not found" /> },
	]);

	return (
		<div className="app">
			<main className="app-main">
				<h1 className="app-title">ToDo List (React Router)</h1>
				{routes}
			</main>
		</div>
	);
};
