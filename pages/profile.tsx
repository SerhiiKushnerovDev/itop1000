import { FormEvent, useCallback, useReducer } from "react";

import FormInput from "../components/FormInput";

function getErrorMessage(input: string) {
  if (input.length > 0 && input.length < 5)
    return "Minimum input length of 5 characters";
  return null;
}

interface IAction {
  action: string;
  payload: string;
}
interface IStore {
  name: string;
  email: string;
  address: string;
  country: string;
  bio: string;
}

export default function Profile() {
  const [state, dispatch] = useReducer(
    (store: IStore, action: IAction): IStore => {
      store[action.action] = action.payload;
      return store;
    },
    { name: "", email: "", address: "", country: "", bio: "" }
  );

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      "Pretending to send form data...",
      Object.fromEntries(new FormData(e.currentTarget).entries())
    );
  };

  const onInputCallBack = (actionName: string) =>
    useCallback((data) => dispatch({ action: actionName, payload: data }), []);

  return (
    <form
      className="max-w-screen-sm m-5 p-3 space-y-3 border"
      onSubmit={submitForm}
    >
      {Object.keys(state)?.map((el, idx) => {
        return (
          <div key={idx}>
            <FormInput
              id={el}
              label={el}
              onInput={onInputCallBack(state[idx])}
              errorMessage={state[idx]}
            />
          </div>
        );
      })}

      <div className="text-center pt-4">
        <button type="submit" className="ml-auto border p-3">
          Save
        </button>
      </div>
    </form>
  );
}
