import { DateTime } from "luxon";
import { atom, DefaultValue } from "recoil";
import { IClock } from "./models";
import { v4 as uuidv4 } from "uuid";

// sync recoil with localStorage
const localStorageEffect = (key: string) => ({ setSelf, onSet }) => {
  if (typeof localStorage !== "undefined") {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
  }

  onSet((newValue) => {
    if (typeof localStorage !== "undefined") {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    }
  });
};

export const centralClock = atom({
  key: "centralClock", // unique ID (with respect to other atoms/selectors)
  default: DateTime.utc(), // default value (aka initial value)
});

export const clocks = atom<IClock[]>({
  key: "clocks",
  default: [
    {
      id: uuidv4(),
      name: "Current location",
      timezone: "local",
      isPrimary: true,
    },
  ],
  effects_UNSTABLE: [localStorageEffect("clocks")],
});

export const warpClockAtom = atom<DateTime>({
  key: "warpClock", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export const showAddClockModal = atom<boolean>({
  key: "showAddClockModal",
  default: false,
});

export const showTutorialAtom = atom<boolean>({
  key: "showTutorial",
  default: false,
});
