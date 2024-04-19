type Nullable<T> = T | null;

type Id = string;

type User = {
  id: Id;
  name: Nullable<string>;
  alias: Nullable<string>;
  email: Nullable<string>;
  profilePictureUrl: Nullable<string>;
  isGameMaster: boolean;
  isChronicler: boolean;
};

export type { Id, User, Nullable };
