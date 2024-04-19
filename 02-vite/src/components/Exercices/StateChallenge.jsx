import { useState } from "react";

function StateChallenge() {
  const [animals, setAnimals] = useState([
    {
      name: "Trolilo",
      type: "troll",
    },
    {
      name: "Sheep sheep",
      type: "poisson",
    },
    {
      name: "Donald Trump",
      type: "orange",
    },
  ]);
  const [newAnimalType, setNewAnimalType] = useState("");
  const [newAnimalName, setNewAnimalName] = useState("");

  const editType = (type) => {
    setNewAnimalType(type);
  };

  const editName = (name) => {
    setNewAnimalName(name);
  };

  const saveAnimal = () => {
    setAnimals([
      ...animals,
      {
        name: newAnimalName,
        type: newAnimalType,
      },
    ]);
    setNewAnimalType('');
    setNewAnimalName('');
  };

  return (
    <div>
      <ul>
        <li>
          Afficher la liste des animaux dans une boucle map. Pour chaque animal,
          afficher son nom et son type.
        </li>
        <li>
          Créer un input texte qui permet de saisir la valeur du state
          newAnimalType. Quand sa valeur change, la valeur de newAnimalType est
          mise à jour.
        </li>
        <li>
          Créer un autre input texte qui permet de saisir la valeur du state
          newAnimalName, avec le même fonctionnement.
        </li>
        <li>
          Créer une fonction vide saveAnimal, et l'appeler depuis un bouton que
          vous créerez également.
        </li>
        <li>
          Remplir la fonction saveAnimal tel que les valeurs newAnimalType et
          newAnimalName sont sauvegardées dans un nouvel objet animal, que la
          fonction mette le tableau des animaux à jour en ajoutant le nouvel
          objet animal à la fin et qu'une fois que l'animal a été créé, la
          fonction vide les champs newAnimalType et newAnimalName.
        </li>
        <li>Bon courage !</li>
      </ul>

      <ul>
        {animals.map((animal) => (
          <li key={animal.name}>
            {animal.name} ({animal.type})
          </li>
        ))}
      </ul>

      <p>
        <input
          type="text"
          value={newAnimalName}
          onChange={(e) => editName(e.target.value)}
        />
        <input
          type="text"
          value={newAnimalType}
          onChange={(e) => editType(e.target.value)}
        />
        {newAnimalType.length > 0 && newAnimalName && (
          <button onClick={saveAnimal}>Save</button>
        )}
      </p>
    </div>
  );
}

export default StateChallenge;
