// Your code here.

      let parent = document.getElementsByClassName("item");
      function onDragstart(event) {
        event.dataTransfer.setData("drag", event.target.id);
      }
      function onDragOver(event) {
        event.preventDefault();
      }
      function onDrop(event) {
        const sourceId = event.dataTransfer.getData("drag");
        const sourceElement = document.getElementById(sourceId);
        const destElement = event.target;

        const sourceNextElement = sourceElement.nextElementSibling;
        const destNextElement = destElement.nextElementSibling;

        parent.insertBefore(destElement, sourceNextElement);

        // adding sourceElement in front of destNextElement
        parent.insertBefore(sourceElement, destNextElement);
      }
      for (let x of parent) {
        x.setAttribute("draggable", true);
        x.addEventListener("dragstart", onDragstart);
        x.addEventListener("dragover", onDragOver);
        x.addEventListener("drop", onDrop);
      }
      for (let i = 0; i < parent; i++) {
        console.log(parent[i]);
        parent[i].addEventListener("dragstart", onDragstart);
        parent[i].addEventListener("dragover", onDragOver);
        parent[i].addEventListener("drop", onDrop);
      }
