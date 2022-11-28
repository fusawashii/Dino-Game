
  import {
    getCustomProperty,
    incrementCustomProperty,
    setCustomProperty,
  } from "./updateCustomProperty.js"
  
  const SPEED = 0.05
  const groundElems = document.querySelectorAll("[data-ground]")
  
  export function setupGround() {   /* looper le chemin du dinosaure */
    setCustomProperty(groundElems[0], "--left", 0)
    setCustomProperty(groundElems[1], "--left", 300)  /* ground dans le css */
  }
  
  export function updateGround(delta, speedScale) {  /*Mettre a jour les elements du terrain */
    groundElems.forEach(ground => {
      incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1) /* bouge le terrain à chaque fois qu'on rappelle la fonction mis à jour */
  
      if (getCustomProperty(ground, "--left") <= -300) {
        incrementCustomProperty(ground, "--left", 600)
      }
    })
  }