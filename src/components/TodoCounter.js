import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    const message = total === completed ? 'Has completado todos tus TODOs. ¡Felicitaciones! 🎉😄' : `Has completado ${completed} de ${total} TODOs`;

    return (
        <h1 className='TodoCounter'>
            {message}
        </h1>
    );
}

export {TodoCounter};