// Your code here.

     let isDragging = false;
    let startPositionX = 0;
    let currentTranslateX = 0;

    const cubeContainer = document.getElementById('cubeContainer');

    cubeContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      startPositionX = e.clientX - currentTranslateX;
    });

    cubeContainer.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const newX = e.clientX - startPositionX;
        cubeContainer.style.transform = `translateX(${newX}px)`;
        currentTranslateX = newX;
      }
    });

    cubeContainer.addEventListener('mouseup', () => {
      isDragging = false;
    });

    cubeContainer.addEventListener('mouseleave', () => {
      isDragging = false;
    });
     