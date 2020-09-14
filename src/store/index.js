import { atom, useRecoilState } from "recoil";

const currentUserState = atom({
  key: "currentUserState",
  default: null,
  dangerouslyAllowMutability: true,
});

const useCurrentUser = () => {
  const [user, setUser] = useRecoilState(currentUserState);
  return [user, setUser];
};

export { useCurrentUser };
