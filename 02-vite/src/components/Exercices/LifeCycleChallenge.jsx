import { useEffect, useState } from "react";

function LifeCycleChallenge() {
    const [factsOnCats, setFactsOnCats] = useState([]);

  /**
   * Simule une requête sur une API qui prend du temps et renvoie des faits sur les chats
   */
  const fetchFacts = () => {
    setTimeout(() => {
        console.log('yolo');
      setFactsOnCats([
        { text: 'Un chat a fait tomber le sapin' },
        { text: 'Un chat est rentré chez lui pour manger des croquettes' },
        { text: 'Un chat est rentré par intérêt chez son maître' },
        { text: 'Un chat est finalement adorable' },
      ]);
    }, 300);
  }

  const removeCat = (catToRemove) =>{
    setFactsOnCats(factsOnCats.filter((cat) => cat.text !== catToRemove))
  }

  useEffect(() => {
    fetchFacts()
  }, []);

  return (
    <div>
      <h1>Fetch their soul !</h1>
      <Instructions />

      <h1>Result</h1>
        <ul>
            {factsOnCats.map((cat) => 
                <li key={cat.text}>{cat.text} <button onClick={() => removeCat(cat.text)}>Supprimer</button></li>
                
            )}
        </ul>
        
    </div>
  )
}

function Instructions() {
  return (
    <div>
      <p>Dans le code se trouve une fonction fetchFacts</p>
      <p>Cette fonction va récupérer des faits (on simule une API) sur les chats et les mettre dans le state factsOnCats</p>
      <p>Afficher le contenu de factsOnCats. La fonction fetchFacts ne doit pas être modifiée et ne renvoie rien, il faut l'appeler quelque part.</p>
      <p>Pour chaque fait, ajouter un bouton qui permet de retirer ce fait du tableau factsOnCats</p>
      <p>Remplir le useEffect de manière à ce que si factsOnCats est vide, alors on retourne automatiquement charger des chats.</p>
    </div>
  )
}

export default LifeCycleChallenge;