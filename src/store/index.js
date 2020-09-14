import { atom, useRecoilState } from "recoil";

const currentUserState = atom({
  key: "currentUserState",
  default: {
    displayName: "john",
    picUrl: "",
  },
  dangerouslyAllowMutability: true,
});

const useCurrentUser = () => {
  const [user, setUser] = useRecoilState(currentUserState);
  return [user, setUser];
};

export { useCurrentUser };
