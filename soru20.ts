
type SegmentKey<S extends string> = S extends `${infer K}/${string}` ? K : S;
type AfterSegment<S extends string> = S extends `${string}/${infer Rest}` ? Rest : "";

type ParseRouteParams<T extends string> =
  T extends `${string}:${infer A}`
    ? { [K in SegmentKey<A>]: string } & ParseRouteParams<AfterSegment<A>>
    : {};


type Route1 = "/users/:id";
type Route2 = "/posts/:postId/comments/:commentId";

type Params1 = ParseRouteParams<Route1>;
type Params2 = ParseRouteParams<Route2>;

const p1: Params1 = { id: "123" };
const p2: Params2 = { postId: "abc", commentId: "xyz" };

const errorP1: Params1 = { userId: "123" };

const errorP2: Params2 = { postId: "abc" };

console.log("Soru 20 Başarılı!", p1.id, p2.postId);
