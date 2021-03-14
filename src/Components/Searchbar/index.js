import './style.css';

export default function Searchbar({
  searchOption,
  inputValue,
  batches,
  cities,
  workstatus,
}) {
  if (searchOption == 'workstatus') {
    const workstatusOptions = workstatus.map((el) => {
      return (
        <option className="reach-out-option" key={el.name} value={el.name}>
          {el.name}
        </option>
      );
    });
    return (
      <select
        className="reach-out-select"
        onChange={(e) => inputValue(e.target.value)}>
        <option value="" selected disabled hidden>
          Choose here
        </option>
        {workstatusOptions}
      </select>
    );
  } else if (searchOption == 'batch' && batches) {
    const batchesOptions = batches.map((el) => {
      return (
        <option className="reach-out-option" key={el.name} value={el.name}>
          {el.name}
        </option>
      );
    });
    return (
      <select
        className="reach-out-select"
        onChange={(e) => inputValue(e.target.value)}>
        <option value="" selected disabled hidden>
          Choose here
        </option>
        {batchesOptions}
      </select>
    );
  } else if (searchOption == 'interests') {
    return (
      <input
        className="reach-out-input"
        type="text"
        onChange={(e) => {
          inputValue(e.target.value);
        }}></input>
    );
  } else if (searchOption == 'city' && cities) {
    const citiesOptions = cities.map((el) => {
      return (
        <option className="reach-out-option" key={el.name} value={el.name}>
          {el.name}
        </option>
      );
    });
    return (
      <select
        className="reach-out-select"
        onChange={(e) => inputValue(e.target.value)}>
        <option value="" selected disabled hidden>
          Choose here
        </option>
        {citiesOptions}
      </select>
    );
  } else {
    return <>nothing selected</>;
  }
}
