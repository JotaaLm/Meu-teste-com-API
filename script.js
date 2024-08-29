document.getElementById('fetch-button').addEventListener('click', fetchDogImage);

function fetchDogImage() {
    
    const button = document.getElementById('fetch-button');
    const image = document.getElementById('cachorro-imagem');
    
    
    button.disabled = true;
    button.textContent = 'Carregando...';

    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
           
            image.src = data.message;
            image.alt = 'Imagem de um cachorro aleatório';
        })
        .catch(error => {
            
            console.error('Error fetching dog image:', error);
            image.src = ''; 
            image.alt = 'Erro ao carregar a imagem do cachorro';
        })
        .finally(() => {
            
            button.disabled = false;
            button.textContent = 'Clique aqui!';
        });
}
