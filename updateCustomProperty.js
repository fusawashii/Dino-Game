  export function getCustomProperty(elem, prop) {   /* exporter les elements pour pouvoir les réutiliser*/
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0    /* Utiliser les valeurs du CSS, les convertir avant puisque ce sont des strings et si ya pas de valeur, les convertir à 0 */
  }
  
  export function setCustomProperty(elem, prop, value) {
    elem.style.setProperty(prop, value)
  }
  
  export function incrementCustomProperty(elem, prop, inc) {
    setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc)
  }