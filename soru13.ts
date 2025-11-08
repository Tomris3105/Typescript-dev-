type CreateGetters<T> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: () => T[K]
};

type UserProps = { id: number; name: string; };
type UserGetters = CreateGetters<UserProps>;

const userGetters: UserGetters = {
  getId: () => 1,
  getName: () => "Ali"
};

const errorGetter: UserGetters = {
  getId: () => 1,

  getName: () => 123
};

console.log("Soru 13 Başarılı!");