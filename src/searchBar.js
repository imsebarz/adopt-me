import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchBar = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <div>
      <form>
        <label htmlFor="location">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button>Send</button>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
      </form>
    </div>
  );
};

export default SearchBar;
