let doorOpen = true;

function toggleDoor() {
    doorOpen = !doorOpen;
    const doorButton = document.getElementById('door');
    const statusText = document.getElementById('status');
    
    if (doorOpen) {
        doorButton.textContent = 'Fechar Porta';
        statusText.textContent = 'Porta Aberta';
        // Aqui você pode adicionar lógica para mostrar uma porta aberta
    } else {
        doorButton.textContent = 'Abrir Porta';
        statusText.textContent = 'Porta Fechada';
        // Aqui você pode adicionar lógica para mostrar uma porta fechada
    }
}
