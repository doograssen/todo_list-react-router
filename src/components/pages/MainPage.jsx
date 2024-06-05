import { useStore } from '../../hooks/useStore';
import { Task } from '../Task/Task';
import { TaskForm } from '../TaskForm/TaskForm';
import { Header } from '../Header/Header';

export const MainPage = () => {
	const {form, events, getLoader, getStatus, setStatus, getList, setNewItem} = useStore();
	return (
		<div className="app-container">
			<TaskForm
				data={form.getData()}
				setData={form.setData}
				add={events.add}
				search={events.search}
			/>
			<div className={`app-content ${getLoader() ? 'app-content--update' : ''}`}>
				<Header
					searchState={getStatus('search')}
					setSearchState={setStatus('search')}
					sortStatus={getStatus('sort')}
					setSortStatus={setStatus('sort')}
				/>
				{getLoader() && (
					<div className="loader"></div>
				) }
					<ul className="app-list">
						{getList().map(({ id, text }) => (
							<Task
								key={'task-' + id}
								id={id}
								text={text}
								onDelete={events.delete}
								setNewData={setNewItem}
								needUpdate={getStatus('update')}
								setNeedUpdate={setStatus('update')}
							/>
						))}
					</ul>
			</div>
		</div>
	);
}
