import './action-bar.css';
import { useActions } from '../hooks/use-actions'

interface ActionBarProps {
    id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
    const { moveCell, deleteCell } = useActions();

    return (
        <div className='action-bar'>
            <button className='button is-primary is-small' title='Move cell up' onClick={() => moveCell(id, 'up')}>
                <span className='icon'>
                    <i className='fas fa-arrow-up'></i>
                </span>
            </button>
            <button className='button is-primary is-small' title='Move cell down'  onClick={() => moveCell(id, 'down')}>
            <span className='icon'>
                    <i className='fas fa-arrow-down'></i>
                </span>
            </button>
            <button className='button is-primary is-small' title='Delete cell'  onClick={() => deleteCell(id)}>
            <span className='icon'>
                    <i className='fas fa-times'></i>
                </span>
            </button>
        </div>
    );
};

export default ActionBar;