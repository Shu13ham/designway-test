document.addEventListener('DOMContentLoaded', function() {

    const numberOfSets = 5; 
    const container = document.querySelector('.floating-objects');
    const imageUrls = {
    'lg-hexagon': './_assets/images/lg-hexagon.png',
    'lg-ball': './_assets/images/lg-metal-ball.png',
    'sm-hexagon': './_assets/images/sm-hexagon.png',
    'sm-ball': './_assets/images/sm-metal-ball.png'
    };

    for (let i = 0; i < numberOfSets; i++) {
        Object.keys(imageUrls).forEach(className => {
          const imgElement = document.createElement('img');
          imgElement.classList.add(className);
          imgElement.src = imageUrls[className];
          imgElement.alt = '';
      
          imgElement.style.bottom = `${Math.random() * window.innerHeight}px`;
          imgElement.style.left = `${Math.random() * 90}%`;
          imgElement.style.width = `${Math.random() * 50 + 30}px`;

          const animationDuration = Math.random() * 10 + 4;
          const animationDelay = Math.random() * 5; 
      
          imgElement.style.animation = `floating ${animationDuration}s linear ${animationDelay}s infinite`;
      
          container.appendChild(imgElement);
        });
      }
});