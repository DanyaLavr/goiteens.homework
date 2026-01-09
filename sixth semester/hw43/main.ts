//! 1
function getPromise(): Promise<[string, number]> {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

//! 2
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
console.log(
  compare({ name: "Danylo", color: "red" }, { position: 1, weight: 76 })
);

//! 3
function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}
console.log(merge({ type: "submit" }, { action: "sell" }));
//! 4
class Component<T> {
  constructor(public props: T) {}
}
interface IPageProps {
  title: string;
}
class Page extends Component<IPageProps> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}
const page = new Page({ title: "title" });
page.pageInfo();
