import { useEffect, useRef, useState } from "react";

const ERROR_ADULT = 'Désolé, c\'est interdit aux adultes ici !';
const ERROR_BABY = 'Désolé, c\'est interdit aux bébés ici !';

function LifeCycle2() {
    const [errorMessage, setErrorMessage] = useState('');
    const [degreesMessage, setDegreesMessage] = useState('');
  const [age, setAge] = useState(4);
  const [degrees, setDegrees] = useState(0);
//   const tooHot = useRef(false)
//   const tooCold = useRef(false)
const oldDegrees = useRef(0)

  /**
   * Cette fonction est appelée dès qu'une mise à jour du DOM est effectuée.
   * Elle est aussi appelée au chargement du composant.
   * La fonction retournée contient l'ancien state avant la mise à jour
   */
  useEffect(() => {
    if (age >= 18) {
        setErrorMessage(ERROR_ADULT)
    } else if (age <= 5) {
        setErrorMessage(ERROR_BABY)
    } else {
        setErrorMessage('')
    }
    return () => {
    };
  }, [age]);

  useEffect(() => {
    let message = ''
    // if (degrees < 0){
    //     if(!tooCold.current) {
    //         message = 'Trop froid'
    //     }
    // } else if (degrees > 0){
    //     if(!tooHot.current) {
    //         message = 'Trop chaud'
    //     }
    // }
    // console.log('message', message);

    // setDegreesMessage(message)
    // return () => {
    //     if (degrees < 0){
    //         tooCold.current = true
    //         tooHot.current = false
    //     } else if (degrees > 0){
    //         tooCold.current = false
    //         tooHot.current = true
    //     } else {
    //         tooCold.current = false
    //         tooHot.current = false
    //     }
    // };
    if (oldDegrees.current === 0) {
        if (degrees < 0){
            message = 'Trop froid'
        } else if (degrees > 0){
            message = 'Trop chaud'
        }
    }
    setDegreesMessage(message)
    return () => {
        oldDegrees.current = degrees
    }
  }, [degrees]);

  /**
   * Augmente l'âge de 1 dans le state
   */
  const incrementAge = () => {
    setAge(age + 1)
  }

  /**
   * Augmente de 1 la temperature dans le state
   */
  const incrementTemperature = () => {
    setDegrees(degrees + 1)
  }

  /**
   * Diminue de 1 la temperature dans le state
   */
  const decrementTemperature = () => {
    setDegrees(degrees - 1)
  }

  return (
    <div>
      <div>
        <div>
          <h2>Exercice 1</h2>
          <h3>Age : {age}</h3>
          <p>Voici un bouton qui va augmenter l'âge de 1</p>
          <button onClick={incrementAge}>Age +1</button>
          <h3>{errorMessage}</h3>
        </div>
        <Instructions exercice={1} />
      </div>
      <div>
        <div>
          <h2>Exercice 2</h2>
          <h3>Degrés {degrees}</h3>
          <p>Voici deux boutons qui permettent de changer la température</p>
          <div>
            <button onClick={incrementTemperature}>Plus chaud</button>
            <button onClick={decrementTemperature}>Plus froid</button>
          <h3>{degreesMessage}</h3>
          </div>
        </div>
        <Instructions exercice={2} />
      </div>
    </div>
  )
}

function Instructions({ exercice }) {
  return (
    <div>
      {exercice === 1 && (
        <div>
          <p>Remplir la fonction useEffect de manière à ce que :</p>
          <p>
            Si le nouvel âge est supérieur ou égal à 18, alors mettre à jour le state de
            errorMessage pour qu'il contienne le texte suivant : "Désolé, c'est interdit aux adultes ici !".
          </p>
          <p>
            Si le nouvel âge est inférieur ou égal à 5, alors mettre à jour le state de errorMessage
            pour qu'il contienne le texte suivant : "Désolé, c'est interdit aux bébés ici!"
          </p>
          <p>Sinon, mettre à jour le state de errorMessage pour qu'il contienne un texte vide.</p>
          <p>Remplir la fonction useEffect pour que le message apparaisse au chargement de la page.</p>
        </div>
      )}
      {exercice === 2 && (
        <div>
          <p>
            Remplir la fonction useEffect de manière à ce que lorsque la température passe en
            dessous de 0, la console affiche "Trop froid !" et que quand la température passe au
            dessus de 0, la console affiche "Trop chaud !"
          </p>
          <p>S'il fait déjà trop chaud quand on incrémente la température, ne rien afficher</p>
          <p>S'il fait déjà trop froid quand on décrémente la température, ne rien afficher</p>
        </div>
      )}
    </div>
  )
}

export default LifeCycle2;