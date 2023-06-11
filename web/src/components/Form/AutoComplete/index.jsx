import Turnstone from "turnstone";
import Label from "../Label";
// Tailwind classes for Turnstone elements
const styles = {
  input:
    "w-full h-12 border border-blue-gray-200 py-2 pl-10 pr-9 text-xl text-oldsilver-800 outline-none rounded-md",
  inputFocus:
    "w-full h-12 border-x-0 border-t-0 border-b border-crystal-500 py-2 pl-10 pr-9 text-xl text-oldsilver-800 outline-none sm:rounded-md sm:border",
  query: "text-oldsilver-800 placeholder-oldsilver-400",
  typeahead: "text-oldsilver-400 border-white",
  cancelButton: `absolute w-10 h-12 inset-y-0 left-0 items-center justify-center z-10 text-crystal-600 inline-flex sm:hidden`,
  clearButton:
    "absolute inset-y-0 right-0 w-10 inline-flex items-center justify-center text-crystal-500 hover:text-hotpink-300",
  listbox:
    "w-full bg-white sm:border sm:border-crystal-500 sm:rounded-md text-left sm:mt-2 p-2 sm:drop-shadow-xl",
  groupHeading:
    "cursor-default mt-2 mb-0.5 px-1.5 uppercase text-sm text-hotpink-500",
  item: "cursor-pointer p-1.5 text-lg whitespace-nowrap text-ellipsis overflow-hidden text-oldsilver-700",
  highlightedItem:
    "cursor-pointer p-1.5 text-lg whitespace-nowrap sm:text-ellipsis overflow-hidden text-oldsilver-700 rounded-md bg-gradient-to-t from-crystal-100 to-white",
  noItems: "cursor-default text-center my-20",
};

function Item(props) {
  const {
    appearsInDefaultListbox,
    index,
    item,
    query,
    searchType = "startswith",
    setSelected,
    totalItems,
  } = props;
  if (typeof item === "string")
    return <div className="bg-white w-full">{item}</div>;

  return (
    <div className="bg-white w-full">
      <h3>{item.title}</h3>
      <p>{item.subtitle}</p>
    </div>
  );
}

function AutoComplete(props) {
  const { items, placeholder, label: Label } = props;
  const listbox = {
    data: items,
    searchType: "contains",
  };

  return (
    <label>
      {Label && <Label />}
      <Turnstone
        listbox={listbox}
        matchText={true}
        typeahead={true}
        Item={Item}
        styles={styles}
        placeholder={placeholder}
      />
    </label>
  );
}

Object.assign(AutoComplete, {
  Label,
});

export default AutoComplete;
