// const hobbies = [
//   "playing my ukulele",
//   "writing poetry on my substack",
//   "brewing coffee with my v60",
//   "cafe hopping around the city",
//   "pretending to be busy",
//   "walking through cities",
//   "smashing birdies on the court",
//   "shredding a mountain on my snowboard",
//   "playing pump it up",
//   "cooking mapo tofu",
//   "walking through art galleries",
//   "drafting up new songs",
//   "bar hopping through neighbourhoods",
//   "watching super smash bros melee",
//   "trying to get on top of another mountain",
//   "crafting a new spotify playlist",
//   "missing dynos at my local climbing gym",
//   "still breaking code lol",
// ];

// const space = [
//   "corner",
//   "fragment",
//   "sliver",
//   "pocket",
//   "section",
//   "node",
//   "slice",
//   "shard",
//   "bit",
//   "piece",
//   "string",
// ];

// function useWordCycle(words) {
//   const [currentWord, setCurrentWord] = useState(
//     words[Math.floor(Math.random() * words.length)]
//   );

//   const handleClick = () => {
//     const currentIndex = words.indexOf(currentWord);
//     const nextIndex = (currentIndex + 1) % words.length;
//     setCurrentWord(words[nextIndex]);
//   };

//   return [currentWord, handleClick];
// }

function Home() {
  // const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  // const [currentSpace, handleSpaceClick] = useWordCycle(space);

  return (
    <div>
      <p>
        collection of my projects, book reviews, random bits and bobs.
      </p>
      <br></br>
      <p>
        website is always being updated although with no particular cadence.
      </p>
    </div>
  );
}

export default Home;
